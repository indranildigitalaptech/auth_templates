import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .test(
      "has-letter",
      "Password must contain at least one letter",
      (value) => /[A-Za-z]/.test(value || "")
    )
    .test(
      "has-number",
      "Password must contain at least one number",
      (value) => /\d/.test(value || "")
    )
    .test(
      "has-special",
      "Password must contain at least one special character",
      (value) => /[@$!%*#?&^]/.test(value || "")
    ),
});
