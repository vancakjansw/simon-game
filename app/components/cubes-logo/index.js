import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Animated,
} from 'react-native'
import {getRandomInt} from './../../utils/index.js'
import GLOBALS from './../../globals'

class CubesLogo extends Component {
  constructor() {
    super()

    this.animations = [
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1),
    ]
  }

  componentDidMount() {
    this.startAnimationSequence()
  }

  startAnimationSequence() {
    let cube = this.animations[getRandomInt(3)]

    this.animateLogo(cube)
  }

  animateLogo(cube: Object) {
    Animated.sequence([
      Animated.timing(
        cube,
        {
          toValue: 0,
          duration: 250,
        }
      ),
      Animated.delay(80),
      Animated.timing(
        cube,
        {
          toValue: 1,
          duration: 250,
        }
      ),
      Animated.delay(300),
    ]).start(() => this.startAnimationSequence())
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <Animated.View style={[styles.blueCube, {opacity: this.animations[0]}]} />
          <Animated.View style={[styles.redCube, {opacity: this.animations[1]}]} />
        </View>
        <View style={styles.containerInner}>
          <Animated.View style={[styles.greenCube, {opacity: this.animations[2]}]} />
          <Animated.View style={[styles.yellowCube, {opacity: this.animations[3]}]} />
        </View>
      </View>
    )
  }
}

export default CubesLogo

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerInner: {
    flexDirection: 'row',
    flex: .5,
  },
  blueCube: {
    backgroundColor: GLOBALS.cubeColors.blue,
    width: 50,
    height: 50,
  },
  redCube: {
    backgroundColor: GLOBALS.cubeColors.red,
    width: 50,
    height: 50,
  },
  greenCube: {
    backgroundColor: GLOBALS.cubeColors.green,
    width: 50,
    height: 50,
  },
  yellowCube: {
    backgroundColor: GLOBALS.cubeColors.yellow,
    width: 50,
    height: 50,
  },
})
