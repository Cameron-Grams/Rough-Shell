import React from 'react'; 
import ProfileBasic from '../../containers/ProfileBasic/ProfileBasic'; 
import Card from '../Cards/Cards'; 

class LeftSide extends React.Component{


    render(){
        return(
            < div >
                < ProfileBasic /> 
                < Card /> 
            </ div >
        )

    }
}


export default LeftSide; 