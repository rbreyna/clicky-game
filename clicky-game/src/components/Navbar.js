import React from "react";
import Navbar from "react-bootstrap/Navbar"

function Nav(props) {

    return(
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
            <img
                alt="The Office Logo"
                src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0018/0890/brand.gif?itok=h3ZAhbP2"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
      The Michael Scott Memory Game
    </Navbar.Brand>
        <ul className="navbar-nav ml-auto"> 
            <li className="nav-item" style={{color: "white", padding: "10px"}}> Current Score: {props.currentScore}</li> 
            <li className="nav-item" style={{color: "white", padding: "10px"}}> High Score: {props.topScore}</li> 
        </ul> 
    </Navbar>
    )
}

export default Nav;