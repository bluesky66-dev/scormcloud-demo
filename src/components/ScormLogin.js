import React, {Component} from 'react'
import SCORMCloud from 'scormcloud-api-wrapper'


class ScormLogin extends Component{

// Import the module.
constructor()
{
    super()
    this.state = {
       message:'Welcome Visitor'
    }
}

changeMessage(){
    var api = new SCORMCloud('8Z11RVXG0P', '3SJ7eciCg0e7fy0X8BDLlb16EgUJf4hikREbMJVv');
    api.authPing(function (error, result) {
        if (error) throw error; console.log(result);
      });
    this.setState({
        message:'Thanks you for subscribing'
    })
}

render(){
return(
    <div>
    return <h1>{this.state.message}</h1>
    <button onClick={() => this.changeMessage()}>Login</button>
    </div>
    )
   }
}
export default ScormLogin;
