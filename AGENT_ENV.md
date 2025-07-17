# GitHub Copilot Coding Agent Environment

This repository is optimized for development with GitHub Copilot Coding Agent, providing a consistent and powerful development environment for the "Run Until You See" Next.js application.

## 🚀 Quick Start

### Option 1: GitHub Codespaces (Recommended)
1. Click the **Code** button → **Codespaces** → **Create codespace**
2. Wait for the environment to set up automatically
3. Run `npm run dev` when ready
4. Open http://localhost:3000

### Option 2: Dev Container (VS Code)
1. Install [Docker](https://docker.com) and [VS Code](https://code.visualstudio.com)
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
3. Clone this repository and open in VS Code
4. Click "Reopen in Container" when prompted
5. Run `npm run dev` when ready

### Option 3: Local Development
1. Ensure you have Node.js 18+ installed
2. Clone the repository
3. Run `./scripts/setup-dev.sh` for automated setup
4. Or manually run `npm install` and configure your environment

## 🛠️ Development Environment Features

### Pre-configured Tools
- **Node.js 20** with TypeScript support
- **Next.js 15.4.1** with App Router
- **Tailwind CSS v4** for styling
- **ESLint** and **Prettier** for code quality
- **GitHub Copilot** with optimized settings

### VS Code Extensions
The environment includes essential extensions for optimal development:
- GitHub Copilot & Copilot Chat
- TypeScript Next.js support
- Tailwind CSS IntelliSense
- Prettier & ESLint integration
- Auto Rename Tag
- Path IntelliSense

### Container Features
- **GitHub CLI** for seamless repository management
- **Docker-in-Docker** for advanced containerization
- **Auto port forwarding** (3000, 3001)
- **Automatic dependency installation**

## 📁 Environment Configuration

```
.devcontainer/          # Dev container configuration
├── devcontainer.json   # Main container configuration
└── README.md          # Container documentation

.vscode/               # VS Code workspace settings
├── settings.json      # Editor settings optimized for Copilot
├── extensions.json    # Recommended extensions
├── tasks.json        # Build and development tasks
└── *.code-workspace  # Workspace configuration

.github/               # GitHub-specific configurations
└── codespaces.yml    # Codespaces settings

scripts/               # Development utilities
└── setup-dev.sh     # Automated environment setup
```

## 🎯 GitHub Copilot Optimization

This environment is specifically configured to maximize GitHub Copilot effectiveness:

### Enhanced Settings
- **Auto-completions enabled** for all file types
- **Optimized temperature** (0.1) for more precise suggestions  
- **Extended length** (500 characters) for comprehensive code generation
- **Auto-imports** and **function call completion** enabled

### File Type Support
- TypeScript/JavaScript (`.ts`, `.tsx`, `.js`, `.jsx`)
- Styling (`.css`, Tailwind classes)
- Configuration (`.json`, `.yaml`, `.md`)
- Documentation (`.md`, plain text)

### Intelligent Features
- **Auto-organize imports** on save
- **Format on save** with Prettier
- **ESLint auto-fix** on save
- **File nesting** for organized project structure
- **Smart IntelliSense** for path completion

## 🔧 Available Commands

```bash
# Development
npm run dev          # Start development server (with Turbopack)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks

# Environment
./scripts/setup-dev.sh  # Setup development environment
```

## 🌟 Development Workflow

1. **Start developing**: The environment automatically configures everything needed
2. **Leverage Copilot**: Use Copilot Chat and inline suggestions for faster development
3. **Auto-formatting**: Code is automatically formatted and linted on save
4. **Live reload**: Changes are reflected immediately in the development server
5. **Port forwarding**: Access your app at http://localhost:3000 (auto-forwarded)

## 📋 VS Code Tasks

Pre-configured tasks available via `Ctrl+Shift+P` → "Run Task":
- **Build** (default): Run the development server
- **Build**: Create production build
- **Lint**: Run ESLint checks
- **Test**: Run test suite
- **Clean**: Clean build artifacts and dependencies

## 🔗 Useful Resources

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Dev Containers Documentation](https://containers.dev)

## 💡 Tips for Copilot Development

1. **Use descriptive comments** to guide Copilot suggestions
2. **Write clear function signatures** for better context
3. **Leverage Copilot Chat** for complex explanations and refactoring
4. **Use consistent naming conventions** for better pattern recognition
5. **Break down complex components** into smaller, focused pieces

---

This environment is designed to provide the best possible experience for GitHub Copilot Coding Agent development. All configurations are optimized for productivity, code quality, and seamless integration with GitHub services.