import React, { useState, Component } from "react";
import Login from "../Autentication/Login/Login";
import SignUp from "../Autentication/Sign Up/SignUp";
import "./Autentication.scss"


// let Authentication = () => {
//     let [isLogin, setIsLogin] = useState(true);

//     let toggleView = () => {
//         setIsLogin(!isLogin)
//     }

//     return (
//         <div>
//             <span className="span" onClick={toggleView}>Go to {isLogin ? 'SignUp' : 'Login'}</span>
//             {isLogin ?
//                 <Login />
//                 :
//                 <SignUp />
//             }
//         </div>
//     )
// }

// export default Authentication;




class AutenticationClass extends Component {
    state = {
        isLogin:true
    }

    toggleView = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render() {
        return (
            <div>
                <span className="span" onClick={this.toggleView}>Go to {this.state.isLogin ? 'SignUp' : 'Login'}</span>
                {this.state.isLogin ?
                    <Login />
                    :
                    <SignUp />
                }
            </div>
        )
    }
}

export default AutenticationClass;