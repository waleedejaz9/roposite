import { useFormik } from "formik";

import { INTIAL_VALUES, VALIDATION_SCHEMA } from "./formikValiditon";
import RopoButton from "../../../components/Form/Button";
import RopoInput from "../../../components/Form/input";
import RopoSelectInput from "../../../components/Form/selectInput";
import RopoTextArea from "../../../components/Form/textarea";
import RopoRequiredField from "../../../components/Form/requiredField";

const LostPetsFrom = () => {
  const formik = useFormik({
    initialValues: INTIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const selectInputOptions = [{ value: "option1", text: "option1" }];

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex justify-center md:ml-28 pt-10 md:mr-10 ml-10"
    >
      <div className="grid grid-col-1 md:w-1/2 w-10/12">
        <div className="flex justify-between">
          <h1>Describe Your Pet Here</h1>
          <h1>
            <RopoRequiredField /> Required Field
          </h1>
        </div>

        <div className="flex flex-col p-2 justify-center w-5/6 max-w-7xl p-10">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Type <RopoRequiredField />
          </label>
          <RopoSelectInput
            name="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            options={selectInputOptions}
            className="placeholder-gray-200 shadow-none focus:border-transparent"
            placeholder="Select Options"
          ></RopoSelectInput>
          <label className="pt-2 pl-2 text-xs font-bold">
            Pet Species, if not dog or cat
          </label>
          <RopoInput
            type="text"
            name="petSpecies"
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
            value={formik.values.petSpecies}
            onChange={formik.handleChange}
          ></RopoInput>
          {formik.errors.petSpecies && formik.touched.petSpecies ? (
            <div className="text-red-500">{formik.errors.petSpecies}</div>
          ) : null}
          <label className="pt-2 pl-2 text-xs font-bold">Pet's Name</label>
          <RopoInput
            name="petName"
            type="text"
            value={formik.values.petName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
          ></RopoInput>
          {formik.errors.petName && formik.touched.petName ? (
            <div className="text-red-500">{formik.errors.petName}</div>
          ) : null}
          <label className="pt-2 pl-2 text-xs font-bold">Description</label>
          <RopoTextArea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
          ></RopoTextArea>
          {formik.errors.description && formik.touched.description ? (
            <div className="text-red-500">{formik.errors.description}</div>
          ) : null}
        </div>
        <h1>Enter Your Name and How You May Be Reached</h1>
        <div className="flex flex-col p-2 justify-center w-5/6 max-w-7xl pl-10 pr-10">
          <div className="grid md:grid-cols-2 grid-cols">
            <div className="flex flex-col pr-1">
              <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                First Name <RopoRequiredField />
              </label>
              <RopoInput
                name="fname"
                type="text"
                value={formik.values.fname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="placeholder-gray-200 shadow-none focus:border-transparent"
              ></RopoInput>
              {formik.errors.fname && formik.touched.fname ? (
                <div className="text-red-500">{formik.errors.fname}</div>
              ) : null}
            </div>
            <div className="flex flex-col pl-1">
              <label className="pt-2 pl-2 pb-2 text-xs font-bold">
                Last Name <RopoRequiredField />
              </label>
              <RopoInput
                name="lname"
                type="text"
                value={formik.values.lname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
              ></RopoInput>
              {formik.errors.lname && formik.touched.lname ? (
                <div className="text-red-500">{formik.errors.lname}</div>
              ) : null}
            </div>
          </div>
          <label className="pt-2 pl-2 text-xs font-bold">
            Telephone <RopoRequiredField />
          </label>
          <RopoInput
            name="telephone"
            type="text"
            value={formik.values.telephone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
          ></RopoInput>
          {formik.errors.telephone && formik.touched.telephone ? (
            <div className="text-red-500">{formik.errors.telephone}</div>
          ) : null}
          <label className="pt-2 pl-2 text-xs font-bold">
            E-mail <RopoRequiredField />
          </label>
          <RopoInput
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
          ></RopoInput>
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
          <label className="pt-2 pl-2 text-xs font-bold">
            Address <RopoRequiredField />
          </label>
          <RopoInput
            name="address"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
          ></RopoInput>
          {formik.errors.address && formik.touched.address ? (
            <div className="text-red-500">{formik.errors.address}</div>
          ) : null}
          <label className="pt-2 pl-2 text-xs font-bold">
            Area found or missing from
          </label>
          <RopoInput
            name="areaFound"
            type="text"
            value={formik.values.areaFound}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 mt-2 placeholder-gray-200 shadow-none focus:border-transparent"
          ></RopoInput>
          {formik.errors.areaFound && formik.touched.AdareaFounddress ? (
            <div className="text-red-500">{formik.errors.areaFound}</div>
          ) : null}
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Tags or collar information
            <RopoRequiredField />
          </label>
          <RopoInput
            name="collarInformation"
            type="text"
            value={formik.values.collarInformation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
          ></RopoInput>
          {formik.errors.collarInformation &&
          formik.touched.collarInformation ? (
            <div className="text-red-500">
              {formik.errors.collarInformation}
            </div>
          ) : null}
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Animal Microchipped <RopoRequiredField />
          </label>
          <RopoInput
            name="animalMicrochiped"
            type="text"
            value={formik.values.animalMicrochiped}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
          ></RopoInput>
          {formik.errors.animalMicrochiped &&
          formik.touched.animalMicrochiped ? (
            <div className="text-red-500">
              {formik.errors.animalMicrochiped}
            </div>
          ) : null}
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Date found or discovered missing <RopoRequiredField />
          </label>
          <RopoInput
            name="dateFound"
            type="text"
            value={formik.values.dateFound}
            onChange={formik.handleChange}
            className="p-2 placeholder-gray-200 shadow-none focus:border-transparent"
          ></RopoInput>
          {formik.errors.dateFound && formik.touched.dateFound ? (
            <div className="text-red-500">{formik.errors.dateFound}</div>
          ) : null}
        </div>
        <h1 className="max-w-xl ">
          Top upload a photo,clicl the browse button below.The browse button
          will help you search for the photo stored on your computer.For Ease of
          uploading, store the photo in a location easily accessed and that you
          can readily find. For best results, please use the jpeg format for the
          photo upload
        </h1>
        <div className="flex flex-col p-2 justify-center  w-5/6 max-w-7xl max-w-xl md:p-10">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <h1 className="text-sm font-bold">Photo included</h1>
            <div className="flex flex-row w-80">
              <RopoButton
                type="submit"
                colorScheme="primary"
                customClassName="text-white bg-primary  hover:bg-blue-900"
              >
                CHOOSE FILE
              </RopoButton>
              <h1 className="p-3">No File Chosen</h1>
            </div>
          </div>
          <RopoButton
            type="submit"
            customClassName="mt-10 mr-24 ml-24 text-primary border border-gray-300 hover:bg-gray-100"
          >
            SUBMIT
          </RopoButton>
        </div>
      </div>
    </form>
  );
};

export default LostPetsFrom;
