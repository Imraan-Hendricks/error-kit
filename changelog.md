## 6/10/2023: v0.1.0

### Features

- add NotAcceptableError class for unsupported content types
- add NotFoundError class for handling missing resources
- add NoRecordError class for handling missing records
- add ServiceUnavailableError class for handling service unavailability
- add UnauthorizedError class for handling unauthorized access
- add ValidationError class for handling validation errors
- add BadRequestError for handling invalid requests
- add ForbiddenError class for handling forbidden access
- introduce GenericError class for custom errors

### Chores

- set appropriate keywords in package.json for better discoverability
- create necessary configuration files for linting and formatting code

### Documentation

- add a comprehensive README.md file with usage instructions and examples
- document the purpose, usage, and features of each error class
- add appropriate license information to the package
- include necessary metadata such as homepage, bugs, and keywords in package.json

### Builds

- configure Rollup for bundling the project

### CI

- create CI/CD workflow for automated builds and tests
