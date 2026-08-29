package magefile

import (
	"context"
	"fmt"
	"os"
	"os/exec"
	"os/signal"
	"sync"
	"syscall"
)

func AppRun() error {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	sigCh := make(chan os.Signal, 1)
	signal.Notify(sigCh, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-sigCh
		fmt.Println("\nReceived interrupt signal, stopping applications...")
		cancel()
	}()

	var wg sync.WaitGroup

	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println("Starting Backend (Django)...")
		cmd := exec.CommandContext(ctx, "uv", "run", "python", "backend/manage.py", "runserver")
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr

		if err := cmd.Run(); err != nil {
			fmt.Printf("Backend exited: %v\n", err)
		}
		cancel()
	}()

	wg.Add(1)
	go func() {
		defer wg.Done()
		fmt.Println("Starting Web (Next.js)...")
		cmd := exec.CommandContext(ctx, "npm.cmd", "run", "dev")
		cmd.Dir = "web"
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr

		if err := cmd.Run(); err != nil {
			fmt.Printf("Web exited: %v\n", err)
		}

		cancel()
	}()

	wg.Wait()
	fmt.Println("Applications have stopped.")
	return nil
}
