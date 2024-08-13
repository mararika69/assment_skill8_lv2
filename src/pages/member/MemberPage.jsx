import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { getMembers } from "../../api/member";

const MemberPage = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      header: "Action",
      accessor: "id"
    },
    {
      header: "Member Code",
      accessor: "member_code"
    },
    {
      header: "Full Name",
      accessor: "fullname"
    },
    {
      header: "Phone",
      accessor: "phone_number"
    },
    {
      header: "Address",
      accessor: "address"
    },
    {
      header: "Start Date",
      accessor: "start_date"
    },
    {
      header: "Expiry Date",
      accessor: "expiry_date"
    }
  ];

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      const data = await getMembers();
      setMembers(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl">Members</h1>
      <Button className="mt-4 mb-4" onClick={() => alert('Button clicked!')}>Create</Button>
      <Table columns={columns} data={members} link="/member" loading={loading} />
    </>
  );
};

export default MemberPage;
