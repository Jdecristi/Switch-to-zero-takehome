import express, { Application } from "express";
import calculateCarbonOffset from "./routes/CarbonOffsetCalculator";
import cors from "cors";

const APP: Application = express();
const PORT = "3001";

APP.use(cors());
APP.use(calculateCarbonOffset);

console.log("Starting server...");

APP.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}!`);
});
