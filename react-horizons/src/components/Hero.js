import React from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'

export default function Hero() {
  return (
    <Container>
        <Row style={{marginTop:"70px"}}>
            <Col xs={3}>
            </Col>

            <Col xs={6}>
                <h1 className="opening-text">Perfect for busy people</h1>
                <p className="opening-text-1">With TaskTrack you will never lose track of your buys schedule. We promise :) </p>
                <div className="soter-buttons">
                    <button type="button" class="shadow p-3 mb-5 bg-white rounded click-buttons"><Image className="playstore-1"  src="playstore 1.png" alt=""/></button>
                    <button type="button" class="shadow p-3 mb-5 bg-white rounded click-buttons"><Image className="appstore-1"  src="appstore 1.png" alt=""/></button>
                </div>
            </Col>

            <Col xs={3}>
            </Col>
        </Row>

        <Row>
            

            <Col>

                <div style={{display:"flex"}}>
                    <Image src="bubble-leftt.png" alt=""/>
                    
                    <Image className="phn-img" src="phones.png" alt=""/>
                    
                    <Image src="bubble-right.png" alt=""/>
                </div>
            </Col>

            
        </Row>
    </Container>

    
  )
}


