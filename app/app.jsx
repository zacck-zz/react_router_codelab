//import react
var React = require('react');
var ReactDOM = require('react-dom');
//ES6 Destructuting syntax
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
//add components
var App = require('App');
import About from 'About';
import Main from 'Main';


//app css require
require('style!css!sass!applicationStyles');

//Create our Router
ReactDOM.render(    //pass two args, JSX and the app element
  <Router history={hashHistory}>
   {/*Main component will always be rendered*/}
   <Route path="/" component={App}>
     {/*Add Routes here */}
   </Route>
 </Router>,
  document.getElementById('app') //where to render
);
