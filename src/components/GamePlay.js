import React from 'react';
import { inject, observer } from 'mobx-react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CurrentTile from './CurrentTile';

@inject('store')
@observer
export default class GamePlay extends React.Component {

    render() {
        const style = {
            root: {
                display: 'flex',
                flexWrap: 'wrap',
            },
            tile: {
                margin: '-10px 0 15px 15px',
            }
        };

        const walletText = `Wallet: ${this.props.store.wallet}`;
        const wagerText = `Wager: ${this.props.store.wager}`;
        const strikesText = `Strikes: ${this.props.store.strikes}`;

        return (
            <div style={style.root}>
                <Paper>
                <List>
                    <Subheader>Profile</Subheader>
                    <ListItem
                        primaryText={walletText}
                        secondaryText="Your accumulated total"
                        
                    />
                    <ListItem
                        primaryText={wagerText}
                        secondaryText="Click to Fold"
                    />
                </List>
                <Divider />
                <List>
                    <Subheader>This Hand</Subheader>
                    <ListItem
                        primaryText={strikesText}
                    />
                    <ListItem
                        primaryText="Current Card"
                        secondaryText="Click it to deal"
                    />
                </List>
                <div style={style.tile}>
                    <CurrentTile tile={this.props.store.currentTile} />
                </div>
                </Paper>
            </div>
        );
    }
};
