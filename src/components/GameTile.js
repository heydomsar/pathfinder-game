import React from 'react';
import { inject, observer } from 'mobx-react';
import BaseTile from './BaseTile';

@inject('store')
@observer
export default class GameTile extends React.Component {

    click() {
        this.props.store.placeTile(this.props.x, this.props.y);
        // TODO: Verify if they won.  Possibly on the back end.
        this.props.store.deal();
    }

    render() {
        return (
            <BaseTile tile={this.props.tile} clickHandler={this.click.bind(this)} />
        );
    }
};
