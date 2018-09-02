import React from "react"
import ReactDom from "react-dom"
import Rectangle from "./components/Rectangle"
import App from './components/App';

ReactDom.render(<App />, document.getElementById('app'))
console.log("Area of rectangle is: " + new Rectangle(10,10).area);