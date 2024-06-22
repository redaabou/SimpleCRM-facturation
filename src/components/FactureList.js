import React, { Component } from 'react';
import DetailsFacture from './DetailsFacture';
import { Button, Table } from 'react-bootstrap';

export class FactureList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            factures: [],
            articlesItemes: [],
            showModal: false,
            selectedFacture: null,
            montantHT: 0,
        };
    }
 
    componentDidMount() {
        const factures = JSON.parse(localStorage.getItem('factures') || '[]');
        this.setState({ factures });
    }

    openModal = (facture) => {
        this.setState({ showModal: true, selectedFacture: facture });
    }

    closeModal = () => {
        this.setState({ showModal: false, selectedFacture: null });
    }


    render() {
        const { factures, showModal, selectedFacture } = this.state;

        return (
            <div className='mt-5'>
                <h2>Liste des factures</h2>
                <table className="table-fill">
                    <thead>
                        <tr>
                            <th className="text-left">Id Facture</th>
                            <th className="text-left">Client</th>
                            <th className="text-left">Montant H.T</th>
                            <th className="text-left">TVA</th>
                            <th className="text-left">Montant TTC</th>
                            <th className="text-left">Details</th>
                        </tr>
                    </thead>
                    <tbody className="table-hover">
                        {this.state.factures.map((facture, index) => (
                            <tr key={index}>
                                <td className="text-left">{facture.idFacture}</td>
                                <td className="text-left">{facture.factureA}</td>
                                <td className="text-left">{facture.montantHT} DH</td>
                                <td className="text-left">{facture.TVA} DH</td>
                                <td className="text-left">{facture.montantTTC} DH</td>
                                <td className="text-left">
                                <Button id='detailsBtn' variant="primary" onClick={() => this.openModal(facture)}>Details</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {this.state.showModal && <DetailsFacture show={showModal}
                        onHide={this.closeModal}
                        facture={selectedFacture} />}
            </div>
        );
    }
}

export default FactureList;
