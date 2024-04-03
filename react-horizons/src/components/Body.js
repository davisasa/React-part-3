import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'

export default function Body() {
  return (
    <Container fluid>
        <Row className="blue-background">
            <Col xs={1}>
            </Col>

            <Col xs={5}>
            <div className="design-share">
                <h2 className="design">Design & Share </h2>
                <p className="share">Sharing your designs with others has never been this easy. <br/>
                    Your team members and clients can comment on your <br/> uploaded screens and give you real-time feedback and <br/> suggestions. 
                    Of course, you will be notified each time they do.
                </p>
            </div>
            </Col>

            <Col xs={5}>
            <div class="col-md-5">
                <Image className="mac-window" src="rainbow kit.png" alt=""/>
            </div>
            </Col>

            <Col xs={1}>
            </Col>
        </Row>

        <Row className='our-clients'>
            <div className="our-clients-1">
                <center>
                <h3 className="blue-text">Our Clients</h3>
                <h5 className="pleasure-para">We’ve had the pleasure of working with over 500 amazing clients. Check some of them out</h5>
                </center>
            </div>

            <div className="row">
                    
                    <center>
                        <div className="col-md-10 iconss">
                            <Image className="icon-s" src="iconss.png" alt=""/>
                        </div>
                    </center>
                    
            </div>

            <div>
                <center>
                <h5 className="today">Today, many people rely on computers to do homework, work, and create or store useful information. Therefore, it is important for the <br/> 
                    information on the computer to be stored and kept properly. 
                </h5>
                </center>
            </div>

            
        </Row>

        <Row>
            <div className="row">

            <div className="col-md-5 woman-container">
                <Image className="woman" src="woman.png" alt=""/>
            </div>

            <div className="col-md-6">
                <p className="blockquote text-left flex-quote ">
                    <div>
                        <span>"</span>
                    </div>
                    <div>
                        <p className="mb-0 picture-quote">Have you ever heard the expression, “Do not count your chickens before they
                         hatch?” Maybe an older, wiser individual would tell you this to keep you from 
                          getting ahead of yourself. Like buying a new car before you actually got that new job.</p>
                        <footer className="quote-name">LILLY LYONS <cite title="Source Title"></cite></footer>
                        <Image src="slack icon.png" alt=""/>
                
                    </div>
                    </p>
            </div>

            <div className="col-md-1">
                
            </div>
            </div>
        </Row>

        <Row>
        <div class="container-fluid smartchat">
            <div class="row">
                <center>
                    <div class="col-md-12 download-section">
                        <h3 style={{color : "#fff", paddingBottom: "20px"}}>Download the app </h3>
                        <p style={{color: "#fff", fontSize: "20px", paddingBottom: "50px"}}>Grab SmartChat from Google Play or App Store and start chatting with your friends. </p>

                        <div class="soter-buttons">
                            <button type="button" className="shadow p-3 mb-5 bg-white rounded click-buttons"><Image className="playstore-1"  src="playstore 1.png" alt=""/></button>
                            <button type="button" className="shadow p-3 mb-5 bg-white rounded click-buttons"><Image className="appstore-1"  src="appstore 1.png" alt=""/></button>
                        </div>
                    </div>
                </center>
                </div>
            </div>
        
        </Row>
    </Container>
  )
}


