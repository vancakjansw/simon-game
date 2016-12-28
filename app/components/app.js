import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import { NAVIGATOR } from '../actions'
import HomeViewConnected from './view/home-view-connected'
import GameViewConnected from './view/game-view-connected'
import CredentialsViewConnected from './view/credentials-view-connected'
import ScoreboardViewConnected from './view/scoreboard-view-connected'
import {Scene, Router} from 'react-native-router-flux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} initial={true}>
          <Scene key="HomeView" component={HomeViewConnected}  />
          <Scene key="GameView" component={GameViewConnected}  />
          <Scene key="CredentialsView" component={CredentialsViewConnected} hideNavBar={false} />
          <Scene key="ScoreboardViewConnected" component={ScoreboardViewConnected} hideNavBar={false} />
        </Scene>
      </Router>
    )
  }
}

export default App
