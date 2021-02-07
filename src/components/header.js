import React from "react"
import "../scss/components/generic/header-component.scss"
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";



export default class Header extends React.Component{

    logout(){
        localStorage.clear()
        this.props.history.push("/")
    }

    render() {
        return (
            <Router>
                 <div className="header-component"> 
                     <Link className={"item"} to="/">
                         Home
                     </Link>
                     <Link className={"item"} to="/quizz/list">
                         Quizz list
                     </Link>
                     <Link className={"item"} to="/quizz/create">
                         Quizz Builder
                     </Link>
                     <div >
                         <Link className={"item"} onClick={this.logout} >
                             Logout
                         </Link>
                     </div>
                 </div>
            </Router>
         )
    }
}