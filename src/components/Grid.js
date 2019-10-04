import React, { Component } from 'react';
import items from '../utilis/items'
import Item from './Item'
import GridHeader from './GridHeader/GridHeader'
import Hr from './Hr/Hr'
import GridItemsContainer from './GridItemsContainer/GridItemsContainer'

class Grid extends Component {

    constructor(props) {
        super(props);
        this.state = { items: [] }
    }

    componentDidMount() {
        this.setState({ items })
    }

    render() {
        return (
            <>

                <GridHeader>Nowości</GridHeader>
                <Hr />

                <GridItemsContainer>

                    {this.state.items.map(item => <Item key={item.id} img={item.img} text={item.text} />)}

                </GridItemsContainer>

            </>);

    }

}

export default Grid;