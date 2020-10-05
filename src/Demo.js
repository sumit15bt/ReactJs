import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

// ------------functional Based Artitechure.
const DemoApp = (props) => { //props is geeting the argument from calling statement or write the same key
                              // name-----> name  or arg----> arg.name.
  return <div className="mainDiv_style">
            <h1>Hello {props.name}</h1> // props used in functional
            <p>Welcome to my first React APP </p>
         </div>
}

// ------------Component Based Artitechure.
// class DemoApp extends Component {
//   render(){
//     return <div className="mainDiv_style">
//               <h1>Hello {this.props.name}</h1>  // this.props used in functional
//               <p>Welcome to my first React APP </p>
//            </div>
//   }
// }
export default DemoApp;
