# Error Kit

Error Kit is an NPM package that provides a collection of common custom error classes for TypeScript. These error classes are designed to extend TypeScript errors and provide additional functionality and enhancements for error handling in your applications.

### Installation

Install the package using npm:

```
npm install @imraan-hendricks/error-kit
```

or with Yarn:

```
yarn add @imraan-hendricks/error-kit
```

### Usage

To use the custom error classes from Error Kit in your TypeScript/Node.js application, you can import the specific error classes and create instances as needed.

### Example

```

import { ForbiddenError, NotFoundError } from '@imraan-hendricks/error-kit';

try {
  // Perform some operations that may throw errors
  throw new ForbiddenError('Access denied.');
} catch (error) {
  if (error instanceof ForbiddenError) {
    console.log('Forbidden error occurred:', error.message);
    console.log('Status Code:', ForbiddenError.statusCode);
    // Handle the forbidden error
  } else if (error instanceof NotFoundError) {
    console.log('Not found error occurred:', error.message);
    console.log('Status Code:', NotFoundError.statusCode);
    // Handle the not found error
  } else {
    console.log('An error occurred:', error.message);
    // Handle other types of errors
  }
}

```

### Generic Error

The GenericError class is a special class that extends the built-in Error class, serving as a base error class for both generic errors that do not fall into a specific category and other custom error classes. All custom error classes provided by Error Kit are instances of the GenericError class, ensuring consistent behavior and functionality.

```
import { GenericError, NotFoundError, ValidationError, InternalServerError, UnauthorizedError } from '@imraan-hendricks/error-kit';

const notFoundError = new NotFoundError('Resource not found.');
const internalServerError = new InternalServerError('Internal server error.');
const unauthorizedError = new UnauthorizedError('Unauthorized access.');

console.log(notFoundError instanceof GenericError); // true
console.log(internalServerError instanceof GenericError); // true
console.log(unauthorizedError instanceof GenericError); // true

```

### Validation Error

The ValidationError class is a unique error class that allows you to pass a generic type parameter <T> to define the type of the errors value. It represents a validation error and includes an array of validation errors.

```
import { ValidationError } from '@imraan-hendricks/error-kit';

// Define a custom type for validation errors
type MyValidationError = {
  field: string;
  message: string;
};

// Create an array of validation errors
const validationErrors: MyValidationError[] = [
  { field: 'name', message: 'Name is required.' },
  { field: 'email', message: 'Invalid email format.' },
];

// Create a new instance of ValidationError with the custom error type
const validationError = new ValidationError<MyValidationError>(validationErrors, 'Validation failed.');

console.log(validationError.message);
console.log(validationError.errors);

```

By using TypeScript generics with the ValidationError class, you can customize the type of the errors value to match the specific structure and format of your validation errors.

### Sending Errors as HTTP Responses

You can easily send custom errors as HTTP responses using the toJson() function and res.json() method provided by popular Node.js frameworks. The toJson() function converts the custom error object into a plain JavaScript object that can be serialized as JSON.

```
import express from 'express';
import { NotFoundError } from '@imraan-hendricks/error-kit';

const app = express();

app.get('/not-found', (req, res) => {
  const error = new NotFoundError('Resource not found.');
  const statusCode = NotFoundError.statusCode;
  res.status(statusCode).json(error.toJson());
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

```

### Available Error Classes

The package includes the following custom error classes:

- BadRequestError
- DatabaseError
- ForbiddenError
- GenericError
- InternalServerError
- NotAcceptableError
- NotFoundError
- NoRecordError
- ServiceUnavailableError
- UnauthorizedError
- ValidationError

Each error class extends the base TypeScript Error class and provides additional functionality and enhancements for error handling. You can override the default message by passing a custom message to the constructor.

For more detailed information, advanced usage, and customization options, please refer to the [documentation](https://github.com/Imraan-Hendricks/error-kit).

### Contributing

Contributions are always welcome! If you encounter any issues, have suggestions, or want to contribute improvements, please open an issue or submit a pull request in the [Github repository](https://github.com/Imraan-Hendricks/error-kit).

### Support

If you have any questions, issues, or need assistance, please feel free to reach out to our support team at support@imraanhendricks.com. We are here to help and will get back to you as soon as possible.

### License

This project is licensed under the [MIT License](https://github.com/Imraan-Hendricks/error-kit/blob/main/LICENSE).
