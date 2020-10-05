import React,{Component} from 'react';
import "tachyons";
import "./people.css";
import PeopleList from "./PeopleList";

//-----------functional -------------
// const People= () =>{
//   const peopleListArray=[
//     {
//       id:1,
//       image:"https://joeschmoe.io/api/v1/female/SUMIT",
//       name:"SUMIT",
//       work:"Java Developer"
//     },
//     {
//       id:2,
//       image:"https://joeschmoe.io/api/v1/female/Anubhav",
//       name:"Anubhav",
//       work:"DataBase"
//     },
//     {
//       id:3,
//       image:"https://joeschmoe.io/api/v1/female/Himanshu",
//       name:"Himanshu",
//       work:"Java Developer"
//     }
//   ]
//
//   const peopleCardArray = peopleListArray.map((peopleCard) => {
//     return <PeopleList id={peopleCard.id} image={peopleCard.image}
//                           name={peopleCard.name}
//                           work={peopleCard.work}/>
//   });
//   return(<div className="mainPage">
//           <h1> People lives Here...!</h1>
//           {peopleCardArray}
//          </div>
//        )
// }
//--------------------------------------------------------------------------------
//--------------------class component
class People extends Component{
  constructor (){
    super();
    this.state = {
      name:"People live's Here.."
    }
  }
  namechange(){
    this.setState({
      name:"Welcome to people's world..!"
    })
  }
  render(){
    const peopleListArray=[
      {
        id:1,
        image:"https://joeschmoe.io/api/v1/female/SUMIT",
        name:"SUMIT",
        work:"Java Developer"
      },
      {
        id:2,
        image:"https://joeschmoe.io/api/v1/female/Anubhav",
        name:"Anubhav",
        work:"DataBase"
      },
      {
        id:3,
        image:"https://joeschmoe.io/api/v1/female/Himanshu",
        name:"Himanshu",
        work:"Java Developer"
      }
    ]

    const peopleCardArray = peopleListArray.map((peopleCard) => {
      return <PeopleList key={peopleCard.id} id={peopleCard.id} image={peopleCard.image}
                            name={peopleCard.name}
                            work={peopleCard.work}/>
    });
    return(<div className="mainPage">
              <h1>{this.state.name}</h1>
              {peopleCardArray}
              <button onClick={()=>this.namechange()}>Go to Them</button>
             </div>
           )
  }
}


export default People;
