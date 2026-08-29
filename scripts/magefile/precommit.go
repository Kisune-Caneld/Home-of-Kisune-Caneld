package magefile

import (
	"fmt"
	"os"
	"os/exec"
)

func PreCommitCheck() error {
	fmt.Println("--- Running Pre-commit Checks (All Files) ---")
	cmd := exec.Command("pre-commit", "run", "--all-files")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		return fmt.Errorf("pre-commit checks failed: %w", err)
	}

	fmt.Println("Pre-commit checks passed!")
	return nil
}

func PreCommitUpdate() error {
	fmt.Println("--- Updating Pre-commit Hook Repositories ---")
	cmd := exec.Command("pre-commit", "autoupdate")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		return fmt.Errorf("pre-commit autoupdate failed: %w", err)
	}

	fmt.Println("Pre-commit hooks updated successfully!")
	return nil
}
