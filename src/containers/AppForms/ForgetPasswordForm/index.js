import { useFormik } from "formik";
import * as Yup from "yup";

import RopoInput from "../../../components/Form/input";
import RopoButton from "../../../components/Form/Button";

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const ForgetPasswordForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
    <form className="container mx-auto max-w" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-96 mt-5">
          <label className="pt-2 pl-2 pb-2 text-xs">Email Address</label>
          <RopoInput
            name="email"
            placeholder="email"
            className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
          ></RopoInput>
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-center pt-4">
        <RopoButton
          colorScheme="primary"
          type="submit"
          customClassName="mt-8 w-48 text-white bg-primary hover:bg-blue-900"
        >
          Forgot Password
        </RopoButton>
      </div>
    </form>
  );
};

export default ForgetPasswordForm;
