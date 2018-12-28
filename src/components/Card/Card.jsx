import React from 'react';
import ReactPlayer from 'react-player'


const Card = ( props ) => {
    const individualCardStyle ={
        border: '1px solid green',
        margin: '20px',
        padding: '10px',
        width: '500px'
    }

    const videoCardDiv = {
        width: "100%",
        height: "100%"
    }

    return(
        <div style={ individualCardStyle }>
            <div style={ videoCardDiv } >
                <ReactPlayer url={ props.cardUrl } playing ></ReactPlayer> 
            </div>
             
            <h3>{ props.title }</h3>
            <p>{ props.content }</p>
        </div>
    )
}


export default Card;  