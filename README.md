# Waether Shopper e2e Test Automation

### Set up

Install [node.js](https://nodejs.org/en/)   
Install the dependencies using [NPM](https://www.npmjs.com/)

```bash
npm install
```

**How to run tests:**

```bash
npx cypress open
```

Opens Test Runner in a browser and it allows you to see commands as they execute while also viewing the application under test. In order to run tests in interactive mode on 2 different browsers, click top right and select the browser.

```bash
npm run cy:chrome
```
Runs test in headless mode on Chrome browser. Test results are displayed in terminal.

```bash
npm run cy:firefox
```
Runs test in headless mode on Firefox browser. Test results are displayed in terminal.

## Parallelisation:
[cypress-parallel](https://github.com/tnicola/cypress-parallel) has been used to enable parallel test runs. Cypress does not natively support parallelisation.

```bash
npm run cy:parallel
```
The default thread is 1 since there is only one spec file in the project. In order to use parallelisation with more thread `weather-shopper.spec.js` file can be copied multiple times and -t value can be updated in `cy:parallel` command accordingly.

**Scripts options**

| Option            | Alias | Description                        | Type   |
| ----------------- | ----- | ---------------------------------- | ------ |
| --help            |       | Show help                          |        |
| --version         |       | Show version number                |        |
| --script          | -s    | Your npm Cypress command           | string |
| --args            | -a    | Your npm Cypress command arguments | string |
| --threads         | -t    | Number of threads                  | number |
| --bail            | -b    | Exit on first failing thread       | string |
| --verbose         | -v    | Some additional logging            | string |
| --strictMode      | -m    | Add stricter checks after running the tests           | boolean |

## Synchronization Note:
Test was run several times by slowing down network speed and never fails due to implicitely/explicitly waiting issues. Just in case the network speed is extremely slow(slower than slow 3G) then the following line can be added to `cypress.json` to increase the timeout:

```
{
    "defaultCommandTimeout": 10000
}
```

### Structure

```
flink-ta-test
├── cypress
│   ├── fixtures - -- -- -- -- -- -- -- -- → Contains static data
│   │   └── *.json -- -- -- -- -- -- -- -- → json files containing test data
│   │
│   ├── integration - -- -- -- -- -- -- -- → Contains all e2e tests
│   │
│   ├── pages - -- -- -- -- -- -- -- -- -- → Contains page object model files
│   │   └── *page.js  -- -- -- -- -- -- -- → elements and page methods are located
│   │
│   ├── plugins
│   │   └── index.js  -- -- -- -- -- -- -- → Provides access to Node process
│   │
│   ├── support
│   │   └── commands.js  -- -- -- -- -- -- → Custom commands
│   │   └── index.js  -- -- -- -- -- -- -- → A place to put global configuration and behavior that modifies Cypress
│   │
│   └── cypress.json  -- -- -- -- -- -- -- → Configuration setting for Cypress
│
└── ...
```
