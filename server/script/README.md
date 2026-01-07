# API Endpoint Test Script

This repository contains a Bash script (`test_endpoints.sh`) used to test multiple local API endpoints.  
The script sends HTTP requests (GET, and optionally POST/PUT/DELETE) to predefined endpoints and reports HTTP status codes, response times, and a summary table.

The script is located at: `server/script/test_endpoints.sh`

---

## What the Script Does

- Sends requests to predefined API endpoints
- Supports **GET / POST / PUT / DELETE**
- Treats **HTTP 2xx** responses as success
- Prints **PASS / FAIL**, status codes, and response times
- Outputs a final summary table
- Intended for quick local testing

---

## Prerequisites

Before running the script, ensure:

- Your API server is running on `http://127.0.0.1:4000`
- `curl` is installed
- You have access to a **Bash-compatible shell**

### Verify `curl` is installed

```bash
curl --version
```

---

## How to Run the Script

Important: All commands below assume you are in the project root directory.

---

### Windows

Windows does not support Bash scripts natively.
Use one of the following options.

#### Option 1: Git Bash (Recommended)

Install (if needed) and open Git Bash

Navigate to the project root directory

Run:
```bash
chmod +x server/script/test_endpoints.sh
./server/script/test_endpoints.sh
```

#### Option 2: Windows Subsystem for Linux (WSL)

Install WSL:

wsl --install


Open your WSL

Navigate to the project root directory

Run:
```bash
chmod +x server/script/test_endpoints.sh
./server/script/test_endpoints.sh
```

---

### Linux and macOS

Linux and macOS both come pre-installed with curl.
Sometimes Linux does not have curl installed, in that case install curl with your package manager.

Open the terminal and run:

```bash
chmod +x server/script/test_endpoints.sh
./server/script/test_endpoints.sh
```

---

## Notes

The script must be run in a Unix-like environment

macOS Terminal

Linux shell

Git Bash

WSL

PowerShell and Command Prompt are not supported

The script automatically handles paths correctly regardless of where it is executed from

---

## Summary

This script provides a lightweight, dependency-free way to validate API health locally with clear output and a final summary table.