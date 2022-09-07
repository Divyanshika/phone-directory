import React, {Component} from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            subsribersList:[
               
                    {
                      id:1,
                      Name:"Sho",
                      Phone:999999999,
                    },
                    {
                      id:2,
                      Name:"Shi",
                      Phone:9998888999,
                    }
                  ]
            
        }   
    }

    addSubscriberHandler=(newSubscriber)=>
    {
        let subsribersList=this.state.subsribersList;
        if(subsribersList.length>0){
            newSubscriber.id=  subsribersList[subsribersList.length-1]+1
        }
        else{
            newSubscriber.id=1;
        }
        subsribersList.push(newSubscriber);
        this.setState({subsribersList: subsribersList})
        console.log(this.state.subsribersList)
    }
    render(){
        return(
                // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
                <ShowSubscribers subsribersList={this.state.subsribersList}/>
        )
    }
}
export default PhoneDirectory;