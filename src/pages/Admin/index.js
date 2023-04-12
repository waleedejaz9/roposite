import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

const AdminPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="md:w-10/12">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminPage;
