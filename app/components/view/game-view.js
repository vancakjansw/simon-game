import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
} from 'react-native'
import {Actions} from 'react-native-router-flux'
import CubesConnected from './../cubes/cubes-connected.js'

class GameView extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <CubesConnected />
      </View>
    )
  }
}

export default GameView

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
