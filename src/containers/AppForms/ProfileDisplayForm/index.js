import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RopoButton from "../../../components/Form/Button";

const ProfileDisplayForm = () => {
  return (
    <div className="flex md:flex-row flex-col  ">
      <span className="p-2 hover:cursor-pointer md:w-4/12 md:pt-4 md:pr-5 flex md:justify-end justify-center">
        <FontAwesomeIcon
          className="text-gray-500 text-5xl w-4"
          icon={["fas", "user"]}
        />
      </span>
      <div className=" w-full">
        <div className="flex justify-center md:justify-start">
          <div className="flex justify-between md:w-10/12 w-4/6">
            <h6 className="pl-2 mt-4 text-4xl text-primary whitespace-pre-line font-serif heading-text">
              Profile - Username
            </h6>
            <div className="pt-3">
              <RopoButton
                type="submit"
                colorScheme="primary"
                customClassName="p-2 text-white bg-primary hover:bg-blue-900 focus:shadow-none"
              >
                Edit
              </RopoButton>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start">
          <hr className="md:w-5/6 w-4/6"></hr>
        </div>

        <div className="md:w-4/6 flex justify-center md:justify-start">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-9 md:w-8/12 w-7/12">
            <div className="pt-4 pl-1">
              <h6 className="text-primary font-bold">Personal Information</h6>
              <p className="text-gray-500 text-xs pt-2 font-bold ">Full Name</p>
              <p className="text-gray-400 text-sm pt-3 font-serif">
                Neha Parikh
              </p>
              <p className="text-gray-500 text-xs pt-10 font-bold ">
                Email Address
              </p>
              <p className="text-gray-400 text-sm pt-3 font-serif ">
                nparikh@aptelcomputers.com
              </p>
              <p className="text-gray-500 text-xs pt-10 font-bold ">
                Mobile number
              </p>
              <p className="text-gray-400 text-sm pt-3 font-serif ">
                713-922-3065
              </p>
              <h6 className="text-primary font-bold pt-6">Your Address</h6>
              <p className="text-gray-500 text-xs pt-2 font-bold ">Address</p>
              <p className="text-gray-400 text-sm pt-3 font-serif">
                6010 Planters Point Ct <br></br>Sugar Land.Tx 77479
              </p>
            </div>

            <div className="pt-5 pl-1">
              <h6 className="text-primary font-bold">Password</h6>
              <p className="text-gray-500 text-xs pt-2 font-bold ">password</p>
              <p className="text-gray-400 text-sm pt-3 font-serif">
                ************
              </p>
              <h6 className="text-primary font-bold md:pt-48 ">
                Mailing Address
              </h6>

              <p className="text-gray-500 text-xs font-bold  pt-3 ">
                Mailing Address
              </p>
              <p className="text-gray-400 text-sm pt-3 font-serif">
                6010 Planters Point Ct <br></br>Sugar Land.Tx 77479
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileDisplayForm;
