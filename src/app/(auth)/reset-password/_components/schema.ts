import * as yup from "yup";

export const schema = yup.object().shape({
  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/,
      "Password must include letters, numbers, and special characters"
    )
    .required("Password is required"),
  cnfpassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});