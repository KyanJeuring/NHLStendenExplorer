# NHL Stenden

Introduction

## Docker Environment Setup and Run

This repository provides a development Docker environment: a Vite dev server with HMR (Hot Module Replacement). HMR updates changed modules in the running app without a full page reload, giving faster feedback during development. Use the compose commands below to start the development container with live reload.

### Prerequisites
- Docker Desktop (or a Docker engine) installed and running.

### Guide

1. From the project root run this command in the terminal (this will build the image and install dependencies inside the image):

```bash
docker compose up -d --build
```

2. Open your browser at http://localhost or http://127.0.0.1. Edits you make on the host (source files) are mounted into the container and Vite will hot-reload the app automatically — you should not need to stop and start the container for ordinary code edits.

3. Useful commands:

```bash
# Run in background
docker compose up -d

# Follow logs
docker compose logs -f web

# Stop and remove containers
docker compose down
```

### Notes for developers

We mount your project directory into the container so the running Vite server picks up file changes immediately. On Windows hosts this can require file-watch polling; the compose file sets chokidar polling environment variables to improve reliability.
If you add or change dependencies in `package.json`, rebuild the image so the container installs them.