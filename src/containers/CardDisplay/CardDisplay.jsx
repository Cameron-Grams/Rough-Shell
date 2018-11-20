import React from 'react';
import Card from '../../components/Card/Card';



class CardDisplay extends React.Component{
    constructor( props ){
        super( props );
        this.state = {
            data: props.collection
        }
    };

    render(){
        console.log( ' in card display with: ', this.state.data );

        let displayedCards = this.state.data.map( ( item, index ) => {
            return(
                < Card key={ index } title={ item.title } /> 
            )
        } ); 
       
        return(
            <div>
            { displayedCards }
            </div>
        )
    }
}

export default CardDisplay; 