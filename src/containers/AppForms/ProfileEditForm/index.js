import { useFormik } from "formik";
import * as Yup from "yup";

import RopoInput from "../../../components/Form/input";
import RopoButton from "../../../components/Form/Button";
import RopoPasswordInput from "../../../components/Form/ropoPasswordInput";
import "./style.scss";

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const ProfileEditForm = () => {
  const formik = useFormik({
    initialValues: {
      fName: "",
      email: "",
      mobileNumber: "",
      password: "",
      address: "",
      mailingAddress: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter correct email address")
        .required("Please provide your email address so we can reach you"),
      password: Yup.string()
        .required("Please enter password")
        .min(8, "Password must be of minimum length 8")
        .matches(
          PASSWORD_REGEX,
          "Password must contain at least one uppercase, lowercase letter and a number"
        ),
      fName: Yup.string().required("Please provide your First Name "),
      mobileNumber: Yup.string().required("Please provide your Mobile Number"),

      address: Yup.string().required("Please provide your address "),
      mailingAddress: Yup.string().required(
        "Please provide your Mailing address "
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="flex justify-center pt-10">
      <div className="w-4/6 md:ml-40 md:pl-6 md:pr-10">
        <div className="flex justify-between">
          <h6 className="pl-2  text-primary font-serif heading-text">
            Profile - Username
          </h6>
          <div className="md:pt-5">
            <RopoButton
              type="submit"
              colorScheme="primary"
              customClassName="p-2 text-white bg-primary hover:bg-blue-900 focus:shadow-none "
            >
              Save
            </RopoButton>
          </div>
        </div>
        <div className="flex justify-center">
          <hr className="w-full "></hr>
        </div>
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-x-9">
            <div className="pt-4 pl-1">
              <h6 className="text-primary font-bold">Personal Information</h6>
              <p className="text-gray-500 text-xs pt-2 font-bold ">Full Name</p>
              <RopoInput
                name="First Name"
                placeholder="First Name"
                className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.fName}
                onChange={formik.handleChange}
              ></RopoInput>
              {formik.errors.fName && formik.touched.fName ? (
                <div className="text-red-500">{formik.errors.fName}</div>
              ) : null}
              <p className="text-gray-500 text-xs pt-10 font-bold ">
                Email Address
              </p>
              <RopoInput
                name="email"
                placeholder="email"
                className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.email}
                onChange={formik.handleChange}
                type="email"
              ></RopoInput>
              {formik.errors.email && formik.touched.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
              <p className="text-gray-500 text-xs pt-10 font-bold ">
                Mobile number
              </p>
              <RopoInput
                name="mobileNumber"
                placeholder="Mobile Number"
                className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.email}
                onChange={formik.handleChange}
              ></RopoInput>
              {formik.errors.mobileNumber && formik.touched.mobileNumber ? (
                <div className="text-red-500">{formik.errors.mobileNumber}</div>
              ) : null}
              <h6 className="text-primary font-bold pt-6">Your Address</h6>
              <p className="text-gray-500 text-xs pt-2 font-bold ">Address</p>
              <RopoInput
                name="address"
                placeholder="address"
                className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.email}
                onChange={formik.handleChange}
              ></RopoInput>
              {formik.errors.address && formik.touched.address ? (
                <div className="text-red-500">{formik.errors.address}</div>
              ) : null}
            </div>

            <div className="pt-4 pl-1">
              <h6 className="text-primary font-bold">Password</h6>
              <p className="text-gray-500 text-xs pt-2 font-bold ">password</p>
              <RopoPasswordInput
                name="password"
                placeholder="password"
                className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
              <h6 className="text-primary font-bold md:pt-36 pt-4">
                Mailing Address
              </h6>

              <p className="text-gray-500 text-xs font-bold  pt-3 ">
                Mailing Address
              </p>
              <RopoInput
                name="mailingAddress"
                placeholder="email"
                className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.mailingAddress}
                onChange={formik.handleChange}
                type="email"
              ></RopoInput>
              {formik.errors.mailingAddress && formik.touched.mailingAddress ? (
                <div className="text-red-500">
                  {formik.errors.mailingAddress}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ProfileEditForm;
