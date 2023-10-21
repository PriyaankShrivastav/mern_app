const app = require("./app");

// import dotenv and setup dotenv so that config.env can be accessible by this file (i.e. server.js)
const cloudinary = require("cloudinary");

const connectDatabase = require("./config/database");

//Handling Uncaught Exception - on using undefined variables
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

//config setup dotenv so that config.env can be accessible by this file (i.e. server.js)
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// connecting to database
connectDatabase();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection, by default this exception is raised when we alter the database string (present in config.env)
// check (1:19:45 for more details)
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
