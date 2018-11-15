import React from 'react'; 
import ActivityFeed from '../../containers/ActivityFeed/ActivityFeed'; 
import Card from '../Cards/Cards';

class RightSide extends React.Component{


    render(){
        return(
            < div >
                < ActivityFeed /> 
                < Card /> 
            </ div >
        )

    }
}


export default RightSide; 