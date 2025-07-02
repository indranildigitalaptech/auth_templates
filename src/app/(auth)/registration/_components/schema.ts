import * as yup from "yup";

export const schema = yup.object().shape({
  fname: yup
    .string()
    .required("Please enter your first name"),

  lname: yup
    .string()
    .required("Please enter your last name"),

  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email address is required"),

  mobile: yup
    .string()
    .matches(/^0\d+$/, "Mobile number must start with 0 and contain only digits")
    .required("Please enter your mobile number"),

  password: yup
    .string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,}$/,
      "Password must be at least 8 characters and include a letter, a number, and a special character"
    )
    .required("Please create a password"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Please confirm your password"),
});
