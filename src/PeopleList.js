import React from 'react';
import "tachyons";

const PeopleList= (props) =>{
  return(
          <div className="peoples_div_css ma4 bg-dark-green dib pa4 tc grow shadow-10">
                <img src={props.image} alt="people"/>
                <h1 className="tc">{props.name}</h1>
                <p className="tc ">{props.work}</p>
           </div>
       )
}
export default PeopleList; // PeopleList is a customComponent
