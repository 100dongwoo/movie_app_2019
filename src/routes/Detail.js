import React,{Component} from "react";

class Detail extends Component{

    componentDidMount() {           //2
        const{location,history}=this.props;
       if(location.state===undefined){
           history.push("/")

       }
    }

    render() {                  //1
        const {location}=this.props;
        if(location.state)
        {
            return <span>{location.state.title}</span>
        }
        else
        {
            return null
        }
    }
}
export default Detail