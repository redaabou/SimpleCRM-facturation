import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export class AjouterClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomClient: '',
      adresse: '',
      telephone: '',
      email: '',
      showAlert: false,
      alertMessage: '',
    };
  }

  nameChange = (event) => {
    this.setState({ nomClient: event.target.value });
  }

  adresseChange = (event) => {
    this.setState({ adresse: event.target.value });
  }

  telephoneChange = (event) => {
    this.setState({ telephone: event.target.value });
  }

  emailChange = (event) => {
    this.setState({ email: event.target.value });
  }

  clientInfo = (event) => {
    event.preventDefault();
    const client = {
      nomClient: this.state.nomClient,
      adresse: this.state.adresse,
      telephone: this.state.telephone,
      email: this.state.email,
    };

    let clients = JSON.parse(localStorage.getItem('clients')) || [];
    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));

    this.setState({ showAlert: true, alertMessage: `Client: ${client.nomClient} ajouté avec succès!` });

    this.props.closeModal();
  }

  handleAlertDismiss = () => {
    this.setState({ showAlert: false, alertMessage: '' });
    
    window.location.reload();
  }

  render() {
    const { show, closeModal } = this.props;
    const { showAlert, alertMessage } = this.state;

    return (
      <>
        <Modal show={show} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Ajouter Client</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.clientInfo}>
              <Form.Group controlId="nomClient">
                <Form.Label>Nom Client</Form.Label>
                <Form.Control className='input-left-align' type="text" onChange={this.nameChange} required />
              </Form.Group>
              <Form.Group controlId="adresse">
                <Form.Label>Adresse</Form.Label>
                <Form.Control className='input-left-align' type="text" onChange={this.adresseChange} required />
              </Form.Group>
              <Form.Group controlId="telephone">
                <Form.Label>Telephone</Form.Label>
                <Form.Control className='input-left-align'  type="number" onChange={this.telephoneChange} required />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control className='input-left-align' type="email" onChange={this.emailChange} required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
        {showAlert && (
          <Modal show={showAlert} onHide={this.handleAlertDismiss} style={{ marginBottom: '5%' }} >
            <Modal.Header closeButton>
              <Modal.Title>Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{alertMessage}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleAlertDismiss}>
                OK
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

export default AjouterClient;
