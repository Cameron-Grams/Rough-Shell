import React from 'react';
import ReactPlayer from 'react-player'


const Card = ( props ) => {
    const individualCardStyle ={
        border: '1px solid green',
        margin: '20px',
        padding: '0px',
        width: '500px'
    }

    const videoCardDiv = {
        width: "90%",
        height: "90%",
        margin: "auto",
    }

    const otherInfoDiv = {

    }

    return(
        <div style={ individualCardStyle }>
            <div style={ videoCardDiv } >
                <ReactPlayer url={ props.cardUrl } playing={ true } width={ "100%" } controls ></ReactPlayer> 
            </div>
            <div style={ otherInfoDiv } > 
                <h3>{ props.title }</h3>
                <p>{ props.content }</p>
            </div>
        </div>
    )
}


export default Card;  