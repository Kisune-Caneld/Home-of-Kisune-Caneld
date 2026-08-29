package magefile

import (
	"fmt"
	"os"
	"os/exec"
)

func FrontendBuild() error {
	fmt.Println("--- Building Frontend (Next.js) ---")
	cmdNextBuild := exec.Command(npmExecutable(), "run", "build")
	cmdNextBuild.Dir = "web"
	cmdNextBuild.Stdout = os.Stdout
	cmdNextBuild.Stderr = os.Stderr
	if err := cmdNextBuild.Run(); err != nil {
		return fmt.Errorf("frontend build failed: %w", err)
	}
	fmt.Println("Frontend build passed!")
	return nil
}

func BackendBuild() error {
	fmt.Println("--- Checking Backend App Structure & Django Validation ---")
	cmdCheck := exec.Command("uv", "run", "--package", "backend", "--group", "dev", "python", "manage.py", "check")
	cmdCheck.Dir = "backend"
	cmdCheck.Stdout = os.Stdout
	cmdCheck.Stderr = os.Stderr
	if err := cmdCheck.Run(); err != nil {
		return fmt.Errorf("backend check failed: %w", err)
	}
	fmt.Println("Backend validation passed!")
	return nil
}

func AppBuild() error {
	fmt.Println("=== Starting Full App Build ===")

	if err := FrontendBuild(); err != nil {
		return err
	}

	if err := BackendBuild(); err != nil {
		return err
	}

	fmt.Println("=== Full App Build Passed! ===")
	return nil
}
