package magefile

import (
	"bytes"
	"fmt"
	"os"
	"os/exec"
	"runtime"
	"strings"
)

func npmExecutable() string {
	if runtime.GOOS == "windows" {
		return "npm.cmd"
	}
	return "npm"
}

func npxExecutable() string {
	if runtime.GOOS == "windows" {
		return "npx.cmd"
	}
	return "npx"
}

func FrontendQualityCheck() error {
	fmt.Println("--- Running Frontend Lint (Prettier Check) ---")
	cmdPrettier := exec.Command(npxExecutable(), "prettier", "--check", ".")
	cmdPrettier.Dir = "web"
	cmdPrettier.Stdout = os.Stdout
	cmdPrettier.Stderr = os.Stderr
	if err := cmdPrettier.Run(); err != nil {
		return fmt.Errorf("frontend prettier check failed: %w", err)
	}

	fmt.Println("--- Running Frontend Lint (ESLint + Security) ---")
	cmdEslint := exec.Command(npmExecutable(), "run", "lint")
	cmdEslint.Dir = "web"
	cmdEslint.Stdout = os.Stdout
	cmdEslint.Stderr = os.Stderr
	if err := cmdEslint.Run(); err != nil {
		return fmt.Errorf("frontend eslint check failed: %w", err)
	}

	fmt.Println("Frontend quality check passed!")
	return nil
}

func BackendQualityCheck() error {
	fmt.Println("--- Running Backend Lint (Ruff) ---")
	cmdRuff := exec.Command("uv", "run", "--package", "backend", "--group", "dev", "ruff", "check", "backend")
	cmdRuff.Stdout = os.Stdout
	cmdRuff.Stderr = os.Stderr
	if err := cmdRuff.Run(); err != nil {
		return fmt.Errorf("backend ruff check failed: %w", err)
	}

	fmt.Println("--- Running Backend Code Duplication Check (Pylint > 20 lines) ---")
	cmdPylint := exec.Command("uv", "run", "--package", "backend", "--group", "dev", "pylint", "--min-similarity-lines=20", "--disable=all", "--enable=similarities", "backend/app", "backend/core")
	cmdPylint.Stdout = os.Stdout
	cmdPylint.Stderr = os.Stderr
	if err := cmdPylint.Run(); err != nil {
		return fmt.Errorf("backend pylint duplication check failed: %w", err)
	}

	fmt.Println("--- Running Backend Code Quality Check (Radon Complexity B or Above) ---")
	var ccOut bytes.Buffer
	cmdRadonCC := exec.Command("uv", "run", "--package", "backend", "--group", "dev", "radon", "cc", "-s", "-n", "C", "backend/app", "backend/core")
	cmdRadonCC.Stdout = &ccOut
	cmdRadonCC.Stderr = os.Stderr
	if err := cmdRadonCC.Run(); err != nil {
		return fmt.Errorf("backend radon complexity check command failed: %w", err)
	}
	if trimmed := strings.TrimSpace(ccOut.String()); len(trimmed) > 0 {
		fmt.Println(trimmed)
		return fmt.Errorf("backend radon complexity check failed: found code with complexity below rank B (rank C or worse)")
	}

	var miOut bytes.Buffer
	cmdRadonMI := exec.Command("uv", "run", "--package", "backend", "--group", "dev", "radon", "mi", "-s", "-n", "C", "backend/app", "backend/core")
	cmdRadonMI.Stdout = &miOut
	cmdRadonMI.Stderr = os.Stderr
	if err := cmdRadonMI.Run(); err != nil {
		return fmt.Errorf("backend radon maintainability check command failed: %w", err)
	}
	if trimmed := strings.TrimSpace(miOut.String()); len(trimmed) > 0 {
		fmt.Println(trimmed)
		return fmt.Errorf("backend radon maintainability check failed: found modules with maintainability below rank B (rank C or worse)")
	}

	fmt.Println("--- Running Backend Security Check (Bandit) ---")
	cmdBandit := exec.Command("uv", "run", "--package", "backend", "--group", "dev", "bandit", "-r", "backend/app", "backend/core", "-s", "B105")
	cmdBandit.Stdout = os.Stdout
	cmdBandit.Stderr = os.Stderr
	if err := cmdBandit.Run(); err != nil {
		return fmt.Errorf("backend bandit security check failed: %w", err)
	}

	fmt.Println("--- Running Backend Unit Tests (Django Test) ---")
	cmdTest := exec.Command("uv", "run", "--package", "backend", "--group", "dev", "python", "manage.py", "test")
	cmdTest.Dir = "backend"
	cmdTest.Stdout = os.Stdout
	cmdTest.Stderr = os.Stderr
	if err := cmdTest.Run(); err != nil {
		return fmt.Errorf("backend tests failed: %w", err)
	}

	fmt.Println("Backend quality check passed!")
	return nil
}

func AppQualityCheck() error {
	fmt.Println("=== Starting Full App Quality Check ===")

	if err := FrontendQualityCheck(); err != nil {
		return err
	}

	if err := BackendQualityCheck(); err != nil {
		return err
	}

	fmt.Println("=== Full App Quality Check Passed! ===")
	return nil
}
