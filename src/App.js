import React, { Component } from "react";
import CreateFacture from "./components/CreateFacture";
import FactureList from "./components/FactureList";
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showModal: false,
    };
  }

  handleClose = () => {
    this.setState({ showModal: false });
  }

  handleShow = () => {
    this.setState({ showModal: true });
  }
  render() {
    return (
      <div
        id="parent"
        className="container d-flex justify-content-center align-items-center p-5 flex-column"
      >
        <CreateFacture />
        <FactureList />

        
      </div>
    );
  }
}

export default App;
