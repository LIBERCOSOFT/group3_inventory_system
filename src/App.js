import React, { Component } from "react";
import AddComponent from "./components/addComponent.js";
import ShowComponent from "./components/showComponent.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      all_inventory: [],
      product_name: "",
      p_quantity: "",
      quantity: "",
      total: 0,
    };
  }

  //a function that handles all the input fields in the form
  handleChange = (e) => {
    let pointer = e.target.name;
    // eslint-disable-next-line default-case
    switch (pointer) {
      case "product_name":
        this.setState({
          product_name: e.target.value,
        });
        break;
      case "p_quantity":
        this.setState({
          p_quantity: e.target.value,
        });
        break;
      case "quantity":
        this.setState({
          quantity: e.target.value,
        });
        break;
      default:
        return false;
    }
  };

  //a function that handles the "Add Inventory" button
  handleAddClick = () => {
    const { all_inventory, product_name, p_quantity, quantity, total } =
      this.state;
    let amount = p_quantity * quantity;
    let newInventory = [product_name, p_quantity, quantity, amount];
    
    //checking if a new input has the same product name with any stored product name
    let notifier = 0;
    all_inventory.map((val) => {
      return val[0] === product_name ? (notifier += 1) : null;
    });

    //changing the state of the app based on the product name, i.e if a name exist or not.
    if (notifier === 0) {
      this.setState({
        all_inventory: [...all_inventory, newInventory],
        product_name: "",
        p_quantity: "",
        quantity: "",
        total: total + amount,
      });
    } else {
      let subInventory = [...all_inventory];
      // eslint-disable-next-line array-callback-return
      subInventory.map((val) => {
        if (val[0] === product_name) {
          val[2] = Number(val[2]) + Number(quantity);
          val[3] += amount;
        }
      });
      this.setState({
        all_inventory: subInventory,
        product_name: "",
        p_quantity: "",
        quantity: "",
        total: total + amount,
      });
    }
  };

  //a function that handles the cancel button in the table
  handleRemoveButton = (e) => {
    let inventoryCopy = [...this.state.all_inventory];
    let deductAmount = 0;
    inventoryCopy.map((val) => {
      if (val[0] === e.target.value) {
        deductAmount = val[3];
      }
    });
    let filteredInventory = inventoryCopy.filter(
      (val) => val[0] !== e.target.value
    );
    this.setState({
      all_inventory: filteredInventory,
      total: this.state.total - deductAmount,
    });
  };

  render() {
    //destructuring all the state keys and values
    const { all_inventory, product_name, p_quantity, quantity, total } = this.state;
    return (
      <div className="App container-fluid">
        <h1 className="text-center">PRODUCT INVENTORY</h1>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <AddComponent
                product_name={product_name}
                p_quantity={p_quantity}
                quantity={quantity}
                handleChange={this.handleChange}
                handleAddClick={this.handleAddClick}
              />
            </Col>
            <Col className="mt-2" xs={12} md={8}>
              <ShowComponent
                inventory={all_inventory}
                total={total}
                handleRemoveButton={this.handleRemoveButton}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
