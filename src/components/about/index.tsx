import * as React from 'react';
import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { ArrowRight } from 'react-bootstrap-icons';
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";


import './styles/index.css';

export class About extends Component {
    render() {
    return (
        <div id="about" className="about-desc">
            <div>
                <span className="heading-meta">About</span>
                <h3 className="colorlib-heading">Who Am I?</h3>
                <p>
                    Born and bred in Uganda, East Africa, I am a bonafide hardworker! 
                    Growing up, I enjoyed playing soccer with my brothers, while making time for farming,
                    studying math and science, housework, and competing in sports and chess.
                </p>
                <p>
                    I love engineering! When I was 9, I attended a science fair where I learned
                    the basic heat transfer concepts. Upon returning home, I built a mud brick and iron firewood
                    oven, and started baking bread using a recipe from the newspaper.
                    As soon as my father returned from work, I walked up to him with the bread in hand
                    and said, "see, dad, you do not need to buy bread anymore!". After explaining to him
                    where the bread came from, he smiled and said "You should be an engineer!"
                    I agreed and have never looked back.
                </p>
                <p>
                    By training, I'm a chemical and computational materials engineer 
                    who is dedicated to applying my academic and research knowledge 
                    to meet the challenges of developing new and better materials, 
                    as well as devising novel applications to meet demands at the 
                    cutting edge of technology.
                    These days, I am a frontend engineer and I spend my free time 
                    expanding on programming knowledge, and automating the boring stuff.
                </p>
            </div><br />
            <Container fluid="md">
                <Row>
                    <Col>
                        <span className="heading-meta">What I do?</span>
                        <h3>Here is some of my expertise</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>     
                        <span className="icon">
                            <MDBIcon
                                icon="gem"
                                size="3x"
                                className="indigo-text"
                            /><h2>Web Development </h2>
                        </span>
                        <div className="desc">                            
                            <p>Experienced in Wordpress development;I build themes and plugins in PHP. Mostly specializing in eCommerce.</p>
                        </div>
                    </Col>
                    <Col>
                        <span className="icon">
                            <MDBIcon
                                icon="desktop"
                                size="3x"
                                className="indigo-text"
                            /><h2>Frontend Development </h2>
                        </span>
                        <div className="desc">                            
                            <p>I have experience building and styling websites using JavaScript,React,HTML,CSS, and SASS, as well as testing.</p>
                        </div>
                    </Col>
                    <Col>
                        <span className="icon">
                            <MDBIcon
                                icon="server"
                                size="3x"
                                className="indigo-text"
                            /><h2>Backend Development </h2>
                        </span>
                        <div className="desc">                            
                            <p>I am familiar with writing PHP server-side code; Python;and setting up and managing MySQL databases with SQL/PhP scripts.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );}
}