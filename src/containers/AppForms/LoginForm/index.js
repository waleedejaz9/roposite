import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import RopoCheckBox from "../../../components/Form/checkbox";
import RopoInput from "../../../components/Form/input";
import RopoButton from "../../../components/Form/Button";

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      signInLoginCheckbox: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter correct email address")
        .required("Please provide your email address so we can reach you"),
      password: Yup.string()
        .min(6, " Password must be greater than 6 characters")
        .max(30, "Password should not be greater than 30 characters!")
        .matches(
          PASSWORD_REGEX,
          "Password must contain at least one uppercase, lowercase letter and a number"
        )
        .required("Enter Password to SIGN IN"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-96 mt-5">
          <label className="pt-2 pl-2 pb-2 text-xs">Email Address</label>
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
          <RopoInput
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.fname}
            onChange={formik.handleChange}
          ></RopoInput>
          {formik.errors.password && formik.touched.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
          <p className="p-2 text-right">
            <Link to="/" className="no-underline hover:underline">
              Forgot Password?
            </Link>
          </p>
          <RopoCheckBox
            text="keep me logged in"
            name="signInLoginCheckbox"
            value={formik.values.signInLoginCheckbox}
            onChange={(value) =>
              formik.setFieldValue("signInLoginCheckbox", value)
            }
          />
          {formik.errors.signInLoginCheckbox &&
          formik.touched.signInLoginCheckbox ? (
            <div className="bg-primary text-white">
              {formik.errors.signInLoginCheckbox}
            </div>
          ) : null}
          <div className="flex justify-center">
            <RopoButton
              type="submit"
              colorScheme="primary"
              customClassName="mt-8 text-white w-24 bg-primary hover:bg-blue-900 focus:shadow-none"
            >
              SIGN IN
            </RopoButton>
          </div>
          <p className="mt-10 mb-4 text-center">Don't have a login?</p>
          <div className="flex justify-center">
            <RopoButton
              type="submit"
              customClassName="text-primary w-24 border border-gray-300 hover:bg-gray-100"
            >
              CREATE LOGIN
            </RopoButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
