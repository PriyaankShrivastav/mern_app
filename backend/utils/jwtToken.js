//Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken(); // here we r creating the token for each user we made in mongo

  // options for cookie
  const options = {
    expires: new Date(
      // COOKIE_EXPIRE is considered in miliSec, to convert it in days we did multiplication
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;
