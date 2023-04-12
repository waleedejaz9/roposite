import React from "react";
import { Helmet } from "react-helmet";

import HeroBottomSection from "../../components/HeroBottomSection";
import ProfileDisplayForm from "../../containers/AppForms/ProfileDisplayForm";
import ProfileMenu from "../../components/ProfileMenu";
import ProfileEditForm from "../../containers/AppForms/ProfileEditForm";
import RopoContainer from "../../components/RopoContainer";
import Hero from "../../components/Hero";

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Hero image="/images/banner.png" text="YOUR ACCOUNT" />

      <HeroBottomSection />

      <RopoContainer customClassName="mx-auto max-w-screen-lg">
        <div className="flex justify-center">
          <div className="p-8 grid grid-cols-1 md:grid-cols-3  gap-x-16 gap-y-4 max-w-5xl">
            <ProfileMenu
              text="Your Address"
              subText="Edit Home Address"
              icon={["fa", "home"]}
            />
            <ProfileMenu
              text="Mailing Address"
              subText="Edit Mailing Address"
              icon={["far", "envelope"]}
            />
            <ProfileMenu
              text="Contact Stuff"
              subText="We can help"
              icon={["fas", "phone-alt"]}
            />
            <ProfileMenu
              text="Login and Security"
              subText="Edit Profile"
              icon={["fas", "lock"]}
            />
            <ProfileMenu
              text="Payments"
              subText="Manage payment methods"
              icon={["fas", "money-check"]}
            />
            <ProfileMenu
              text="Payment History"
              subText="View previous payments"
              icon={["fas", "file-alt"]}
            />
          </div>
        </div>

        <ProfileDisplayForm />
        <ProfileEditForm />
      </RopoContainer>
    </>
  );
};

export default ProfilePage;
