import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary';
class BurgerBuilder extends Component{
    render()
    {
        return(
            <Auxiliary>
                <div>
                    Burger representation
                </div>
                <div>
                    Build controls
                </div>
            </Auxiliary>
        );
    }
}
export default BurgerBuilder;