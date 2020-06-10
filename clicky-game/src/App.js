import React, { Component } from "react";
import Wrapper from "./components/Wrapper"
import Col from "react-bootstrap/Col"
import Nav from "./components/Navbar"
import Cards from "./components/Cards"
import characters from "./memory-cards.json"
import 'bootstrap/dist/css/bootstrap.min.css';

let initialCharacter = characters;

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

    handleOnClick = (id) => {

        var index;

        console.log("You've clicked " + id + "!")

        let obj = this.state.characters.find(o => o.id === id);

        if (!obj.clicked) {

            index = this.state.characters.findIndex(x => x.id === id);

            //Makes copy of characters
            let characterCopy = [...this.state.characters];
            characterCopy[index].clicked = true;
            this.setState({
                characters: initialCharacter,
                currentScore: this.state.currentScore + 1
            }, () => {
                if (this.state.currentScore > this.state.topScore) {
                    this.setState({ topScore: this.state.currentScore })
                }
            });

            if(this.state.currentScore === 16){
                alert("Congrats! You found them all!");
            }

        } else {
            index = this.state.characters.findIndex(x => x.id === id);
            alert("You've already choosen " + this.state.characters[index].name + "!")

            let characterCopy = [...this.state.characters];

            for(var i=0; i<characterCopy.length; i++)
                characterCopy[i].clicked = false;
            
            this.setState({
                currentScore: 0,
                characters: characterCopy
            })

            console.log(this.state.characters)
            return true;

        }


    }


    render() {


        return (
            <Wrapper className="bg-dark">
                <Nav currentScore={this.state.currentScore} topScore={this.state.topScore} />
                <div className="container col-xl-6" >
                    <Col >
                        {this.shuffleArray(this.state.characters).map(persona =>
                            <Cards
                                key={persona.id}
                                id={persona.id}
                                clicked={persona.clicked}
                                image={persona.image}
                                clickHandler={this.handleOnClick}>
                            </Cards>)}
                    </Col>
                </div>
            </Wrapper >
        )
    }
}

export default App;