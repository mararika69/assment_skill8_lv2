import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { getBookIssues } from "../../api/bookIssue";

const BookIssuePage = () => {
  const [bookIssues, setBookIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      header: "Action",
      accessor: "id"
    },
    {
      header: "ISBN",
      accessor: "isbn"
    },
    {
      header: "Title",
      accessor: "title"
    },
    {
      header: "Member",
      accessor: "member"
    },
    {
      header: "Librarian",
      accessor: "librarian"
    },
    {
      header: "Issue Date",
      accessor: "issue_date"
    },
    {
      header: "Due Date",
      accessor: "due_date"
    },
    {
      header: "Return Date",
      accessor: "return_date"
    },
    {
      header: "Status",
      accessor: "status"
    }
  ];

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);
      const data = await getBookIssues();
      setBookIssues(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl">Book Issues</h1>
      <Button className="mt-4 mb-4" onClick={() => alert('Button clicked!')}>Create</Button>
      <Table columns={columns} data={bookIssues} link="/book-issue" loading={loading} />
    </>
  );
};

export default BookIssuePage;
