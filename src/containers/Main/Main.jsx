import React from 'react'; 
import Aux from '../../Helpers/Aux'; 
import Header from '../../components/Header/Header'; 
import BodyComponent from '../../components/BodyComponent/BodyComponent';
import Modal from './Modal'
import './Modal.css'

class Main extends React.Component{
    state = {
        show : false
    }

    showModal = () => {
        this.setState( { show : true } )
    }

    hideModal = () => {
        this.setState( { show: false } )
    }

    render(){
        return(
            < Aux >
                < Header /> 
                < BodyComponent /> 
                <Modal show={ this.state.show } handleClose={ this.hideModal } >
                    <p>Modal Data</p>
                    <p>More Modal Data...</p>
                </Modal>
                <button onClick={ this.showModal }>Here</button>
            </Aux>
        )

    }
}


export default Main; 