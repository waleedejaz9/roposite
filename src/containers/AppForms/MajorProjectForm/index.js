import { useFormik } from "formik";

import RopoInput from "../../../components/Form/input";
import RadioQuestionAnswer from "../../../components/Form/radioQuestionAnswer";
import RopoButton from "../../../components/Form/Button";
import { INTIAL_VALUES, VALIDATION_SCHEMA } from "./config";

const MajorProjectForm = () => {
  const formik = useFormik({
    initialValues: INTIAL_VALUES,
    validationSchema: VALIDATION_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const qustionAnswerOptions = [
    { value: "Yes", text: "Yes" },
    { value: "No", text: "No" },
    { value: "N/A", text: "N/A" },
  ];

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-3 pl-10 pr-10 p-4 gap-x-6 w-full">
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">Owner(s):</label>
          <RopoInput
            value={formik.values.owner}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="owner"
          />
          {formik.errors.owner && formik.touched.owner ? (
            <div className="text-red-500">{formik.errors.owner}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Property Address(s):
          </label>

          <RopoInput
            value={formik.values.property}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="property"
          />
          {formik.errors.property && formik.touched.property ? (
            <div className="text-red-500">{formik.errors.property}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Please check the improvements being considered:
          </label>
          <RopoInput
            value={formik.values.improvements}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="improvements"
          />
          {formik.errors.improvements && formik.touched.improvements ? (
            <div className="text-red-500">{formik.errors.improvements}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">New Home</label>
          <RopoInput
            value={formik.values.home}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="home"
          />
          {formik.errors.home && formik.touched.home ? (
            <div className="text-red-500">{formik.errors.home}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            House Addtion(s)
          </label>

          <RopoInput
            value={formik.values.addtion}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="addtion"
          />
          {formik.errors.addtion && formik.touched.addtion ? (
            <div className="text-red-500">{formik.errors.addtion}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            NewGarage/Quarters
          </label>
          <RopoInput
            value={formik.values.newGarage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="newGarage"
          />
          {formik.errors.newGarage && formik.touched.newGarage ? (
            <div className="text-red-500">{formik.errors.newGarage}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Recorderd Setbacks: House/Front
          </label>
          <RopoInput
            value={formik.values.setbacks}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="setbacks"
          />
          {formik.errors.setbacks && formik.touched.setbacks ? (
            <div className="text-red-500">{formik.errors.setbacks}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">Sides:</label>
          <RopoInput
            value={formik.values.sides}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="sides"
          />
          {formik.errors.sides && formik.touched.sides ? (
            <div className="text-red-500">{formik.errors.sides}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">Rear:</label>
          <RopoInput
            value={formik.values.rear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="rear"
          />
          {formik.errors.rear && formik.touched.rear ? (
            <div className="text-red-500">{formik.errors.rear}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Outbuilding/Front
          </label>

          <RopoInput
            value={formik.values.outbuilding}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="outbuilding"
          />
          {formik.errors.outbuilding && formik.touched.outbuilding ? (
            <div className="text-red-500">{formik.errors.outbuilding}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">:</label>
          <RopoInput
            value={formik.values.sides}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="sides"
          />
          {formik.errors.sides && formik.touched.sides ? (
            <div className="text-red-500">{formik.errors.sides}</div>
          ) : null}
        </div>

        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">Rear:</label>
          <RopoInput
            value={formik.values.rear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="rear"
          />
          {formik.errors.rear && formik.touched.rear ? (
            <div className="text-red-500">{formik.errors.rear}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            House Material(s) & Color(s)
          </label>
          <RopoInput
            value={formik.values.material}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="material"
          />
          {formik.errors.material && formik.touched.material ? (
            <div className="text-red-500">{formik.errors.material}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Roof Material & Color
          </label>
          <RopoInput
            value={formik.values.roof}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="roof"
          />
          {formik.errors.roof && formik.touched.roof ? (
            <div className="text-red-500">{formik.errors.roof}</div>
          ) : null}
        </div>
      </div>

      <div className="grid grid-rows-13">
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">1)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="Does building location(s) meet minimum setback requirements (both house and garage) from property line?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">2)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="Is there a request for fencing behind the front house setback?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center pl-10"></h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="If yes, is the height of the propposed fence, including any appointment(s) such as lanterns, lights, decorations, etc., at or below a maximum of 8ft. high on the side property lines, 6ft. high for fencing side steets, or 10ft. high along the rear property line?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">3)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="Is there a request for fencing or hedging nearer to the street than the front house setback"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">4)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="Are any new air conditioning units proposed for the property?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center pl-10"></h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="If yes, is each unit clearly shown on plans, do they comply with the recorded property setbacks, are they at grade, and are they properly screened so they are not visible from the street?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">5)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="Is a generator being installed and does it comply with the recorded property setbacks?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">6)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="Is there a proposed pool or spa and does the equipment comply with the recorded property setbacks?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">7)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="Is there potential for a prevailing setback on this block?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center pl-10"></h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="If yes, what is the proposed or established Prevailing Setback for the block?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">8)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="What is the total interior square footage of the proposed Improvement?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">9)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="What is the total actual hardscape square footage proposed for this property? (see Policies for inclusions) River Oaks allowable impermeable square footage (see Policies for calculation; ROPO can assist with this number)"
          />
        </div>

        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">10)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="What is the proposed overall height elevation of this improvement? (feet from Natural Grade to highest ridge line) What is the River Oaks Height Limit? (based on property size; please circle one)"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">11)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="Is any proposed structure (other than a fence) nearer to a side or rear property line than 10 feet? If yes, does the highest point of the structure comply with the 25 foot height limit from Natural Grade?"
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">12)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="Are there any hardwood trees at the front, or for a corner lot on the front AND side? These must be identified on the site plan and identified as either to remain or to be removed."
          />
        </div>
        <div className="flex flex-row p-1">
          <h1 className="flex justify-center p-3">13)</h1>
          <RadioQuestionAnswer
            value={formik.values.question}
            onChange={formik.handleChange}
            options={qustionAnswerOptions}
            text="If, after exploring all other options, does it appear that a variance is being requested? If yes, please state the reason for the variance by attaching a separate sheet."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 pr-10 pl-10 md:grid-cols-3 sm:grid-cols-3 p-4 gap-x-3 max-w-screen-lg w-full">
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">
            Signature of Owner(s)
          </label>
          <RopoInput
            variant="flushed"
            value={formik.values.signatureOwner}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="owner"
          />
          {formik.errors.signatureOwner && formik.touched.signatureOwner ? (
            <div className="text-red-500">{formik.errors.signatureOwner}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Email</label>
          <RopoInput
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs">Printed Name</label>
          <RopoInput
            value={formik.values.printedName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="printedName"
          />
          {formik.errors.printedName && formik.touched.printedName ? (
            <div className="text-red-500">{formik.errors.printedName}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Cell Phone</label>
          <RopoInput
            value={formik.values.cellPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="cellPhone"
          />
          {formik.errors.cellPhone && formik.touched.cellPhone ? (
            <div className="text-red-500">{formik.errors.cellPhone}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Alternate Phone</label>
          <RopoInput
            value={formik.values.altPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="altPhone"
          />
          {formik.errors.altPhone && formik.touched.altPhone ? (
            <div className="text-red-500">{formik.errors.altPhone}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Mailing Address</label>
          <RopoInput
            value={formik.values.mailingAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="mailingAddress"
          />
          {formik.errors.mailingAddress && formik.touched.mailingAddress ? (
            <div className="text-red-500">{formik.errors.mailingAddress}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs">City</label>
          <RopoInput
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="city"
          />
          {formik.errors.city && formik.touched.city ? (
            <div className="text-red-500">{formik.errors.city}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs">State</label>
          <RopoInput
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="state"
          />
          {formik.errors.state && formik.touched.state ? (
            <div className="text-red-500">{formik.errors.state}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs">Zip</label>

          <RopoInput
            value={formik.values.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="zip"
          />
          {formik.errors.zip && formik.touched.zip ? (
            <div className="text-red-500">{formik.errors.zip}</div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-1 pr-10 pl-10 md:grid-cols-3 sm:grid-cols-3 p-4 gap-x-3 max-w-screen-lg w-full">
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold ">
            Architect/Designer
          </label>

          <RopoInput
            value={formik.values.architectDesigner}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="architectDesigner"
          />
          {formik.errors.architectDesigner &&
          formik.touched.architectDesigner ? (
            <div className="text-red-500">
              {formik.errors.architectDesigner}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Email</label>
          <RopoInput
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Company Name</label>
          <RopoInput
            value={formik.values.copmanyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="copmanyName"
          />
          {formik.errors.copmanyName && formik.touched.copmanyName ? (
            <div className="text-red-500">{formik.errors.copmanyName}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Cell Phone</label>
          <RopoInput
            value={formik.values.cellPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="cellPhone"
          />
          {formik.errors.cellPhone && formik.touched.cellPhone ? (
            <div className="text-red-500">{formik.errors.cellPhone}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Office Phone</label>

          <RopoInput
            value={formik.values.officePhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="officePhone"
          />
          {formik.errors.officePhone && formik.touched.officePhone ? (
            <div className="text-red-500">{formik.errors.officePhone}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Mailing Address</label>

          <RopoInput
            value={formik.values.mailingAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="mailingAddress"
          />
          {formik.errors.mailingAddress && formik.touched.mailingAddress ? (
            <div className="text-red-500">{formik.errors.mailingAddress}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">City</label>
          <RopoInput
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="city"
          />
          {formik.errors.city && formik.touched.city ? (
            <div className="text-red-500">{formik.errors.city}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">State</label>
          <RopoInput
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="state"
          />
          {formik.errors.state && formik.touched.state ? (
            <div className="text-red-500">{formik.errors.state}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Zip</label>
          <RopoInput
            value={formik.values.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="zip"
          />
          {formik.errors.zip && formik.touched.zip ? (
            <div className="text-red-500">{formik.errors.zip}</div>
          ) : null}
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-1 pr-10 pl-10 md:grid-cols-3 sm:grid-cols-3 p-4 gap-x-3 max-w-screen-lg w-full">
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs font-bold">Contractor</label>

          <RopoInput
            value={formik.values.contractor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="contractor"
          />
          {formik.errors.contractor && formik.touched.contractor ? (
            <div className="text-red-500">{formik.errors.contractor}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Email</label>
          <RopoInput
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="email"
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Company Name</label>

          <RopoInput
            value={formik.values.copmanyName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="copmanyName"
          />
          {formik.errors.copmanyName && formik.touched.copmanyName ? (
            <div className="text-red-500">{formik.errors.copmanyName}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Cell Phone</label>
          <RopoInput
            value={formik.values.cellPhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="cellPhone"
          />
          {formik.errors.cellPhone && formik.touched.cellPhone ? (
            <div className="text-red-500">{formik.errors.cellPhone}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Office Phone</label>

          <RopoInput
            value={formik.values.officePhone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="officePhone"
          />
          {formik.errors.officePhone && formik.touched.officePhone ? (
            <div className="text-red-500">{formik.errors.officePhone}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">Mailing Address</label>

          <RopoInput
            value={formik.values.mailingAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="mailingAddress"
          />
          {formik.errors.mailingAddress && formik.touched.mailingAddress ? (
            <div className="text-red-500">{formik.errors.mailingAddress}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">City</label>
          <RopoInput
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="city"
          />
          {formik.errors.city && formik.touched.city ? (
            <div className="text-red-500">{formik.errors.city}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs ">State</label>

          <RopoInput
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="state"
          />
          {formik.errors.state && formik.touched.state ? (
            <div className="text-red-500">{formik.errors.state}</div>
          ) : null}
        </div>
        <div className="flex flex-col">
          <label className="pt-2 pl-2 pb-2 text-xs">Zip</label>

          <RopoInput
            value={formik.values.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="pt-2"
            name="zip"
          />
          {formik.errors.zip && formik.touched.zip ? (
            <div className="text-red-500">{formik.errors.zip}</div>
          ) : null}
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="flex justify-center w-96">
          <RopoButton
            type="submit"
            customClassName="text-primary  border border-gray-300 hover:bg-gray-100"
          >
            SUBMIT
          </RopoButton>
        </div>
      </div>
    </form>
  );
};
export default MajorProjectForm;
