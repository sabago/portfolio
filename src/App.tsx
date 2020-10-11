import * as React from 'react';
import {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import './App.css';


function App () {
  const [isHovered, setIsHovered] = useState(false);
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/home`; 
    history.push(path);
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
    clearTimeout(timer);
  }
  
  let timer: any;
  const handleMouseLeave = () => {
    timer = setTimeout(() => {
        setIsHovered(false)
    }, 1000)
}

  const moveEyes = () => {
    let app = document.querySelector<HTMLElement>('.App');
    if(app) {
      app.addEventListener('mousemove', eyeball);
    }
  }
  const eyeball=(event: any)=>{
    var pupils:any = document.querySelectorAll<HTMLElement>('.pupil');

    document.onmousemove = function(){
      var x = event.clientX * 100 / window.innerWidth + "%";
      var y = event.clientY * 100 / window.innerHeight + "%";
      //event.clientX => get the horizontal coordinate of the mouse
      //event.clientY => get the Vertical coordinate of the mouse
      //window.innerWidth => get the browser width
      //window.innerHeight => get the browser height
      if(pupils) {
        for(var i=0;i<2;i++){
          pupils[i].style.left = x;
          pupils[i].style.top = y;
          pupils[i].style.transform = "translate(-"+x+",-"+y+")";
        }
      }
    }

  // Array.from(pupils).forEach(function(pupil: any){
  //   // event.preventDefault();
  //   let mouseX = pupil.getBoundingClientRect().right + window.pageXOffset;
  //   if (pupil.classList.contains("eye-left")) {
  //     mouseX = pupil.getBoundingClientRect().left + window.pageXOffset;
  //   }
  //   let mouseY = pupil.getBoundingClientRect().top + window.pageYOffset;

  //   // let x = (pupil.getBoundingClientRect().right) + (pupil.clientWidth/2);
  //   // let y = (pupil.getBoundingClientRect().top) + (pupil.clientHeight/2);

  //   let radian = Math.atan2(event.pageX - mouseX, event.pageY - mouseY);
  //   let rot = (radian*(180/Math.PI)*-1) + 270;
  //   pupil.style.transform = `rotate(${rot}deg)`;
  //   // eye.style.transform = "translate(-" + x + ",-" + y + ")";
  }
          
  return (
    <div className="App"  >
      <div className='face'>
        <img src="https://res.cloudinary.com/sabago/image/upload/v1602343975/sandribego_mbot69.png" alt="cartoon of Abago" object-fit="cover" className="abago-cartoon"/>
        <div className="eyes" onMouseMove={moveEyes}>
          <div className="eye" id="left-eye">
            <div className="pupil"></div>
          </div>
          <div className="eye" id="right-eye">
            <div className="pupil"></div>
          </div>
        </div>
        <div id="enter" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
          {
          isHovered? 
          <Button id="enterButton" onClick={routeChange}>Enter</Button> :
          <h3 id="magic"> Abago's Portfolio </h3> 
          }
        </div>
      </div>
    </div>
  );
}

export default App;