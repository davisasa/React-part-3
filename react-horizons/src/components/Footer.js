import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

export default function Footer() {
  return (
    <Container fluid>
        <Row>
            <Col>
            <footer>
                <div>
                    <div className="row">
                        <div className="col-md-8 footer-content">
                            <Image className="footer-logo" src="rainbow ui.png" alt=""/> 
                            <p className="footer-para">© Copyright 2017. All rights reserved </p>
                        </div>

                        <div className="col-md-2">

                        </div>

                        <div className="col-md-2">
                            <div className="social-icons justify-content-end">
                                <Image className="s-icons" src="facebook.png" alt=""/>
                                <Image className="s-icons" src="google-plus.png" alt=""/>
                                <Image className="s-icons" src="twitter.png" alt=""/>
                                <Image className="s-icons" src="instagram.png" alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
            </Col>
        </Row>
    </Container>
  )
}
