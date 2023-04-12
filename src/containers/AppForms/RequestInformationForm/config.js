import * as Yup from "yup";

export const INTIAL_VALUES = {
  description: "",
  fname: "",
  telephone: "",
  lname: "",
  email: "",
  streetAddress: "",
  state: "",
  zip: "",
  city: "",
};

export const VALIDATION_SCHEMA = Yup.object({
  city: Yup.string().required("Please provide your city name"),
  state: Yup.string().required("Please provide your State name"),
  fname: Yup.string()
    .min(2, "First Name must be of mininum 2 characters")
    .max(15, "First Name cannot be greater than 50 characters")
    .required("Please enter First Name"),
  lname: Yup.string()
    .min(2, "Last Name must be of mininum 2 characters")
    .max(15, "Last Name cannot be greater than 50 characters")
    .required("Please enter Last Name"),
  description: Yup.string()
    .min(30, "description must be of mininum 30 characters")
    .max(900, "Last Name cannot be greater than 900 characters")
    .required("Please provide description"),
  email: Yup.string()
    .email("Please enter correct email address")
    .required("Please provide your email address so we can reach you"),
  streetAddress: Yup.string().required("Please Enter Your Address"),
  zip: Yup.string().required("Please provide the zip Code"),
  telephone: Yup.string().required("Please provide your telephone"),
});
