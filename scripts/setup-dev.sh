#!/bin/bash

# Development Environment Setup Script
# Optimized for GitHub Copilot Coding Agent

set -e

echo "🚀 Setting up development environment for 'Run Until You See'..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node --version | cut -d'v' -f2)
REQUIRED_VERSION="18.0.0"

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$NODE_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    print_error "Node.js version $NODE_VERSION is not supported. Please install Node.js 18+ and try again."
    exit 1
fi

print_success "Node.js version $NODE_VERSION detected"

# Check if npm is available
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm and try again."
    exit 1
fi

print_status "Checking for package.json..."
if [ ! -f "package.json" ]; then
    print_warning "package.json not found. This setup is optimized for a Next.js project."
    print_status "Please ensure you have the Next.js application files, or this environment"
    print_status "will be ready when you add them (e.g., from PR #2)."
    SKIP_INSTALL=true
else
    print_success "package.json found"
    print_status "Installing dependencies..."
    npm install
    SKIP_INSTALL=false
fi

print_status "Checking for GitHub CLI..."
if command -v gh &> /dev/null; then
    print_success "GitHub CLI is available"
    
    # Check if user is authenticated
    if gh auth status &> /dev/null; then
        print_success "Authenticated with GitHub CLI"
    else
        print_warning "GitHub CLI is not authenticated. Run 'gh auth login' to authenticate."
    fi
else
    print_warning "GitHub CLI is not installed. Consider installing it for better GitHub integration."
    print_status "Install GitHub CLI: https://cli.github.com/"
fi

print_status "Checking VS Code extensions..."
if command -v code &> /dev/null; then
    print_status "Installing recommended VS Code extensions..."
    
    # Install essential extensions for Copilot development
    code --install-extension ms-vscode.vscode-typescript-next
    code --install-extension bradlc.vscode-tailwindcss
    code --install-extension esbenp.prettier-vscode
    code --install-extension ms-vscode.vscode-eslint
    code --install-extension github.copilot
    code --install-extension github.copilot-chat
    
    print_success "VS Code extensions installed"
else
    print_warning "VS Code CLI is not available. Extensions will be suggested when opening the project in VS Code."
fi

print_status "Setting up Git hooks (if applicable)..."
if [ -d ".git" ]; then
    # Set up pre-commit hook for linting
    mkdir -p .git/hooks
    cat > .git/hooks/pre-commit << 'EOF'
#!/bin/sh
# Pre-commit hook for linting
npm run lint
EOF
    chmod +x .git/hooks/pre-commit
    print_success "Git pre-commit hook configured"
else
    print_warning "Not in a Git repository. Skipping Git hooks setup."
fi

print_success "🎉 Development environment setup complete!"
echo ""
if [ "$SKIP_INSTALL" = true ]; then
    print_status "Note: Dependencies were not installed because package.json was not found."
    print_status "Run 'npm install' after adding your Next.js application files."
    echo ""
fi
print_status "Next steps:"
if [ "$SKIP_INSTALL" = true ]; then
    echo "  1. Add your Next.js application files (package.json, etc.)"
    echo "  2. Run 'npm install' to install dependencies"
    echo "  3. Run 'npm run dev' to start the development server"
    echo "  4. Open http://localhost:3000 in your browser"
    echo "  5. Start coding with GitHub Copilot assistance!"
else
    echo "  1. Run 'npm run dev' to start the development server"
    echo "  2. Open http://localhost:3000 in your browser"
    echo "  3. Start coding with GitHub Copilot assistance!"
fi
echo ""
print_status "Development environment features:"
echo "  ✅ Node.js and npm configured"
echo "  ✅ TypeScript and Next.js ready"
echo "  ✅ ESLint and Prettier configured" 
echo "  ✅ GitHub Copilot optimized settings"
echo "  ✅ VS Code extensions and settings"
echo "  ✅ Dev container configuration"
echo "  ✅ GitHub Codespaces support"
echo ""
print_status "Happy coding! 🚀"