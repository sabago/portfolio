import * as React from "react";
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';

// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import Products from "./Product/Products";
import { Home } from "./components/home";
import history from './history';
import App from "./App";

export default class Routes extends React.Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route exact path="/home" component={Home} />
                    {/*<Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
    // return (
    //     <div className="App">
    //       <ReactCSSTransitionGroup
    //           transitionName="remove"
    //           transitionEnterTimeout={100}
    //           transitionLeaveTimeout={100}>
    //               {child}
    //       </ReactCSSTransitionGroup>
    //   </div>
}

// export default withRouter(Routes)