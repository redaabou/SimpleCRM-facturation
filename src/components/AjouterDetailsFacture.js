import React, { Component } from 'react';
import AjouterClient from './AjouterClient';

export class AjouterDetailsFacture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showAjouterClient: false,
            clients: []
        };
        this.ClientInput = React.createRef();
    }

    componentDidMount() {
        // Safely parse the 'clients' item from localStorage
        const clients = JSON.parse(localStorage.getItem('clients') || '[]');
        this.setState({ clients });
    }

    handleSelectChange = (event) => {
        if (event.target.value === '3') {
            this.setState({ showAjouterClient: true });
            // Reset the select input to the default option after opening the modal
            this.ClientInput.current.value = '';
        }
    };
    
    closeModal = () => {
        this.setState({ showAjouterClient: false });
    }

    render() {
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
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="dateFacture">Date Facture</label>
                        <input
                            type="date"
                            className="form-control"
                            id="dateFacture"
                        />
                    </div>
                    <div className="col-auto">
                        <label htmlFor="clients">Facture à</label>
                        <select ref={this.ClientInput} className="form-select" aria-label="Default select example" onChange={this.handleSelectChange}>
                            <option value="">Open this select menu</option>
                            {this.state.clients.map((client, index) => (
                                <option key={index} value={client.nomClient}>{client.nomClient}</option>
                            ))}
                            <option value="3">+ Ajouter Client</option>
                        </select>
                        {this.state.showAjouterClient && <AjouterClient closeModal={this.closeModal} />}
                    </div>

                    <div className="col-auto d-flex justify-content-end mb-3">
                        <button
                            type="button"
                            className="btn mt-4"
                            id="ajouterArticle"
                        >
                        + Ajouter Facture
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AjouterDetailsFacture;