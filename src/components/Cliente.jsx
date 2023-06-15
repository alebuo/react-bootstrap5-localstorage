import React, {Fragment} from "react";
import {Accordion, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const Cliente = ({cliente, borrarCliente}) => {
    return (
        <Fragment>
            <Accordion.Item eventKey={cliente.id}>
                <Accordion.Header><p className="textTitleAccordion">{cliente.nombre}</p></Accordion.Header>
                <Accordion.Body>
                    <Container>
                        <Row>
                            <Col><p className="textName">Name: {cliente.nombre}</p></Col>
                            <Col><p className="textDni">DNI: {cliente.dni}</p></Col>
                            <Col><p className="textKey">ID: {cliente.id}</p></Col>
                            <Col>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => borrarCliente(cliente.id)}
                                >Borrar
                                </button>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </Fragment>
    );
}

export default Cliente;
