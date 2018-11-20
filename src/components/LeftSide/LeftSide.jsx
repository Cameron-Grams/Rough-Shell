import React from 'react'; 
import ProfileBasic from '../../containers/ProfileBasic/ProfileBasic'; 
import CardDisplay from '../../containers/CardDisplay/CardDisplay'; 
import mockData from '../../Helpers/mockData'; 

class LeftSide extends React.Component{

    constructor( props ){
        super( props );
        this.state = {
            data: mockData.cards
        }
    }

    render(){
        return(
            < div >
                < ProfileBasic /> 
                < CardDisplay collection={ this.state.data } /> 
            </ div >
        )

    }
}


export default LeftSide; 