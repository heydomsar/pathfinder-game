import React from 'react';
import { inject, observer } from 'mobx-react';
import BaseTile from './BaseTile';

@inject('store')
@observer
export default class CurrentTile extends React.Component {

    click() {
        if (this.props.tile.card === '' || this.props.tile.card === 'strike') {
            this.props.store.deal();
        } else {
            this.props.store.rotate();
        }
    }

    render() {
        return (
            <BaseTile tile={this.props.tile} clickHandler={this.click.bind(this)} />
        );
    }
};
