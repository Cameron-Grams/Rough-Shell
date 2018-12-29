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

/* using the same iteration of CardDisplay will produce an error: the keys for the left 
   and right side are the same, so the elements of the DOM are indistinguishable */

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