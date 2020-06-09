import React, { Component } from "react";
import Wrapper from "./components/Wrapper"
import Col from "react-bootstrap/Col"
import Nav from "./components/Navbar"
import Cards from "./components/Cards"
import characters from "./memory-cards.json"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        characters,
        topScore: 0,
        currentScore: 0,
    };

    render() {
        return (

            <Wrapper className="bg-dark">
                <Nav />
                <div className="container col-xl-6" >
                <Col >
                    {this.state.characters.map(persona =>
                        <Cards image={persona.image}></Cards>)}
                </Col>
                </div>
            </Wrapper >
           
        )
    }
}
export default App;