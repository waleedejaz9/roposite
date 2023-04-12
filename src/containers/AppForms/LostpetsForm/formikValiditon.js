import * as Yup from "yup";

export const INTIAL_VALUES = {
  type: "",
  petSpecies: "",
  petName: "",
  description: "",
  fname: "",
  lname: "",
  email: "",
  address: "",
  areaFound: "",
  collarInformation: "",
  animalMicrochiped: "",
  dateFound: "",
  telephone: "",
};

export const VALIDATION_SCHEMA = Yup.object({
  petName: Yup.string().required("Please provide your pet name"),
  fname: Yup.string()
    .min(2, "First Name must be of mininum 2 characters")
    .max(15, "First Name cannot be greater than 50 characters")
    .required("Please enter First Name"),
  lname: Yup.string()
    .min(2, "Last Name must be of mininum 2 characters")
    .max(15, "Last Name cannot be greater than 50 characters")
    .required("Please enter Last Name"),
  email: Yup.string()
    .email("Please enter correct email address")
    .required("Please provide your email address so we can reach you"),
  address: Yup.mixed().required("Please Enter Your Address"),
  areaFound: Yup.string().required("Please provide the area pet is found"),
  collarInformation: Yup.string().required(
    "Please provide your collar Information"
  ),
  animalMicrochiped: Yup.string().required("feild required."),
  dateFound: Yup.string().required("Please provide the date, pet is found"),
  telephone: Yup.string().required("Please provide telephone"),
});
