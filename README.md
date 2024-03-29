# API Test Suite

This repository contains automated tests for API endpoints using Mocha, Chai, and Axios.

## Setup

1. Clone this repository to your local machine.

2. Install the dependencies:
   ```bash
   npm install

## Running Tests
To run the tests, use the following command:
```bash
  npx mocha test/api-tests.js
```

## Test Case 1: Retrieve Todos
Description: Ensure that only 10 items are retrieved from the Todos endpoint.
Endpoint: https://gorest.co.in/public/v2/todos
Steps:
Send a GET request to retrieve todos.
Assert the response status code is 200.
Assert that only 10 items are returned.
## Test Case 2: Retrieve Users with Status Inactive
Description: Ensure correct data is retrieved for users with status "inactive".
Endpoint: https://gorest.co.in/public/v2/users
Query Parameter: status=inactive
Steps:
Send a GET request to retrieve users with status "inactive".
Assert the response status code is 200.
Assert that all users in the response have status "inactive".

## Dependencies
Mocha: JavaScript test framework.
Chai: Assertion library.
Axios: Promise-based HTTP client.


## Feel free to adjust the content according to your preferences or add more details if needed!

