import { Component } from "react";


class Update extends Component{

    componentDidUpdate(prepops){               
        if(prepops.number != this.props.number) {
            console.log("component updated");
        }
    }
    render(){
        return(
            <div>
                
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}

export default Update