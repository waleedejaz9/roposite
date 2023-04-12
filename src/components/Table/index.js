import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";
import RopoButton from "../../components/Form/Button";
import Pagination from "../Pagination";

const RopoTable = () => {
  return (
    <>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>User</Th>
            <Th>Created at</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Lost Pets</Td>
            <Td>John</Td>
            <Td>23 Dec 2021</Td>
            <Td>
              <div className="flex">
                <div className="w-10">
                  <RopoButton type="submit">
                    <FontAwesomeIcon
                      className={`text-yellow text-xl `}
                      icon={["fas", "edit"]}
                    />
                  </RopoButton>
                </div>
                <div className="w-1/6 pl-4">
                  <RopoButton type="submit" colorScheme="primary">
                    <FontAwesomeIcon
                      className={`text-red-400 text-2xl pl-1`}
                      icon={["fas", "trash-alt"]}
                    />
                  </RopoButton>
                </div>
              </div>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>Title</Th>
            <Th>User</Th>
            <Th>Created at</Th>
            <Th>Action</Th>
          </Tr>
        </Tfoot>
      </Table>
      <div className="flex md:justify-end justify-center">
        <Pagination text="<<" className="text-sm" />
        <Pagination text="<" />
        <Pagination text="1" />
        <Pagination text="2" />
        <Pagination text="3" />
        <Pagination text="4" />
        <Pagination text="5" />
        <Pagination text=">" />
        <Pagination text=">>" />
      </div>
    </>
  );
};
export default RopoTable;
