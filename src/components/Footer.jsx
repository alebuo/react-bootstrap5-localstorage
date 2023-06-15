//import React, {useState} from "react";
import {Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import React from "react";

const Footer = () => {
    return (
        <div>
            <footer
                className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <Col md={9} mt={1} className="text-center">
          <span className="mb-3 mb-md-0 text-body-secondary">
              <i className="bi bi-headset-vr"></i> &copy; 2023 Medical Tech, Inc |
          </span>
                    <span className="mb-3 mb-md-0 text-body-secondary"> Address: Evergreen Terrace 742 | </span>
                    <span className="text-body-secondary">E-Mail: <a
                        href="mailto:info@e-learning.com">info@bazinga.bet</a>
          </span>
                </Col>
                <Col md={3} mt={1}>
                    <ul className="nav list-unstyled d-flex mt-0">
                        <li className="fs-4 ms-3">
                            <a className="text-body-secondary" href="https://twitter.com" target="_blank"
                               rel="noreferrer">
                                <FaTwitter/>
                            </a>
                        </li>
                        <li className="fs-4 ms-3">
                            <a className="text-body-secondary" href="https://instagram.com" target="_blank"
                               rel="noreferrer">
                                <FaInstagram/>
                            </a>
                        </li>
                        <li className="fs-4 ms-3">
                            <a className="text-body-secondary" href="https://facebook.com" target="_blank"
                               rel="noreferrer">
                                <FaFacebookF/>
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col md={12} my={5} className="text-center mt-3">
                    <a href="/index.html" className="btn btn-primary btn-lg px-4 me-sm-3">
                        <i className="bi bi-house-door-fill"></i> Top</a>
                </Col>
            </footer>
        </div>
    );
}
export default Footer;