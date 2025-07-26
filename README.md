# React + Node.js Test Automation Project

This project is a simple Todo application with a React frontend, Node.js backend, and automated tests using Cypress (UI) and Supertest (API).

## Project Structure

- `/client`: React frontend
- `/server`: Node.js backend (Express)
- `/tests`: Cypress & Supertest tests

## Getting Started

1. Install dependencies:

```bash
cd client
npm install

cd ../server
npm install
```

2. Run the app:

```bash
# In one terminal
cd server && npm start

# In another terminal
cd client && npm start
```

3. Run Tests:

```bash
# UI Tests
npx cypress open

# API Tests
cd tests && node api.test.js
```
