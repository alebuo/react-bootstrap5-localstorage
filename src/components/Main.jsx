import React from "react";
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import portada1 from "../images/a1.png";
import portada2 from "../images/a2.png";
import portada3 from "../images/a3.png";
import '../App.css';

const Main = () => {
    return (
        <div>
            <main>
                <Carousel controls={true} indicators={false}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={portada1}
                            alt="Compatible for all devices"
                        />
                        <Carousel.Caption>
                            <h3 className="text-bg-success mt-0 py-3 text-capitalize">Compatible for all devices</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={portada2}
                            alt="High-Tech medical monitoring"
                        />
                        <Carousel.Caption>
                            <h3 className="text-bg-success mb-0 py-3 text-capitalize">High-Tech medical monitoring</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={portada3}
                            alt="Remote medical interventions"
                        />
                        <Carousel.Caption>
                            <h3 className="text-bg-success mt-0 py-3 text-capitalize">Remote medical interventions</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Container className="mt-5 mb-2 text-center">
                    <Row>
                        <Col md={4}>
                            <h2 className="text-capitalize">Delivery</h2>
                            <p className="text-capitalize">deliveries throughout the continent</p>
                        </Col>
                        <Col md={4}>
                            <h2>Speed</h2>
                            <p className="text-capitalize">
                                we optimize our shipments to improve the time of arrival of your order
                            </p>
                        </Col>
                        <Col md={4}>
                            <h2>Security</h2>
                            <p className="text-capitalize">we guarantee the security of your transactions</p>
                        </Col>
                    </Row>
                </Container>
            </main>
        </div>
    );
}
export default Main;
