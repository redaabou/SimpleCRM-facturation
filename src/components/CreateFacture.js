import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AjouterDetailsFacture } from './AjouterDetailsFacture';
import ArticleList from "./ArticleList";


export class CreateFacture extends Component {
  render() {
    return (
      <div
       
      >
        <AjouterDetailsFacture/>

        <ArticleList />
        
      </div>
    );
  }
}

export default CreateFacture;
