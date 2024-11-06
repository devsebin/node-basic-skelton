import { PhoneLogin } from "@/resources/authentication/authentication-controller";
import { PhoneLoginRequestValidator } from "@/resources/authentication/authentication-validation";
import { RequestValidation } from "@virtualift/common";
import express from "express";
const router = express.Router();
//user routes
router.post(
  "/login/phone",
  RequestValidation(PhoneLoginRequestValidator),
  PhoneLogin
);

export default router;
