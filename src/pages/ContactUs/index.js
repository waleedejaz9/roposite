import React from "react";
import { Helmet } from "react-helmet";

import HeroBottomSection from "../../components/HeroBottomSection";
import RequestInformation from "../../containers/AppForms/RequestInformationForm";
import RopoContainer from "../../components/RopoContainer";
import Hero from "../../components/Hero";

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>ContactUs Page</title>
      </Helmet>
      <Hero image="/images/banner.png" text="CONTACT US" />
      <HeroBottomSection />
      <div className="bg-bgSection">
        <RopoContainer customClassName="mx-auto max-w-screen-xl">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 text-white pl-24 pr-24 md:pb-24 md:pt-5 pt-10 pb-16 lg:max-w-4/6 paragraph-text">
            <div className="flex flex-col">
              <h1 className="text-2xl font-normal paragraph-text">
                RIVER OAKS PATROL
              </h1>
              <br></br>
              <div className="grid grid-cols-2 w-5/6">
                <h1 className="text-xl font-normal paragraph-text ">Phone</h1>
                <h1 className="text-xl font-normal paragraph-text">
                  713-622-0001
                </h1>
                <h1 className="text-xl font-normal paragraph-text">Fax</h1>
                <h1 className="text-xl font-normal paragraph-text">
                  713-622-3221
                </h1>
                <h1 className="text-xl font-normal paragraph-text">Email</h1>
                <h1 className="text-xl font-normal paragraph-text">
                  ropo@ropo.org
                </h1>
              </div>
              <br></br>
              <pre className="text-2xl font-normal paragraph-text">
                Emergency 911
              </pre>
              <h1 className="text-xl font-normal paragraph-text">
                Office 24 hour operations
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-normal md:pt-8 paragraph-text">
                ROPO MANAGEMENT
              </h1>
              <br></br>
              <div className="grid grid-cols-2 paragraph-text ">
                <h1 className="text-xl font-normal paragraph-text">
                  Gernal Manager
                </h1>
                <h1 className="text-xl font-normal paragraph-text">
                  Benjamin B. Turner, iii
                </h1>
                <h1 className="text-xl font-normal paragraph-text ">Phone</h1>
                <h1 className="text-xl font-normal paragraph-text">
                  713-622-0001
                </h1>
                <h1 className="text-xl font-normal paragraph-text">Fax</h1>
                <h1 className="text-xl font-normal paragraph-text">
                  713-622-3221
                </h1>
                <h1 className="text-xl font-normal paragraph-text">Email</h1>
                <h1 className="text-xl font-normal paragraph-text">
                  ropo@ropo.org
                </h1>
              </div>
              <br></br>
              <pre className="text-2xl font-normal paragraph-text">
                Emergency 911
              </pre>
              <h1 className="text-xl font-normal paragraph-text">
                Office 24 hour operations
              </h1>
            </div>
            <div>
              <h1 className="text-2xl font-normal md:pt-24 paragraph-text">
                DEPARTMENT CONTACTS
              </h1>
              <br></br>
              <h1 className="text-xl font-normal paragraph-text">
                Deed Restrictions
              </h1>
              <div className="grid grid-cols-2">
                <h1 className="text-xl font-normal paragraph-text">
                  Melinda Lee
                </h1>
                <h1 className="text-xl font-normal paragraph-text ">
                  m.lee@ropo.org
                </h1>
                <h1 className="text-xl font-normal paragraph-text">
                  Jared Huffman
                </h1>
                <h1 className="text-xl font-normal paragraph-text">
                  jhuffman@ropo.org
                </h1>
                <h1 className="text-xl font-normal pt-5 paragraph-text">
                  Finance
                </h1>
                <div></div>
                <h1 className="text-xl font-normal paragraph-text">
                  Leziee Bartholomy
                </h1>
                <h1 className="text-xl font-normal paragraph-text">
                  leziee@ropo.org
                </h1>
                <h1 className="text-xl font-normal pt-5 paragraph-text">
                  Leziee Bartholomy
                </h1>
                <div></div>
                <h1 className="text-xl font-normal paragraph-text">
                  Capt. Mark McMahon
                </h1>
                <h1 className="text-xl font-normal paragraph-text pl-4 ">
                  mark.mcmahon@ropo.org
                </h1>
              </div>
            </div>
          </div>
        </RopoContainer>
      </div>
      <RopoContainer>
        <h6 className="flex mt-16 text-primary justify-center font-normal font-serif heading-text">
          Contact River Oaks Property Owners
        </h6>
        <div className="flex justify-center p-6">
          <hr className="md:w-9/12 w-11/12 bg-primary"></hr>
        </div>

        <h6 className=" text-gray-400 pr-10 pl-10  md:pr-12 md:mr-12 text-center paragraph-text">
          if you have any questions or would like furthur information abour our
          community, contact us directly - we're easy to reach
        </h6>
        <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="flex justify-center">
            <p className="text-2xl text-gray-500 font-bold p-10 max-w-lg paragraph-text">
              ADDRESS
              <br></br>
              <br></br>
              3921 San Felipe Road
              <br></br>
              Houston, TX 77027
              <br></br>
              <br></br>
              Located behind twonoaks cleaners. small drivewau on the west sode
              of the twin oaks building
            </p>
          </div>
          <p className="text-2xl text-gray-500 font-bold p-10 max-w-lg paragraph-text flex justify-center">
            map
          </p>
        </div>

        <h6 className="flex mt-16 justify-center font-normal font-serif heading-text">
          RESQUEST INFORMATION
        </h6>
        <div className="flex justify-center p-6">
          <hr className="md:w-9/12 w-11/12 bg-primary"></hr>
        </div>

        <div className="flex justify-center">
          <h6 className=" text-gray-400  md:pr-10 font-normal text-center w-9/12  paragraph-text">
            Please complete the following so we may respond appropietyly.When
            you are finished simply select Submit.Be sure to complete your
            contact information and we'ill be in rouch shortly
          </h6>
        </div>

        <div className="flex justify-center">
          <RequestInformation />
        </div>
      </RopoContainer>
    </>
  );
};

export default ContactUs;
