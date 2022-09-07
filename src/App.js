import React, { Component } from 'react';
import Header from './Header.js';
import './App.css';
class App extends Component{
  deleteHandler(message)
  {
    alert(message)
  }

  constructor()
  {
    super();
    this.state={
      subcribersListToShow:[]
    }
  }
  render() {
    // let subscribers=[
    //   {
    //     id:1,
    //     Name:"Shilpa",
    //     Phone:999999999,
    //   },
    //   {
    //     id:2,
    //     Name:"Shipra",
    //     Phone:9998888999,
    //   }
    // ];
    return(
      <div>
         <Header heading="Phone Directory"/>
         <div className='component-body-container'>
          <button className='custom-btn add-btn'>Add</button>
          <div className='grid-container heading-container'>
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
           </div >

          {
            this.state.subcribersListToShow.map(sub=>{
              return <div key={sub.id} className='grid-container'>
              <span className="grid-item name-heading">{sub.Name}</span>
                <span className="grid-item phone-heading">{sub.Phone}</span>
                <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn" onClick={this.deleteHandler.bind(this,"Delete handler clicked")}>Delete</button>
                </span>
                </div>
            })
          }
         </div>
      </div>
    );
  }
}
export default App;