import * as Yup from "yup";

export const INTIAL_VALUES = {
  startDate: new Date(),
  startTime: new Date(),
  endDate: new Date(),
  endTime: new Date(),
  uniqueInfo: "",
  propertyIndication: "",
  packagePickUp: "",
  gateCode: "",
  petsOnProperty: "",
  fName: "",
  eName: "",
  address: "",
  phone: "",
  email: "",
  contactName: "",
  bestPhoneNo: "",
};

export const VALIDATION_SCHEMA = Yup.object({
  startDate: Yup.string().required("Please provide start date"),
  endDate: Yup.string().required("Please provide end date"),
  startTime: Yup.string().required("Please provide start time"),
  endTime: Yup.string().required("Please provide end time`"),
  uniqueInfo: Yup.string().required("Please provide uniqueInfo"),
  propertyIndication: Yup.string().required(
    "Please provide propertyIndication"
  ),
  packagePickUp: Yup.string().required("Please provide package pick up"),
  gateCode: Yup.string().required("Please provide gate code"),
  petsOnProperty: Yup.string().required("Please provide pets on property"),
  fName: Yup.string().required("Please provide first Name"),
  eName: Yup.string().required("Please provide end Name"),
  address: Yup.string().required("Please provide address"),
  phone: Yup.string().required("Please provide phone"),
  email: Yup.string()
    .email("Please enter correct email address")
    .required("Please provide email"),
  contactName: Yup.string().required("Please provide Contact Name"),
  bestPhoneNo: Yup.string().required("Please provide best Phone No"),
});
