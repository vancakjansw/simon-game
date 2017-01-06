import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'
import {NAVIGATOR} from './../../actions'
import CubesLogo from './../cubes-logo'
import {Actions} from 'react-native-router-flux'
import GLOBALS from './../../globals'

class HomeView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <CubesLogo />
        </View>
        <Text style={styles.welcome}>
          Simon`'`s Game
        </Text>
        <Button
          onPress={Actions.GameView}
          title="Back to Game"
          color={GLOBALS.commonColors.menuTitle}
        />
        <Button
          onPress={Actions.ScoreboardViewConnected}
          title="Score Board"
          color={GLOBALS.commonColors.menuTitle}
        />
        <Button
          onPress={Actions.CredentialsView}
          title="Credentials"
          color={GLOBALS.commonColors.menuTitle}
        />
      </View>
    )
  }
}

export default HomeView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLogo: {
    height: 100,
    marginBottom: 25,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 40,
    fontFamily: 'Orbitron',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
