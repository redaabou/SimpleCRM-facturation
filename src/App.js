import React, { Component } from "react";
import CreateFacture from "./components/CreateFacture";
import FactureList from "./components/FactureList";
import 'bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {

  render() {
    

    return (
      <div
        id="parent"
        className="container d-flex justify-content-center align-items-center p-5 flex-column"
      >
        <h1 id="pageTitle">Facture Management System</h1>
        <CreateFacture  />
        <FactureList />
      </div>
    );
  }
}

export default App;
