import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { getUserAccounts } from "../../api/userAccount";
import { Link } from "react-router-dom";

const UserAccountPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      header: "Action",
      accessor: "id"
    },
    {
      header: "Username",
      accessor: "username"
    },
    {
      header: "Email",
      accessor: "email"
    },
    {
      header: "Role",
      accessor: "user_role"
    },
    {
      header: "Is Active",
      accessor: "is_active"
    },
    {
      header: "Is Activated",
      accessor: "is_activated"
    }
  ];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getUserAccounts();

      setUsers(data);
      setLoading(false);
    }

    fetchData();

  }, []);

  return (
    <>
      <h1 className="text-2xl">User Account</h1>
      <Button className="mt-4 mb-4"><Link to="new">Create</Link></Button>
      <Table columns={columns} data={users} link="/user-account" loading={loading} />
    </>
  );
};

export default UserAccountPage;
