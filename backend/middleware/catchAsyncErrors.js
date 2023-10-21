module.exports = (theFunc) => (req, res, next) => {
  Promise.resolve(theFunc(req, res, next)).catch((error) => {
    console.log("catch error ", error);
    return next(error);
  });
};

// this is a replacement for try and catch since mongo errors cannot be captured by error.js middleware
// here catch(next) is working same as try{}catch(error){return next(catch)}
// using catch(next) we can throw the error which can be captured by error.js middleware

//  UPDATE [21-Oct-23] -
// NEED TO CHECK IF catch(next) is valid here or not.
// WHAT I THINK IS HAPPENING IS THE ERRORS THROWN BY CONTROLLERS ARE CATCHED HERE AND WE GENERATE NEW ERROR USING next(error)
// AND THEN THIS GENERATED ERROR IS CAPTURED BY error.js file.
