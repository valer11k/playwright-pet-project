# Playwright Pet Project

## 🌟 Overview
This project is a personal pet project created to practice and demonstrate my skills in end-to-end UI testing using [Playwright](https://playwright.dev/). It features test coverage for SauceDemo.com as a QA practice project and is an ongoing effort where I am actively adding new features and improvements.

The project is being refactored to use TypeScript to leverage type safety and modern coding practices.

## 🗂 Project Structure
- **tests/**: Contains test scripts covering various scenarios.
- **pages/**: Includes page object models to organize and modularize the test structure.
- **.github/workflows/**: Holds CI configurations using GitHub Actions for automated testing.
- **playwright.config.js**: Configuration file for Playwright settings.
- **package.json**: Contains project dependencies and scripts.
- **package-lock.json**: Ensures consistent dependency versions.

## 🚀 Getting Started
The project utilizes environment variables to manage sensitive data and configuration settings. Make sure to set up your environment file before running tests.

1. Clone the repository:
   ```bash
   git clone https://github.com/valer11k/playwright-pet-project.git
   ```

2. Navigate to the project directory:
   ```bash
   cd playwright-pet-project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## 🧪 Running Tests

### Run Playwright tests:
```bash
npx playwright test
```

### Open Playwright Test Runner:
```bash
npx playwright test --ui
```

## 🤖 Continuous Integration
The project is integrated with GitHub Actions for automated test execution, ensuring continuous validation of changes.
