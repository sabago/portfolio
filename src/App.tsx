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
    setIsHovered(!isHovered);
  }

  return (
    <div className="App">
        <div id="meh" onMouseEnter={toggleHover} >
          {
          isHovered? 
          <Button id="enterButton" variant="primary" onClick={routeChange}>Enter</Button> :
          <h3 id="magic"> Abago's Portfolio </h3> 
          }
      </div>
    </div>
  );
}

export default App;