---
name: magefile
description: Guide and command workflows for executing Mage automation targets in the repository, including quality checks, dependency management, development server execution, and secret generation.
---

# Magefile Automation Skill

This skill provides reference and standard operating procedures for executing repository automation using Mage.

## Available Targets

### Quality Checks
- `mage appQualityCheck`: Runs both frontend and backend quality checks sequentially.
- `mage frontendQualityCheck`: Runs Prettier check and ESLint with security rules in the `web/` workspace.
- `mage backendQualityCheck`: Runs Ruff linting, Pylint similarity/duplication check (>20 lines), Radon code complexity check (rank B or above), Bandit security scan, and Django unit tests using the `dev` dependency group.

### Dependency Management
- `mage dependancyCheck`: Synchronizes backend dependencies using `uv sync --all-packages` and installs web dependencies using `npm install`.

### Development & Execution
- `mage appRun`: Concurrently launches both the Django backend server and the Next.js frontend development server with graceful shutdown handling.

### Secret Management
- `mage generateSecretKey`: Generates a 50-character Django secret key along with 256-bit Hex and Base64 application secrets.

### Pre-commit Integration
- `mage preCommitCheck`: Runs pre-commit validation (`pre-commit run --all-files`) across all files.
- `mage preCommitUpdate`: Updates pre-commit hook versions (`pre-commit autoupdate`).

## Working with Mage Scripts
- All Mage targets reside in `scripts/magefile/`.
- Ensure new targets or modifications adhere strictly to project rules (such as no comments in code unless explicitly requested).
