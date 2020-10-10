import * as React from 'react';
import {useState} from 'react';
import { Sidebar } from './components/sidebar';
import { Introduction } from './components/introduction';
import { About } from './components/about';
import { Button } from 'react-bootstrap';
import history from './history';
import { useHistory } from 'react-router-dom';
//do i need this import?
import './App.css';

function App () {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/home`; 
    history.push(path);
  }

  const toggleHover = () => {
    setIsHovered(true);
  }

  return (
    <div className="App">
      <div className='face'>
        <img src="https://res.cloudinary.com/sabago/image/upload/v1602343975/sandribego_mbot69.png" alt="cartoon of Abago" object-fit="cover" className="abago-cartoon"/>
        <div className="eyes">
          <div className="eye"></div>
          <div className="eye"></div>
        </div>
        <div id="enter" onMouseEnter={toggleHover} >
          {
          isHovered? 
          <Button id="enterButton" variant="primary" onClick={routeChange}>Enter</Button> :
          <h3 id="magic"> Abago's Portfolio </h3> 
          }
      </div>
      </div>
       
    </div>
  );
}

export default App;