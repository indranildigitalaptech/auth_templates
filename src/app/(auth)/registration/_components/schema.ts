import * as yup from "yup";

export const schema = yup.object().shape({
  fname: yup
    .string()
    .required("First name is required"),

  lname: yup
    .string()
    .required("Last name is required"),

  email: yup
    .string()
    .required("Email address is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter a valid email address"
    ),

  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^0\d+$/, "Mobile number must start with 0 and contain only digits"),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .test("has-letter", "Password must include at least one letter", (val) =>
      /[A-Za-z]/.test(val || "")
    )
    .test("has-number", "Password must include at least one number", (val) =>
      /\d/.test(val || "")
    )
    .test(
      "has-special",
      "Password must include at least one special character",
      (val) => /[@$!%*#?&^]/.test(val || "")
    )
    .test(
      "no-spaces",
      "Password must not contain spaces",
      (value) => !/\s/.test(value || "")
    ),

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});
