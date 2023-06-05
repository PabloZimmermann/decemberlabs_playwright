# DecemberLabs Playwright Testing

This project contains tests for DecemberLabs core functionalities, written in Typescript using Playwright

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. If you haven't installed them yet, you can download and install them from [here](https://nodejs.org/).

### Installing

1. Clone this repository to your local machine.

2. Navigate to the project directory.

`cd decemberlabs_playwright`

3. Install the project dependencies.

`npm install`

4. add your .env file

`BASE_URL=https://inhouse.decemberlabs.com` // replace with your testing env

5. Run the tests.

`npm run test`

## Solution

In response to the assignment's requirements, I emulated a scalable project structure by creating page objects and general functions. Rather than treating the test as one extensive unit, I proposed a more practical approach where each test belongs to a unique suite. This better reflects the structure and organization found in real-world projects.

However, I adhered to all the required validations. In this regard, navigateToPage represents an enhanced version of the navigate method, which includes a check for the page title. Additionally, the function isMainHeaderMenuVisible was incorporated into the footer test suite.

## Improvements

1. Expand the testing capabilities by adding more scripts for various options like different browsers, workers, and reporters.
2. Establish a dedicated test data file. This enhances the maintainability of the tests.
3. The "Open Schedule Free Consultation" modal appears to be present on more than one page. It might be more efficient to place this in the general folder, enhancing modularity and reducing redundancy.
