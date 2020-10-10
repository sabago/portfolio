import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './styles/index.css'

// require('./styles/index.css');

export class Sidebar extends React.Component {
  render(){
    return (
      <div>
        <Menu>
          <div className="text-center">
              <div className="author-img">
                <img src={require('./styles/images/about.png')} alt="Sandra Abago profile"/>
              </div>
            {/* <div className="author-img" style={{background-image: 'url(images/about.jpg)'}} />  */}
            <h1 id="colorlib-logo"><a href="index.html">Sandra Abago</a></h1>
            <h4>Engineer Extraordinaire</h4>
            <span className="email"><i className="icon-mail"></i> sandra.abago@gmail.com</span>
          </div>
          <div id="navbar" className="collapse">
        
              {/* <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li> */}
              <a className="menu-item" href="#">Introduction</a> <br />
              <a className="menu-item" href="#about">About</a> <br />
              <a className="menu-item" href="#" data-nav-section="projects">Projects</a> <br />
              <a className="menu-item"href="#" data-nav-section="blog">Blog</a>< br/>
              <a className="menu-item" href="#timeline" data-nav-section="timeline">Curriculum Vitae</a>< br/>
          </div>
        </Menu>
    </div>
    );}
}