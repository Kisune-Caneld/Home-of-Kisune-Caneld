# Agent Guidelines for Home-of-Kisune-Caneld

Welcome to the Home-of-Kisune-Caneld project! When assisting with this repository, please adhere to the following rules:

## Project Structure
- **Backend**: A Django application managed with `uv`. Located in the `backend/` directory.
- **Web**: A Next.js (React) frontend managed with `npm`. Located in the `web/` directory.

## Automation & Running the App
We use Mage (Go) as our automation tool. The Magefile targets are located in `scripts/magefile` but are imported in the root `magefile.go`.
Always run the following commands from the **project root**:

- `mage dependancyCheck`: Syncs backend dependencies (`uv sync`) and installs frontend dependencies (`npm install`). Run this whenever dependencies change.
- `mage appRun`: Starts both the Django backend and Next.js frontend concurrently. Use this to spin up the local development environment.

## General Coding Standards
- Follow the existing conventions in `backend/` (Python/Django) and `web/` (TypeScript/Next.js/React).
- Prefer using the `mage` targets over running `uv` or `npm` commands individually when starting the servers or installing overall project dependencies.
