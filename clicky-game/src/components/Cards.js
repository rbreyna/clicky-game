import React from "react"


import Image from "react-bootstrap/Image"

function Cards(props){
    return(<Image className="m-1" lg={3} data-target ={props.clicked} src={props.image} onClick ={()=>props.clickHandler(props.id)} width={150} height={150} rounded/>)    
}



export default Cards;