import React from "react"
import Container from "react-bootstrap/Container"

import Image from "react-bootstrap/Image"

function Cards(props){
    return(<Image className="m-1" lg={3} src={props.image} width={150} height={150} rounded/>)    
}



export default Cards;