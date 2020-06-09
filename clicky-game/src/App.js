import React from "react";
import Wrapper from "./components/Wrapper"
import Nav from "./components/Navbar"
import Cards from "./components/Cards"
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){

    return(
        <Wrapper>
          <Nav/>
          <Cards/>
        </Wrapper>

    )
}

export default App;