import Joi from "joi";
import { parsePhoneNumberFromString } from "libphonenumber-js";

// Define a custom Joi validation rule for phone numbers
const phoneNumberValidation = Joi.string().custom((value, helpers) => {
  const phoneNumber = parsePhoneNumberFromString(value);

  // Check if the phone number is valid
  if (!phoneNumber || !phoneNumber.isValid()) {
    return helpers.message({
      en: "Phone number is invalid", // English error message
      // Add other language codes and error messages here
    });
  }

  // Optionally check for additional criteria, such as country or format
  // Example: Ensure the phone number is in international format
  // if (!phoneNumber.isValidNumber()) {
  //   return helpers.message('Phone number is invalid');
  // }

  return value;
}, "Phone number validation");

// Define the schema with the custom phone number validation
export const PhoneLoginRequestValidator = Joi.object({
  phone: phoneNumberValidation.required(),
});
