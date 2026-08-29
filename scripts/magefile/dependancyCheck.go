package magefile

import (
	"fmt"
	"os"
	"os/exec"
)

func DependancyCheck() error {
	fmt.Println("--- Checking backend dependencies (uv sync) ---")
	cmdBackend := exec.Command("uv", "sync", "--all-packages")
	cmdBackend.Stdout = os.Stdout
	cmdBackend.Stderr = os.Stderr
	if err := cmdBackend.Run(); err != nil {
		return fmt.Errorf("backend dependencies check failed: %w", err)
	}

	fmt.Println("--- Checking web dependencies (npm install) ---")
	cmdWeb := exec.Command("npm.cmd", "install")
	cmdWeb.Dir = "web"
	cmdWeb.Stdout = os.Stdout
	cmdWeb.Stderr = os.Stderr
	if err := cmdWeb.Run(); err != nil {
		return fmt.Errorf("web dependencies check failed: %w", err)
	}

	fmt.Println("Dependencies check complete!")
	return nil
}
