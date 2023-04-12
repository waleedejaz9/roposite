import Header from "./Header";
import Footer from "./Footer";
import TopBar from "../../../components/TopBar";
const PublicLayout = ({ children }) => (
  <div className="flex flex-col h-full ">
    <TopBar />
    <Header />
    <div className="flex-grow ">
      <div className="mb-10">{children}</div>
    </div>
    <Footer />
  </div>
);

export default PublicLayout;
