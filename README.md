# Cypress Automation Assessment

## Project Overview
This is a small Cypress end-to-end (E2E) automation project for [https://www.saucedemo.com](https://www.saucedemo.com).  
It demonstrates logging in using externalized credentials, adding the first inventory item to the cart, and verifying the cart badge count.
```bash

## Setup Instructions

1. Clone the repository:

git clone git@github.com:ChathuCreation/cypress-Automation.git
cd cypress-Automation

Install dependencies:
  npm install

Create your credentials file:

Copy the example file:
cp cypress/fixtures/credentials.example.json cypress/fixtures/credentials.json
Update with real login credentials:

{
  "username": "standard_user",
  "password": "secret_sauce"
}

Running the Tests
 Open Cypress UI (Interactive Mode)
 npm run cypress:open
Run Headless (Terminal Only)
 npm run cypress:run
