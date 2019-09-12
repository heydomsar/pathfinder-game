import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import GameBoard from '../components/Gameboard';
import GamePlay from '../components/GamePlay';
import BottomNav from '../components/BottomNav';

class Home extends Component {
  render() {
    const styles = {
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'start',
        justifyContent: 'center'
      },
    };

    return (
        <div>
          <AppBar title="Pathfinder" />
          <div style={styles.wrapper}>
            <GameBoard />
            <GamePlay />
          </div>
          <BottomNav />
        </div>
    )
  }
}

export default Home;
