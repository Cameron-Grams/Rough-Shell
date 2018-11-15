import React from 'react'; 
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide'; 
import './BodyComponent.css'; 

class BodyComponent extends React.Component{


    render(){
        return(
            < div className={ "parentBody" }>
                < LeftSide /> 
                < RightSide /> 
            </ div >
        )

    }
}


export default BodyComponent; 