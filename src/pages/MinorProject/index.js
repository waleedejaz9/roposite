import { Helmet } from "react-helmet";

import MinorProjectForm from "../../containers/AppForms/MinorProjectForm";
import RopoContainer from "../../components/RopoContainer";

const MinorProjectPage = () => {
  return (
    <RopoContainer customClassName="max-w-screen-lg">
      <Helmet>
        <title>Application-for-Minor-Project</title>
      </Helmet>
      <h1 className="text-4xl flex justify-center font-bold font-serif heading-text">
        Application for Minor Project
      </h1>
      <MinorProjectForm />
    </RopoContainer>
  );
};
export default MinorProjectPage;
