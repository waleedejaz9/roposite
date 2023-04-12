import { Helmet } from "react-helmet";

import MajorProjectForm from "../../containers/AppForms/MajorProjectForm";
import RopoContainer from "../../components/RopoContainer";

const MajorProjectPage = () => {
  return (
    <RopoContainer customClassName="max-w-screen-lg">
      <Helmet>
        <title>Application-for-Major-Project</title>
      </Helmet>
      <h1 className="text-4xl flex justify-center font-bold font-serif heading-text">
        Application for Major Project
      </h1>
      <MajorProjectForm />
    </RopoContainer>
  );
};
export default MajorProjectPage;
