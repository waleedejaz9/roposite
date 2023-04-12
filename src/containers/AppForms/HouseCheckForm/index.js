import { useFormik } from "formik";

import RopoInput from "../../../components/Form/input";
import RopoDatePicker from "../../../components/Form/datePicker";
import RopoTimePicker from "../../../components/Form/timePicker";
import RopoTextArea from "../../../components/Form/textarea";
import { INTIAL_VALUES, VALIDATION_SCHEMA } from "./config";
import RopoButton from "../../../components/Form/Button";
import RopoContainer from "../../../components/RopoContainer";
import RopoRequiredField from "../../../components/Form/requiredField";
const HouseCheckForm = () => {
  const formik = useFormik({
    initialValues: INTIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <RopoContainer>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex justify-center">
          <div className="flex-col lg:w-7/12 w-5/6 md:pl-20">
            <div className="grid md:grid-cols-2 grid-cols-1 p-5 ">
              <div className="flex flex-col pr-2">
                <h1 className="text-sm font-normal">
                  <RopoRequiredField className="text-red-400" /> Required Field
                </h1>
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Date House Check Begins
                </label>

                <RopoDatePicker
                  onChange={formik.handleChange}
                  name="startDate"
                  value={formik.values.startDate}
                  handleDateChange={(date) =>
                    formik.setFieldValue("startDate", date)
                  }
                />
              </div>
              {formik.errors.startDate && formik.touched.startDate ? (
                <div className="text-red">{formik.errors.startDate}</div>
              ) : null}
              <h1 className="md:pt-12">
                <RopoRequiredField className="text-red-400" />
                (please enter date you are leaving)
              </h1>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Approximate time you are Leaving
                </label>
                <div className="flex flex-row">
                  <RopoTimePicker
                    onChange={formik.handleChange}
                    name="startTime"
                    value={formik.values.startTime}
                    handleDateChange={(date) =>
                      formik.setFieldValue("startDate", date)
                    }
                  />
                </div>
                {formik.errors.startTime && formik.touched.startTime ? (
                  <div className="text-red-500">{formik.errors.startTime}</div>
                ) : null}
              </div>
              <h1 className="md:pt-8">
                <RopoRequiredField className="text-red-400" />
                (Approximate time you are leaving)
              </h1>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Date House Check Ends
                </label>
                <div className="flex flex-row">
                  <RopoDatePicker
                    name="endDate"
                    value={formik.values.endDate}
                    handleDateChange={(date) =>
                      formik.setFieldValue("startDate", date)
                    }
                  />
                </div>
                {formik.errors.endDate && formik.touched.endDate ? (
                  <div className="text-red">{formik.errors.endDate}</div>
                ) : null}
              </div>
              <h1 className="md:pt-8">
                <RopoRequiredField className="text-red-400" />
                (Please enter the date you are returning)
              </h1>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Approximate Time You will Return
                </label>
                <div className="flex flex-row">
                  <RopoTimePicker
                    name="endTime"
                    value={formik.values.endTime}
                    handleDateChange={(date) =>
                      formik.setFieldValue("startDate", date)
                    }
                  />
                </div>
                {formik.errors.endTime && formik.touched.endTime ? (
                  <div className="bg-red-500 text-white">
                    {formik.errors.endTime}
                  </div>
                ) : null}
              </div>
              <h1 className="md:pt-8">
                <RopoRequiredField className="text-red-400" />
                (Approximate time you are returning)
              </h1>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Any Information Unique to this House Check
                </label>
                <div className="flex flex-row">
                  <RopoTextArea
                    value={formik.values.uniqueInfo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="uniqueInfo"
                  ></RopoTextArea>
                </div>
                {formik.errors.uniqueInfo && formik.touched.uniqueInfo ? (
                  <div className="text-red-500 w-max-auto">
                    {formik.errors.uniqueInfo}
                  </div>
                ) : null}
              </div>
              <h1 className="md:pt-8">
                <RopoRequiredField className="text-red-400" />
                (if access is necessary in care of emergency, please provide any
                special instructions)
              </h1>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Persons on Property-indicate if they should be inside or
                  outside <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoTextArea
                    value={formik.values.propertyIndication}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="propertyIndication"
                  ></RopoTextArea>
                </div>
                {formik.errors.propertyIndication &&
                formik.touched.propertyIndication ? (
                  <div className="text-red-500">
                    {formik.errors.propertyIndication}
                  </div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Instructions for Newspaper or Package Pick Up
                  <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoTextArea
                    value={formik.values.packagePickUp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="packagePickUp"
                  ></RopoTextArea>
                </div>
                {formik.errors.packagePickUp && formik.touched.packagePickUp ? (
                  <div className="text-red-500">
                    {formik.errors.packagePickUp}
                  </div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Gate Code <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoInput
                    name="gateCode"
                    value={formik.values.gateCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.gateCode && formik.touched.gateCode ? (
                  <div className="text-red-500">{formik.errors.gateCode}</div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Pets on Property
                  <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoInput
                    name="petsOnProperty"
                    value={formik.values.petsOnProperty}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.petsOnProperty &&
                formik.touched.petsOnProperty ? (
                  <div className="text-red-500">
                    {formik.errors.petsOnProperty}
                  </div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  First Name <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoInput
                    name="fName"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.fName && formik.touched.fName ? (
                  <div className="text-red-500">{formik.errors.fName}</div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Last Name <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoInput
                    name="eName"
                    value={formik.values.eName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.eName && formik.touched.eName ? (
                  <div className="text-red-500">{formik.errors.eName}</div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Address <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoInput
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.address && formik.touched.address ? (
                  <div className="text-red-500">{formik.errors.address}</div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Phone <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoInput
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.phone && formik.touched.phone ? (
                  <div className="text-red-500">{formik.errors.phone}</div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Email <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoInput
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.email && formik.touched.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Contact#2 Name <RopoRequiredField className="text-red-400" />
                </label>
                <div className="flex flex-row">
                  <RopoInput
                    name="contactName"
                    value={formik.values.contactName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.contactName && formik.touched.contactName ? (
                  <div className="text-red-500">
                    {formik.errors.contactName}
                  </div>
                ) : null}
              </div>
              <div></div>
              <div className="flex flex-col pr-2">
                <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                  Best Phone Number for Contact#2
                </label>
                <div className="flex flex-row">
                  <RopoInput
                    name="bestPhoneNo"
                    value={formik.values.bestPhoneNo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                {formik.errors.bestPhoneNo && formik.touched.bestPhoneNo ? (
                  <div className="text-red-500">
                    {formik.errors.bestPhoneNo}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex justify-center pl-36 pr-36">
              <RopoButton
                type="submit"
                customClassName="text-primary w-20 border border-gray-300 hover:bg-gray-100"
              >
                SUBMIT
              </RopoButton>
            </div>
          </div>
        </div>
      </form>
    </RopoContainer>
  );
};
export default HouseCheckForm;
