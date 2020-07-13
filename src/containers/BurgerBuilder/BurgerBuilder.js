import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
class BurgerBuilder extends Component{
    state={
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    }
    render()
    {
        return(
            <Auxiliary>
                <div>
                    <Burger ingredients={this.state.ingredients}/>
                </div>
                <div>
                    Build controls
                </div>
            </Auxiliary>
        );
    }
}
export default BurgerBuilder;