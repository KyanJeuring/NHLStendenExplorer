# API Endpoint Test Script

This repository contains a Bash script (`test_endpoints.sh`) used to test multiple local API endpoints.  
The script sends HTTP GET requests to each endpoint and reports the HTTP status code and response time.

---

## What the Script Does

- Sends requests to predefined API endpoints
- Treats **HTTP 2xx** responses as success
- Prints **PASS / FAIL**, status codes, and response times
- Intended for quick local smoke testing

---

## Prerequisites

Before running the script, ensure:

- Your API server is running on `http://127.0.0.1:4000`
- `curl` is installed
- You have access to a Bash-compatible shell

### Verify `curl` is installed

```bash
curl --version
```

## How to Run the Script

### macOS

macOS includes both Bash and curl by default.

```bash
chmod +x test_endpoints.sh
./test_endpoints.sh
```

### Linux

Most Linux distro's come with curl pre-installed. 
If it is not installed use your package manager to install curl.

```bash
chmod +x test_endpoints.sh
./test_endpoints.sh
```

### Windows

Windows does not support Bash scripts natively. Use one of the following options.

#### Option 1: Git Bash

Install Git for Windows
https://git-scm.com/downloads

Open Git Bash

Navigate to the project directory

```bash
chmod +x test_endpoints.sh
./test_endpoints.sh
```

#### Option 2: Windows Subsystem for Linux

Install WSL:

```bash
wsl --install
```

Open the Linux terminal (e.g., Ubuntu)

Navigate to the project directory

Run:

```bash
chmod +x test_endpoints.sh
./test_endpoints.sh
```