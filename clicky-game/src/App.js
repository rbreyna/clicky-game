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

    shuffleArray = arr => {

        var counter = arr.length
        var random;
        var temp;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            random = Math.floor(Math.random() * counter);
            // Decrease ctr by 1
            counter--;
            // And swap the last element with it
            temp = arr[counter];
            arr[counter] = arr[random];
            arr[random] = temp;
        }
        return arr;
    }

    render() {


        return (
            <Wrapper className="bg-dark">
                <Nav />
                <div className="container col-xl-6" >
                    <Col >
                        {this.shuffleArray(this.state.characters).map(persona =>
                            <Cards image={persona.image}></Cards>)}
                    </Col>
                </div>
            </Wrapper >
        )
    }
}
    export default App;