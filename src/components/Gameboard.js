import React from 'react';
import { inject, observer } from 'mobx-react';
import GameTile from './GameTile';

@inject('store')
@observer
export default class Gameboard extends React.Component {

    render() {
        const style = {
            board: {
                margin: 15
            }
        };
    
        return (
            <div style={style.board} >
                {this.props.store.gameArray[0].map((t, i) =>  <GameTile tile={t} x={0} y={i} key={i} />)}<br />
                {this.props.store.gameArray[1].map((t, i) =>  <GameTile tile={t} x={1} y={i} key={i} />)}<br />
                {this.props.store.gameArray[2].map((t, i) =>  <GameTile tile={t} x={2} y={i} key={i} />)}<br />
                {this.props.store.gameArray[3].map((t, i) =>  <GameTile tile={t} x={3} y={i} key={i} />)}<br />
                {this.props.store.gameArray[4].map((t, i) =>  <GameTile tile={t} x={4} y={i} key={i} />)}<br />
                {this.props.store.gameArray[5].map((t, i) =>  <GameTile tile={t} x={5} y={i} key={i} />)}<br />
                {this.props.store.gameArray[6].map((t, i) =>  <GameTile tile={t} x={6} y={i} key={i} />)}<br />
                {this.props.store.gameArray[7].map((t, i) =>  <GameTile tile={t} x={7} y={i} key={i} />)}<br />
            </div>
        );
    }
};

