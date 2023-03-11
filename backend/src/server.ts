import express from "express";

const APP = express();
const PORT = "3001";

console.log("Starting server...");

APP.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}!`);
});
