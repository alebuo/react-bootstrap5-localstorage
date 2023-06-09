import React, {Fragment, useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";
import Formu from "./components/Formu";
import {Col, Container, Row, Modal, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    // Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //generar state de clientes
    const [clientes, editarClientes] = useState([]);

    //funcion que tome los clientes actuales y agregue el nuevo
    const agregarCliente = (socio) => {
        editarClientes([
            ...clientes,
            socio
        ]);

        //descomentamos
        console.log(clientes);
    };

    const borrarClientes = () => {
        editarClientes([]);
    }
    const borrarCliente = (id) => {
        const nuevosClientes = clientes.filter(cliente => cliente.id !== id);
        editarClientes(nuevosClientes);
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Client Deleted</Modal.Title>
                </Modal.Header>
                <Modal.Body>Great! the client has deleted!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            <Header/>
            <Main/>
            <Fragment>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Formu
                                agregarCliente={agregarCliente}/>
                            <div className="b-1-divider mb-5"></div>
                            <h2>WAITLIST</h2>
                            <table className="table table-striped">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">DNI</th>
                                    <th scope="col">ID</th>
                                    <th scope="col">Delete</th>
                                </tr>
                                {clientes.map((cliente) => (
                                    <tr key={cliente.id}>
                                        <th scope="col" className="fw-light">{cliente.nombre} </th>
                                        <th scope="col" className="fw-light"> {cliente.dni} </th>
                                        <th scope="col" className="fw-light"> {cliente.id} </th>
                                        <th scope="col" className="fw-light">
                                            <button className="btn btn-primary" onClick={() => {
                                                borrarCliente(cliente.id);
                                                handleShow();
                                            }}>Del
                                            </button>
                                        </th>
                                    </tr>
                                ))}
                            </table>
                            <button className="btn btn-primary" onClick={borrarClientes}>Delete All Clients</button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
            <Footer/>
        </div>
    );
}

export default App;
