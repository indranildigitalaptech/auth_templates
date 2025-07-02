import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address"
    ),

  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(
      /^0\d{9,}$/,
      "Mobile number must start with 0 and be at least 10 digits long"
    ),
});
