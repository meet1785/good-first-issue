# Contributing to Good First Issue

Welcome! 👋 Thank you for your interest in contributing to **Good First Issue**. This guide will help you make your first open-source contribution, especially if you're using **GitHub Copilot Agent** to assist you.

---

## 🚀 Quick Start Guide for First-Time Contributors

### Prerequisites

Before you begin, make sure you have:

- A GitHub account
- Git installed on your computer
- Python 3.9 or higher
- Node.js (or Bun) installed
- (Optional but recommended) GitHub Copilot access

---

## Step-by-Step Contribution Guide

### 1️⃣ Fork and Clone the Repository

First, fork this repository to your GitHub account by clicking the "Fork" button at the top right of the repository page.

Then clone your fork locally:

```bash
git clone https://github.com/<your-username>/good-first-issue.git
cd good-first-issue
```

---

### 2️⃣ Set Up Your Development Environment

#### Option A: Using GitHub Codespaces (Recommended)

GitHub Codespaces provides a complete cloud development environment:

1. Go to your fork on GitHub
2. Click **"Code → Codespaces → Create codespace on main"**
3. Wait for the environment to set up

This gives you a full development environment with GitHub Copilot built in!

#### Option B: Local Development

Follow the setup instructions in the [README.md](README.md#setting-up-the-project-locally):

1. Clone the project and ensure Python 3 and Node.js are installed
2. Copy the sample data files:

```bash
cp data/generated.sample.json data/generated.json
cp data/tags.sample.json data/tags.json
```

3. Install dependencies and start the development server:

```bash
bun install  # or npm install
bun dev      # or npm run dev
```

---

### 3️⃣ Enable GitHub Copilot (Optional but Helpful!)

If you have GitHub Copilot access:

1. Install the **GitHub Copilot** and **Copilot Chat** extensions in VS Code/Codespaces
2. Open the Copilot Chat sidebar (💬 icon)
3. You're ready to get AI-powered assistance!

---

### 4️⃣ Find Something to Work On

#### Using GitHub Copilot Agent to Analyze the Repo

Ask Copilot Chat:

> "Analyze this repository and explain what it does, the tech stack, and suggest a simple first contribution I can make (like fixing a bug, improving docs, or adding a small feature)."

#### Browse Existing Issues

Look for issues labeled **"good first issue"** in the repository. Common beginner-friendly contributions include:

- 📝 Improving documentation (README, comments, guides)
- ✅ Adding tests for existing code
- 🐛 Fixing small bugs
- 🎨 Improving UI/UX
- 🆕 Adding new projects to the list

---

### 5️⃣ Create a Feature Branch

Always create a new branch for your changes:

```bash
git checkout -b fix/improve-readme
# or
git checkout -b feature/add-new-project
# or
git checkout -b docs/update-contributing-guide
```

Use descriptive branch names that explain what you're working on.

---

### 6️⃣ Make Your Changes

#### Get Help from Copilot Agent

You can ask Copilot to help with specific tasks:

**For documentation:**

> "Add a usage example section to the README and format it nicely."

**For code:**

> "Write unit tests for `populate.py` using pytest."

**For code review:**

> "Review my code for style and best practices."

#### Guidelines for Different Types of Contributions

**Adding a New Project:**

1. Ensure the project meets our criteria (see [README.md](README.md#adding-a-new-project))
2. Add the repository path in lexicographic order to `data/repositories.toml`
3. Test locally by running `make generate` (requires Python dependencies)

**Code Changes:**

1. Follow the existing code style
2. Run linters: `make format`
3. Run tests: `make test`
4. Ensure the build works: `make build`

**Documentation Changes:**

1. Use clear, concise language
2. Add examples where helpful
3. Check for spelling and grammar

---

### 7️⃣ Test Your Changes

Before committing, make sure everything works:

```bash
# Run linting and formatting
make format

# Run tests (for Python changes)
make test

# Build and test the app (for frontend changes)
bun install
bun dev
```

Open the app in your browser and verify your changes work as expected.

---

### 8️⃣ Commit and Push Your Changes

```bash
git add .
git commit -m "Add descriptive commit message"
git push origin your-branch-name
```

**Writing Good Commit Messages:**

- Use the present tense ("Add feature" not "Added feature")
- Be concise but descriptive
- Reference issue numbers if applicable (e.g., "Fix #123: Update README")

**Using Copilot for Commit Messages:**

> "Generate a concise commit message for my last change."

---

### 9️⃣ Create a Pull Request

1. Go to your fork on GitHub
2. You'll see a **"Compare & Pull Request"** button - click it
3. Fill out the PR template with:
   - A clear title
   - Description of what you changed
   - Link to any related issues
   - For new projects: link to the repository's issues page
4. Submit your pull request!

---

### 🔟 Respond to Review Feedback

Maintainers may request changes or ask questions. This is a normal part of the process!

- Be patient and respectful
- Make requested changes in your branch
- Push updates - they'll automatically appear in the PR
- Ask questions if something is unclear

---

## 💡 Tips for Using Copilot Agent

GitHub Copilot Agent can help you throughout the contribution process:

### Generate Commit Messages

> "Generate a concise commit message for my last change."

### Explain Differences

> "Explain the changes between this branch and main."

### Code Review

> "Review my code for style and best practices."

### Understand Code

> "Explain what this function does and how it works."

### Debug Issues

> "Why is this test failing? Help me debug it."

---

## 📋 Code Style and Standards

- **Python**: We use `ruff` for linting and formatting
- **JavaScript/TypeScript**: We use Prettier for formatting
- **Line Length**: 120 characters maximum for Python
- **Type Hints**: Add type hints to Python code where possible

Run `make format` before committing to ensure consistent formatting.

---

## 🧪 Testing

- For Python changes: `make test` runs the test suite
- For frontend changes: Test manually by running `bun dev` and checking the UI
- Always test your changes before submitting a PR

---

## 🤝 Code of Conduct

Be respectful, inclusive, and constructive in all interactions. We're all here to learn and build something great together!

---

## ❓ Questions?

If you have questions or need help:

1. Check the [README.md](README.md) for setup instructions
2. Look at existing PRs and issues for examples
3. Ask in your PR - maintainers are happy to help!
4. Use GitHub Copilot Chat to get answers about the codebase

---

## 🎉 Celebrate Your Contribution!

Once your PR is merged, you've made your first open-source contribution! Share it with the world and be proud of what you've accomplished.

Thank you for contributing to Good First Issue! 🌟
