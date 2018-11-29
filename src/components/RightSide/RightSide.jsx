import React from 'react'; 
import ActivityFeed from '../../containers/ActivityFeed/ActivityFeed'; 
import CardDisplay from '../../containers/CardDisplay/CardDisplay';
import mockData from '../../Helpers/mockData'; 
import '../../App.css'

class RightSide extends React.Component{

    constructor( props ){
        super( props );
        this.state = {
            data: mockData.activities
        }
    }



    render(){
        return(
            < div className="rightSideDiv">
                < ActivityFeed /> 
                < CardDisplay collection={ this.state.data } /> 
            </ div >
        )

    }
}


export default RightSide; 