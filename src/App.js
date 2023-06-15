import React, {Fragment, useEffect, useState} from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Main from "./components/Main";
import Formu from "./components/Formu";
import Cliente from "./components/Cliente";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {HiOutlineClipboardList} from "react-icons/hi";
import {GoChecklist} from "react-icons/go";
import {BiHappyBeaming} from "react-icons/bi";


function App() {
    let clientesGuardados = JSON.parse(localStorage.getItem('clientes'));
    if (!clientesGuardados) {
        clientesGuardados = [];
    }

    const [clientes, editarClientes] = useState(clientesGuardados);

    useEffect(() => {

        if (clientesGuardados) {
            localStorage.setItem('clientes', JSON.stringify(clientes));
        } else {
            localStorage.setItem('clientes', JSON.stringify([]));
        }
    }, [clientes, clientesGuardados]);
    const agregarCliente = (socio) => {
        editarClientes([
            ...clientes,
            socio
        ]);
        console.log(clientes);
    };
    const borrarCliente = (id) => {
        const nuevosClientes = clientes.filter(cliente => cliente.id !== id);
        editarClientes(nuevosClientes);
    }
    return (
        <div>
            <Header/>
            <Main/>
            <Fragment>
                <Container>
                    <Row>
                        <Col className="text-center">
                            <Formu
                                agregarCliente={agregarCliente}/>
                            <div className="b-1-divider mb-1"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="border rounded-1 shadow-lg mb-4 mt-4 pb-4 pt-4 text-center">
                            <h2 className="fw-bold text-body-emphasis">WAITLIST</h2>
                            {
                                clientes.length > 0 ?
                                    <h3 className="titleExistingClients"><GoChecklist/> Currently on the waiting list
                                    </h3> :
                                    <h3 className="titleNoClients"><HiOutlineClipboardList/> Waiting list empty. <br/>
                                        <br/> <br/> <span className="display-5 text-success">You can be the first! <br/> <BiHappyBeaming/></span>
                                    </h3>
                            }
                            <Accordion defaultActiveKey="0">
                                {
                                    clientes.map(cliente =>
                                        <Cliente
                                            cliente={cliente}
                                            key={cliente.id}
                                            borrarCliente={borrarCliente}
                                        />
                                    )
                                }</Accordion>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
            <Footer/>
        </div>
    );
}

export default App;