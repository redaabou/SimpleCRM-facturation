import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const DetailsFacture = ({ show, onHide, facture }) => {
    const { articleInfo, montantHT } = facture;

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>Facture Details</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="text-left">Article Name</th>
                            <th className="text-left">Prix (DH)</th>
                            <th className="text-left">Quantity</th>
                            <th className="text-left">Remise (%)</th>
                            <th className="text-left">Montant (DH)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {articleInfo? articleInfo.map((article, index) => (
                            <tr key={index}>
                                <td className="text-left">{article.name}</td>
                                <td className="text-left">{article.price}</td>
                                <td className="text-left">{article.quantity}</td>
                                <td className="text-left">{article.discount}</td>
                                <td className="text-left">{article.articleFinalPrice}</td>
                            </tr>
                        )): `No articles found for this facture`}
                    </tbody>
                </Table>
                <p><strong>Total HT:</strong> {montantHT} DH</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DetailsFacture;
