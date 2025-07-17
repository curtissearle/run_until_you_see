# Development Container Configuration

This directory contains the development container configuration for the "Run Until You See" project, optimized for GitHub Copilot Coding Agent.

## Features

- **Node.js 20** with TypeScript support
- **GitHub CLI** for seamless GitHub integration
- **Docker-in-Docker** for containerized workflows
- **Pre-configured VS Code extensions** for optimal development experience
- **GitHub Copilot** integration with enhanced settings
- **Auto port forwarding** for Next.js development (ports 3000, 3001)

## VS Code Extensions Included

- TypeScript Next.js support
- Tailwind CSS IntelliSense
- Prettier code formatter
- ESLint integration
- GitHub Copilot and Copilot Chat
- Auto Rename Tag
- Path IntelliSense
- NPM Scripts runner

## Getting Started

1. **Open in Dev Container**: When you open this repository in VS Code, you'll be prompted to "Reopen in Container"
2. **GitHub Codespaces**: Click "Code" → "Codespaces" → "Create codespace on [branch]"
3. **Manual Setup**: Use the Command Palette (`Ctrl+Shift+P`) and run "Dev Containers: Reopen in Container"

## Environment Features

- Automatic `npm install` on container creation
- Pre-configured formatting and linting rules
- GitHub Copilot enabled for all file types
- Optimized for Next.js development workflow
- Docker support for advanced containerization needs

## Port Configuration

- **Port 3000**: Next.js development server (auto-forwarded with notifications)
- **Port 3001**: Additional Next.js services (auto-forwarded silently)

The development environment is configured to automatically detect and forward these ports when running Next.js development server.