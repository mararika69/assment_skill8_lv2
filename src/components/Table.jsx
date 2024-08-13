import { Link } from 'react-router-dom';
import Button from './Button';

const Table = ({ columns, data, link, loading = false }) => {

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="py-2 px-4 border-b border-gray-200">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            loading ?
              (
                <tr>
                  <td className="text-gray-700 text-center" colSpan={columns.length}>Looding...!</td>
                </tr>
              ) : (
                data.length ? (
                  data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="text-gray-700">
                      {columns.map((column, colIndex) =>
                        column.accessor === 'id' ? (
                          <td key={colIndex + 1} className="py-2 px-4 border-b border-gray-200 text-center">
                            <Link to={`${link}/${row[column.accessor]}`}>
                              <Button>View</Button>
                            </Link>
                          </td>
                        ) : (
                          <td key={colIndex + 1} className="py-2 px-4 border-b border-gray-200">
                            {row[column.accessor]}
                          </td>
                        )
                      )}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-gray-700 text-center" colSpan={columns.length}>No data found!</td>
                  </tr>
                )
              )
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;