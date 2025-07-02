import * as yup from "yup";

export const schema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .test(
      "has-letter",
      "Password must include at least one letter (A-Z or a-z)",
      (val) => /[A-Za-z]/.test(val || "")
    )
    .test(
      "has-number",
      "Password must include at least one number (0-9)",
      (val) => /\d/.test(val || "")
    )
    .test(
      "has-special",
      "Password must include at least one special character (@$!%*#?&^)",
      (val) => /[@$!%*#?&^]/.test(val || "")
    ),

  cnfpassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});
