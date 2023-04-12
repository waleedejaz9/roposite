import { useFormik } from "formik";
import * as Yup from "yup";

import RopoInput from "../../../components/Form/input";
import RopoButton from "../../../components/Form/Button";

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const ResetFrom = () => {
  const formik = useFormik({
    initialValues: {
      confirmPassword: "",
      password: "",
    },
    validationSchema: Yup.object({
      confirmPassword: Yup.string()
        .min(6, " Password must be greater than 6 characters")
        .max(30, "Password should not be greater than 30 characters!")
        .required("Please Enter match password")
        .matches(
          PASSWORD_REGEX,
          "Password must contain at least one uppercase, lowercase letter and a number"
        ),
      password: Yup.string()
        .min(6, " Password must be greater than 6 characters")
        .max(30, "Password should not be greater than 30 characters!")
        .required("Enter Password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form className="container mx-auto max-w" onSubmit={formik.handleSubmit}>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col w-96 mt-5">
          <label className="pt-2 pl-2 pb-2 text-xs">Confirm Password</label>
          <RopoInput
            type="password"
            name="password"
            placeholder="password"
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></RopoInput>
          {formik.errors.password && formik.touched.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
          <RopoInput
            type="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></RopoInput>
          {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
            <div className="text-red-500">{formik.errors.confirmPassword}</div>
          ) : null}
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <RopoButton
          colorScheme="primary"
          type="submit"
          customClassName="mt-8 w-48 text-white bg-primary hover:bg-blue-900"
        >
          Reset Password
        </RopoButton>
      </div>
    </form>
  );
};

export default ResetFrom;
