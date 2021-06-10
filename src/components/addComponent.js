import { Form, Button } from "react-bootstrap";

let AddComponent = ({product_name, p_quantity, quantity, handleChange, handleAddClick}) => {
  return (
    <div className="container-fluid">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            name="product_name"
            placeholder="Enter Product Name"
            onChange={handleChange}
            value={product_name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Price Per Quantity</Form.Label>
          <Form.Control
            type="number"
            min="0"
            name="p_quantity"
            placeholder="Price Per Quantity"
            onChange={handleChange}
            value={p_quantity}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            min="0"
            name="quantity"
            placeholder="Quantity"
            onChange={handleChange}
            value={quantity}
          />
        </Form.Group>

        <Button variant="success" onClick={handleAddClick}>
          Add Inventory
        </Button>
      </Form>
    </div>
  );
};

export default AddComponent;
