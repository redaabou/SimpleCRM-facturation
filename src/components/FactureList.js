import React, { Component } from 'react'
import DetailsFacture from './DetailsFacture'

export class FactureList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    openModal = () => {
        this.setState({showModal: true})
    }

    closeModal = () => {this.setState({showModal: false})}
    

    handleAjouterFacture = () => {
        if (this.state.factures.length === 0) {
            this.setState({ showTablwHeader: true, factures: [{}]});
            
        }else{
            this.setState( prevState => ({ factures: [...prevState.factures, {}] }));
        }
    }
render() {
    return (
        <div className='mt-5'>
        <h1>Liste des factures</h1>
        <table className="table-fill ">
        <thead>
            <tr>
                <th className="text-left">Id Facture</th>
                <th className="Quantité text-left">Client</th>
                <th className="text-left">Montant H.T</th>
                <th className="Remise text-left">TVA</th>
                <th className="text-left">Montant TTC</th>
                <th className="text-left">Details Facture</th>
            </tr>
        </thead>
        <tbody className="table-hover">
            <tr>
                <td className="text-left">9372993</td>
                <td className="text-left">OCP</td>
                <td className="text-left">$ 100,000.00</td>
                <td className="text-left">20%</td>
                <td className="text-left">$ 120,000.00</td>
                <td  className="text-left "><button className="btn btn-primary" onClick={this.openModal}>Details</button></td>
                {this.state.showModal && <DetailsFacture closeModal={this.closeModal} />}
            </tr>
        </tbody>
    </table>
    </div>
    )
}
}

export default FactureList