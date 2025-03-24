import React, { Component } from 'react';
import AjouterClient from './AjouterClient';
import { v4 as uuidv4 } from 'uuid';
import { Modal, Button } from 'react-bootstrap';

export class AjouterDetailsFacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAjouterClient: false,
      clients: [],
      idFacture: '',
      dateFacture: '',
      factureA: '',
      articleInfo : [],
      montantHT: 0,
      TVA: 0,
      montantTTC: 0,
      id: 0,
    };
    this.ClientInput = React.createRef();
  }

  componentDidMount() {
    const clients = JSON.parse(localStorage.getItem('clients') || '[]');
    this.setState({ clients });
  }

  handleSelectChange = (event) => {
    if (event.target.value === '3') {
      this.setState({ showAjouterClient: true });
      this.ClientInput.current.value = '';
    } else {
      this.setState({ factureA: event.target.value });
    }
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleAddFacture = async () => {
    await this.setState({ articleInfo: JSON.parse(localStorage.getItem('articlesItemesValidi')) });
    let totalMontantHT = 0;
    if(this.state.articleInfo){
    this.state.articleInfo.forEach(article => {
      totalMontantHT += article.articleFinalPrice;  
    });}
    this.setState({ montantHT:totalMontantHT });
    this.setState({ TVA: totalMontantHT * 0.2 });
    this.setState({ montantTTC: totalMontantHT + (totalMontantHT * 0.2) });
    this.setState({ id: uuidv4() });
    const { idFacture, dateFacture, factureA, articleInfo, montantHT, TVA, montantTTC, id } = this.state;
    const newFacture = { idFacture, dateFacture, factureA, articleInfo, montantHT, TVA, montantTTC, id };
    if(JSON.parse(localStorage.getItem('factures')) === null){
    localStorage.setItem('factures', JSON.stringify([newFacture]));
    }else if(JSON.parse(localStorage.getItem('factures')).length === 0){
    localStorage.setItem('factures', JSON.stringify([newFacture]));
    }else{
    localStorage.setItem('factures', JSON.stringify([...JSON.parse(localStorage.getItem('factures')), newFacture]));
    }
    
    this.setState({ idFacture: '', dateFacture: '', factureA: '', articleInfo: []});
    localStorage.removeItem('articlesItemesValidi');
    localStorage.removeItem('articlesItemes');
    window.location.reload()
  };

  closeModal = () => {
    this.setState({ showAjouterClient: false });
  };

  render() {
    const { idFacture, dateFacture, factureA, clients, showAjouterClient } = this.state;
    return (
      <div>
        <form className="row g-3 mb-5">
          <div className="col-auto">
            <label htmlFor="idFacture">ID Facture</label>
            <input
              type="text"
              className="form-control input-left-align"
              id="idFacture"
              placeholder="122345"
              value={idFacture}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="dateFacture">Date Facture</label>
            <input
              type="date"
              className="form-control"
              id="dateFacture"
              value={dateFacture}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="clients">Facture à</label>
            <select ref={this.ClientInput} className="form-select" aria-label="Default select example" onChange={this.handleSelectChange} value={factureA}>
              <option value="">Open this select menu</option>
              {clients.map((client, index) => (
                <option key={index} value={client.nomClient}>{client.nomClient}</option>
              ))}
              <option value="3">+ Ajouter Client</option>
            </select>
           
          </div>
          <div className="col-auto" >
            <button id='ajouterFacture' type="button" className="btn  mt-4" onClick={this.handleAddFacture}>
           + Ajouter Facture
          </button>
          </div>

        </form>

        <AjouterClient show={showAjouterClient} closeModal={this.closeModal} />
  
      </div>
    );
  }
}

export default AjouterDetailsFacture;
