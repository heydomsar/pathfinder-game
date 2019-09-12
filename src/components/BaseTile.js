import React from 'react';
import { observer } from 'mobx-react';
import Paper from 'material-ui/Paper';
import Strike from 'material-ui/svg-icons/action/highlight-off';
import './BaseTile.css';

@observer
export default class BaseTile extends React.Component {

    render() {
        const style = {
            tile: {
                height: 80,
                width: 80,
                margin: 0,
                textAlign: 'center',
                display: 'inline-block',
                padding: '20px 0',
            },
            text: {
                position: 'absolute',
                padding: '0 20px',
            },
            strike: {
                color: '#DD2C00',
                width: 40,
                height: 40,
            },
            rotation: {
                transform: `rotate(${this.props.tile.rotation}deg)`,
            }
        };

        const special = this.props.tile ? this.props.tile.special : '';
        const card = this.props.tile ? this.props.tile.card : '';

        if (card === 'strike') {
            return (
                <Paper style={style.tile} zDepth={1} onClick={this.props.clickHandler}>
                    <Strike style={style.strike} />
                </Paper>
            );
        } else if (card === 'straight') {
            return (
                <Paper style={style.tile} zDepth={1} onClick={this.props.clickHandler}>
                    <div className="straight" style={style.rotation}></div>
                </Paper>
            );
        } else if (card === 'corner') {
            return (
                <Paper style={style.tile} zDepth={1} onClick={this.props.clickHandler}>
                    <div className="corner" style={style.rotation}></div>
                </Paper>
            );
        } else if (card === 't') {
            return (
                <Paper style={style.tile} zDepth={1} onClick={this.props.clickHandler}>
                    <div className="t" style={style.rotation}></div>
                </Paper>
            );
        } else if (card === '4-way') {
            return (
                <Paper style={style.tile} zDepth={1} onClick={this.props.clickHandler}>
                    <div className="cross"></div>
                </Paper>
            );
        }
        return (
            <Paper style={style.tile} zDepth={1} onClick={this.props.clickHandler}>
                <div style={style.text}>{special}</div>
            </Paper>
        );
    }
};

