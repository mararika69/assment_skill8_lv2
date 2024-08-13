import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Table from "../../components/Table";
import { getBooks } from "../../api/book";

const BookCatalogPage = () => {
  const [books, setBooks] = useState([]);
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
      header: "Author",
      accessor: "authors"
    },
    {
      header: "Publisher",
      accessor: "publisher"
    },
    {
      header: "Genre",
      accessor: "genre"
    },
    {
      header: "Shelf Location",
      accessor: "shelf_location"
    }
  ];

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true);

      const data = await getBooks();
      setBooks(data);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl">Book Catalogs</h1>
      <Button className="mt-4 mb-4" onClick={() => alert('Button clicked!')}>Create</Button>
      <Table columns={columns} data={books} link="/book-catalog" loading={loading} />
    </>
  );
};

export default BookCatalogPage;
