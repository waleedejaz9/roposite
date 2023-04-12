import { useFormik } from "formik";

import RopoButton from "../../../components/Form/Button";
import RopoInput from "../../../components/Form/input";
import { INTIAL_VALUES, VALIDATION_SCHEMA } from "./config";
import RopoTextArea from "../../../components/Form/textarea";

const RequestInforamtionForm = () => {
  const formik = useFormik({
    initialValues: INTIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="p-10 flex flex-col items-center">
        <div className="flex flex-col max-w-full p-2">
          <div className="grid grid-cols-2">
            <div className="flex flex-col pr-1">
              <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                First Name
              </label>
              <RopoInput
                type="text"
                name="fname"
                className="placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.fname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              ></RopoInput>
              {formik.errors.fname && formik.touched.fname ? (
                <div className="text-red-500">{formik.errors.fname}</div>
              ) : null}
            </div>
            <div className="flex flex-col pl-1">
              <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                Last Name
              </label>
              <RopoInput
                type="text"
                name="lname"
                className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.lname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></RopoInput>
              {formik.errors.lname && formik.touched.lname ? (
                <div className="text-red-500">{formik.errors.lname}</div>
              ) : null}
            </div>
          </div>
          <label className="pt-2 pl-2 text-xs font-bold">Telephone</label>
          <RopoInput
            type="text"
            name="telephone"
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.telephone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></RopoInput>
          {formik.errors.telephone && formik.touched.telephone ? (
            <div className="text-red-500">{formik.errors.telephone}</div>
          ) : null}
          <label className="pt-2 pl-2 text-xs font-bold">E-mail</label>
          <RopoInput
            type="email"
            name="email"
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></RopoInput>
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
          <label className="pt-2 pl-2 text-xs font-bold">Street Address</label>
          <RopoInput
            type="text"
            name="streetAddress"
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.streetAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></RopoInput>
          {formik.errors.streetAddress && formik.touched.streetAddress ? (
            <div className="text-red-500">{formik.errors.streetAddress}</div>
          ) : null}
          <label className="pt-2 pl-2 text-xs font-bold">City</label>
          <RopoInput
            type="text"
            name="city"
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></RopoInput>
          {formik.errors.city && formik.touched.city ? (
            <div className="text-red-500">{formik.errors.city}</div>
          ) : null}
          <div className="grid grid-cols-2">
            <div className="flex flex-col pr-1">
              <label className="pt-2 pl-2 pb-2 text-xs font-bold">State</label>
              <RopoInput
                type="text"
                name="state"
                className="placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.state}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></RopoInput>
              {formik.errors.state && formik.touched.state ? (
                <div className="text-red-500">{formik.errors.state}</div>
              ) : null}
            </div>
            <div className="flex flex-col pl-1">
              <label className="pt-2 pl-2 pb-2 text-xs font-bold">Zip</label>
              <RopoInput
                type="text"
                name="zip"
                className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
                value={formik.values.zip}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></RopoInput>
              {formik.errors.zip && formik.touched.zip ? (
                <div className="text-red-500">{formik.errors.zip}</div>
              ) : null}
            </div>
          </div>
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Description
          </label>

          <RopoTextArea
            placeholder="Enter your name"
            name="description"
            className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.description && formik.touched.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}
          <div className="flex justify-center">
            <RopoButton
              type="submit"
              customClassName="mt-10 text-bgSection font-bold border border-gray-300 hover:bg-gray-100"
            >
              SUBMIT
            </RopoButton>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RequestInforamtionForm;
