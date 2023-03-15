import express, { Router } from "express";
import { checkQueryParams, calculateCarbonOffset } from "../controllers/CarbonOffsetCalculator";

const router: Router = express.Router();

router.route("/api/calculate-carbon-offset").get(checkQueryParams, calculateCarbonOffset);

export default router;
