import Joi from "joi";

export const registerArray = [
  {
    label: "First Name",
    name: "firstName",
    id: "firstName",
    type: "text",
    sm: 6,
    required: true,
    joi: Joi.string().min(2).max(15).required(),
  },

  {
    label: "Last Name",
    name: "lastName",
    id: "lastName",
    type: "text",
    sm: 6,
    required: true,
    joi: Joi.string().min(2).max(15).required(),
  },
  {
    label: "Phone",
    name: "phone",
    id: "phone",
    type: "tel",
    sm: 6,
    required: true,
    joi: Joi.string()
      .regex(/^[0-9]{10}$/)
      .messages({ "string.pattern.base": `Phone number must have 10 digits.` })
      .required(),
  },
  {
    label: "Email",
    name: "email",
    id: "email",
    type: "email",
    sm: 6,
    required: true,
    joi: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
  },
  {
    label: "Password",
    name: "password",
    id: "password",
    type: "password",
    sm: 6,
    required: true,
    joi: Joi.string()
      .pattern(
        new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{0,}$"
        )
      )
      .min(8)
      .max(15)
      .required()
      .messages({
        "string.pattern.base": `Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character (@$!%*?&).`,
        "string.min": `Password must be at least 8 characters long.`,
        "string.max": `Password cannot exceed 15 characters.`,
        "any.required": `Password is required.`,
      }),
  },
  {
    label: "Image Alt",
    name: "imageAlt",
    id: "imageAlt",
    type: "text",
    sm: 6,
    required: false,
    joi: Joi.string().allow(""),
  },
  {
    label: "Image URL",
    name: "url",
    id: "url",
    type: "url",
    sm: 12,
    required: false,
    joi: Joi.string()
      .pattern(
        new RegExp(
          "^(https?://)?[^\\s/]+\\.[^\\s/]+/\\S+\\.(jpg|jpeg|png|gif)$"
        )
      )
      .messages({ "string.pattern.base": `Image url is not vaild` })
      .allow(""),
  },
  {
    label: "State",
    name: "state",
    id: "state",
    type: "text",
    sm: 4,
    required: false,
    joi: Joi.string().allow(""),
  },
  {
    label: "Country",
    name: "country",
    id: "country",
    type: "text",
    sm: 4,
    required: true,
    joi: Joi.string().required(),
  },
  {
    label: "City",
    name: "city",
    id: "city",
    type: "text",
    sm: 4,
    required: true,
    joi: Joi.string().required(),
  },
  {
    label: "Street",
    name: "street",
    id: "street",
    type: "text",
    sm: 4,
    required: true,
    joi: Joi.string().required(),
  },
  {
    label: "House Number",
    name: "houseNumber",
    id: "houseNumber",
    type: "number",
    sm: 4,
    required: true,
    joi: Joi.number().required(),
  },
  {
    label: "Zip",
    name: "zip",
    id: "zip",
    type: "text",
    sm: 4,
    required: false,
    joi: Joi.string().allow(""),
  },
];
