import Form from 'react-bootstrap/Form';
import React, {Fragment, useState} from "react";
import {v4 as uuid} from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";

const Formu = ({agregarCliente}) => {

    const [socio, editarSocio] = useState({
        nombre: "",
        dni: ""
    });

    //extraer los valores nombre y dni
    const {nombre, dni} = socio;

    // creo otro hook de estado para manejar el error
    const [error, setError] = useState(false);

    //recogemos lo que el usuario escribe en el formulario
    const handleChange = (e) => {
        editarSocio({
            ...socio,
            [e.target.name]: e.target.value
        })
        //console.log("Tomo los datos del formulario");
    };

    //cuando se envia el formulario se ejecuta esta funcion
    const submitForm = (e) => {
        e.preventDefault();

        //descomentado para ver que funciona
        console.log("Se envio el formulario");

        //validar el formulario
        if (nombre.trim() === '' || dni.trim() === '') {
            setError(true);
            return;
        }

        // mensaje de error
        setError(false);

        //poner un id
        //npm install uuid
        socio.id = uuid();

        //guardar el socio
        agregarCliente(socio);

        //limpiar el formulario
        editarSocio({
            nombre: '',
            dni: ''
        })
    };
    return (
        <Container className="mt-5 mb-5 text-center">
            <Row>
                <Col md={12} className="border rounded-1 shadow-lg mb-4 pb-4 pt-4">
                    <h2 className="fw-bold text-body-emphasis">JOIN WAITLIST</h2>
                    <p>Subscribe to our wait list for Medical Tech products.</p>
                    <a id="registerform"> </a>
                    <Fragment>
                        <Form onSubmit={submitForm}>
                            <Col className="mx-5">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label><strong>DNI</strong></Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="DNI"
                                        name="dni"
                                        onChange={handleChange}
                                        value={dni}/>
                                </Form.Group>
                            </Col>
                            <Col className="mx-5">
                                <Form.Group>
                                    <Form.Label><strong>Name</strong></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        name="nombre"
                                        onChange={handleChange}
                                        value={nombre}
                                    />
                                </Form.Group>
                            </Col>
                            {error &&
                                <p className="text-danger"><strong>Error: You must complete all fields</strong></p>}
                            <br/>
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >Submit
                            </button>
                        </Form>
                    </Fragment>
                </Col>
            </Row>
        </Container>
    );
}
export default Formu;