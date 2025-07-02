import * as yup from "yup";

export const schema = yup.object().shape({
    dob: yup.string().required("Date of Birth is required"),
    address1: yup.string().required("Address Line 1 is required"),
    address2: yup.string(), // Optional
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    postalCode: yup
        .string()
        .matches(/^\d{4,10}$/, "Postal code must be between 4–10 digits")
        .required("Postal Code is required"),
});