import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import HardwareVideogameAsset from 'material-ui/svg-icons/hardware/videogame-asset';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

const playIcon = <HardwareVideogameAsset />;
const leaderboardIcon = <ActionFlightTakeoff />;
const meIcon = <AccountCircle />;

class BottomNav extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Play"
            icon={playIcon}
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="Leaderboard"
            icon={leaderboardIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="Me"
            icon={meIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;