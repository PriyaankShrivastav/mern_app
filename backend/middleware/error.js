const ErrorHandler = require("../utils/errorhandler");

// this is capturing the errors along with one generated by errorHandler and sent that to client as response.
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  console.log("error name ", err.statusCode);
  // wrong MongoDB Id error (CastError)
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.code === "JsonWebTokenError") {
    const message = `Json Web token is invalid, try again`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.code === "JsonWebTokenError") {
    const message = `Json Web token is invalid, Try again`;
    err = new ErrorHandler(message, 400);
  }

  // JWT Expire error
  if (err.code === "TokenExpiredError") {
    const message = `Json Web token is Expired, Try again`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

// Note that this cannot capture mongoDB errors related to duplicate key.
// We need to have try catch which can throw the error and then only that error will get captured here.

//--------------------------------------------------------------------------------------------------------------------

// UPDATE [21-Oct-23] -
// CHECK UPDATED COMMENT FOR 21-Oct-23 IN catchAsyncErrors.js file
// I THINK ERRORS GENERATED BY MONGO ARE CAPTURED HERE AND WE SEND APPROPRIATE RESPONSE TO BROWSER
// BASED ON ERROR TYPE WHICH ARE CHECKED HERE

// Que - If mongo throws any error[ex- CastError] in controller and that error is catched by catchAsyncErrors.js, this catchAsyncErrors.js
// will throw a new error[CastError] which will be captured by error.js file. Now error.js file will throw an error using ErrorHandler
// with same msg[CastError] which was received from catchAsyncErrors.js. Now any error thrown by ErrorHandler is also catched by error.js
// and we know that it has the same message[CastError] then will it[error.js] not throw another error with same message[CastError] and
// this will go on endless?

//--------------------------------------------------------------------------------------------------------------------