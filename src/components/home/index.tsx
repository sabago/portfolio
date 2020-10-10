import * as React from 'react';
import { Sidebar } from '../sidebar';
import { Introduction } from '../introduction';
import { About } from '../about';
import './styles/index.css';

export class Home extends React.Component{
  render() {
    return (
        //Change this class name
      <div className="home">
        <Sidebar />
        <main id="page-wrap">
          <Introduction />
          <About />
        </main>
      </div>
    );}
  }