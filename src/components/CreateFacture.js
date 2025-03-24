import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AjouterDetailsFacture from './AjouterDetailsFacture';
import ArticleList from "./ArticleList";

export class CreateFacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleInfo : [],
    };
  
  }

  render() {
    
    return (
      <div>
        <AjouterDetailsFacture />
        <ArticleList  />
      </div>
    );
  }
}

export default CreateFacture;
