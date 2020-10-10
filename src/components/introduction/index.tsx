import * as React from 'react';
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styles/index.css';

// require('./styles/index.css');

export class Introduction extends Component {
    render() {
    return (
        <div id="introduction">
        <Carousel controls={false} indicators={true}>
            <Carousel.Item>
                {/* <Carousel.Caption> */}
                <h3>Hi! I'm Sandra</h3><br/>
                <p><a className="btn btn-primary btn-learn" href="" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                {/* </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <h3>I enjoy building THINGS!</h3><br/>
                <p><a className="btn btn-primary btn-learn" href="https://github.com/sabago" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
             
            </Carousel.Item>
            <Carousel.Item>
                <h3>I am a frontend engineer <br /> & aspiring fullstack engineer</h3><br/>
                <p><a className="btn btn-primary btn-learn" href="" target="_blank" rel="noopener noreferrer">View Blog <i className="icon-book" /></a></p>
            </Carousel.Item>
        </Carousel>
        </div>
    );}
}