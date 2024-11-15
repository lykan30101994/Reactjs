import { Button, Table } from "react-bootstrap";

const TableComponent = ({ data, columns, actions, onActionClick }) => {
  return (
    <Table Buttonstriped bordered hover>
      <thead className="table-dark">
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ width: column.header === 'Image' ? '300px' : 'auto' }}>
              {column.header}
            </th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                {column.render ? column.render(row) : row[column.accessor]}
              </td>
            ))}
            <td>
              {actions.map((action, actionIndex) => (
                <Button
                  key={actionIndex}
                  variant={action.variant}
                  size="sm"
                  onClick={() => onActionClick(action, row)}
                  className="me-2"
                  title={action.label} // Thêm tooltip để hiển thị tên hành động
                >
                  {action.icon} {/* Render the icon */}
                </Button>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;