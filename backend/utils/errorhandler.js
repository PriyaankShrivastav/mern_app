class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message); // here we are setting message to super i.e. Error class
    this.statusCode = statusCode;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorHandler;

// we have created this ErrorHandler since we can not define statusCode in Error class if we throw error using Error
// class. Here since ErrorHandler is child of Error class, whenever we run the object of ErrorHandler using
// next(new ErrorHandler(message, stausCode)) we will raise a global error which will get captured by error.js file
// and whatever message and statusCode we have passed while raising the error will get captured by error.js
// using err.message and err.statusCode.

// check error handling video of 6pp, in last 15 minutes its mentioned that if any mongo error comes in controller
// then the error.js middleware will not caught this error (NOT SURE ON THIS)
