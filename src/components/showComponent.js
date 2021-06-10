import { Table, Button } from "react-bootstrap";

function ShowComponent({ inventory, total, handleRemoveButton }) {
  return (
    <div className="container-fluid">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price Per Quantity</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((val, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{val[0]}</td>
                <td>#{val[1]}</td>
                <td>{val[2]}</td>
                <td>#{val[3]}</td>
                <td>
                <Button variant="outline-danger" size="sm" value={val[0]} onClick={handleRemoveButton}>Cancel</Button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td colSpan="3">Total</td>
            <td>#{total}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ShowComponent;
