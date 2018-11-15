import React from 'react'; 
import Aux from '../../Helpers/Aux'; 
import Header from '../../components/Header/Header'; 
import BodyComponent from '../../components/BodyComponent/BodyComponent';

class Main extends React.Component{


    render(){
        return(
            < Aux >
                < Header /> 
                < BodyComponent /> 
            </Aux>
        )

    }
}


export default Main; 