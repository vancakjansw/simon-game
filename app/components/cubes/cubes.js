import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Alert,
  Animated,
} from 'react-native'
import {styles} from './cubes-styles.js'
import {Actions} from 'react-native-router-flux'
import {getRandomArrayOfNum} from './../../utils/index.js'

class Cubes extends Component {
  constructor(props) {
    super(props)
    this.runGameCycle = this.runGameCycle.bind(this)

    this.animations = {
      startButton: new Animated.Value(1.05),
      blueCube: new Animated.Value(1),
      redCube: new Animated.Value(1),
      yellowCube: new Animated.Value(1),
      greenCube: new Animated.Value(1),
    }

    this.gameData = {
      gameNumCheck: 0,
      gameScore: 0,
      gameCycle: 0,
    }

    this.INFO_STATE = {
      start: 'Start',
      repeat: 'Repeat',
      watch: 'Watch',
    }

    this.GAME_STATE = {
      start: 'start',
      stop: 'stop',
      playing: 'playing'
    }

    this.CUBES_ORDER = [
      'blueCube',
      'redCube',
      'greenCube',
      'yellowCube',
    ]

    this.state = {
      gameFields: [],
      gameState: this.GAME_STATE.stop,
      infoCircle: this.INFO_STATE.start,
    }
  }

  animateStartButton() {
    this.animations.startButton.setValue(1.05) // fix repeating press

    Animated.spring(
      this.animations.startButton,
      {
        toValue: 1,
        friction: .6,
      }
    ).start()
  }

  animateCube(cubeIndex: number) {
    Animated.sequence([
      Animated.timing(
        this.animations[cubeIndex],
        {
          toValue: 0,
          duration: 250,
        }
      ),
      Animated.delay(80),
      Animated.timing(
        this.animations[cubeIndex],
        {
          toValue: 1,
          duration: 250,
        }
      ),
    ]).start()
  }

  resetGame() {
    Alert.alert('Game Over')
    this.props.setScore(this.gameData.gameScore)
    this.gameData.gameScore = 0
    this.gameData.gameNumCheck = 0
    this.gameData.gameCycle = 0

    this.setState({
      gameState: this.GAME_STATE.stop,
      gameFields: [],
      infoCircle: this.INFO_STATE.start,
    })
  }

  onCubeClick(index: string) {
    if (this.state.gameState !== this.GAME_STATE.playing) return

    let checkArray = this.state.gameFields[this.gameData.gameScore]
    let numToCheck = checkArray[this.gameData.gameCycle]

    this.animateCube(index)
    if (numToCheck === index) {
      this.gameData.gameCycle++
      if (this.gameData.gameCycle === checkArray.length) {
        this.setState({
          gameCycle: 0,
        })
        this.gameData.gameCycle = 0
        this.gameData.gameScore += 1
        setTimeout(this.runGameCycle, 1200)
      }
    } else {
      this.resetGame()
    }
  }

  runGame() {
    if (this.state.gameState === this.GAME_STATE.stop) {
      this.runGameCycle()
    } else {
      this.animateStartButton()
    }
  }

  getCubesToCheck(): Array {
    let cubes = []
    let random = getRandomArrayOfNum(this.gameData.gameScore + 1)
    random.forEach((num) => {
      cubes.push(this.CUBES_ORDER[num])
    })
    return cubes
  }

  runGameCycle() {
    this.animateStartButton()
    let cubesToCheck = this.getCubesToCheck()
    let actualGameFields = this.state.gameFields // workaround

    actualGameFields.push(cubesToCheck)
    this.setState({
      gameFields: actualGameFields,
      gameState: this.GAME_STATE.playing,
      infoCircle: this.INFO_STATE.watch,
    })

    let i = 0
    let nextBlick = () => {
      let promise = new Promise((resolve, reject) => {
        this.animateCube(cubesToCheck[i])
        setTimeout(resolve, 800)
      })

      promise.then(() => {
        i++
        if (i < this.state.gameFields.length) {
          setTimeout(nextBlick, 500)
        } else {
          this.animateStartButton()
          this.setState({
            infoCircle: this.INFO_STATE.repeat,
          })
        }
      })
    }
    nextBlick()
  }

  render() {
    return (
      <View style={styles.cubesContainer}>
        <View style={styles.infoCircleContainer}>
          <TouchableWithoutFeedback onPress={() => this.runGame()}>
            <Animated.View style={[styles.infoCircle, {transform: [{scale: this.animations.startButton}]}]}>
              <Text style={styles.infoCircleText}>{this.state.infoCircle}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.cubesContainerTop}>
          <TouchableWithoutFeedback style={styles.blueCube} onPress={() => this.onCubeClick(this.CUBES_ORDER[0])}>
            <Animated.View style={[styles.blueCube, {opacity: this.animations.blueCube}]}>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.redCube} onPress={() => this.onCubeClick(this.CUBES_ORDER[1])}>
            <Animated.View style={[styles.redCube, {opacity: this.animations.redCube}]}>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.cubesContainerBottom}>
          <TouchableWithoutFeedback style={styles.greenCube} onPress={() => this.onCubeClick(this.CUBES_ORDER[2])}>
            <Animated.View style={[styles.greenCube, {opacity: this.animations.greenCube}]}>
            </Animated.View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.yellowCube} onPress={() => this.onCubeClick(this.CUBES_ORDER[3])}>
            <Animated.View style={[styles.yellowCube, {opacity: this.animations.yellowCube}]}>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.controlContainer}>
          <View style={styles.controlContainerInnerLeft}>
            <Text style={styles.controlContainerScore}>
              Score: {this.gameData.gameScore}
            </Text>
          </View>
          <View>
            <Text style={styles.controlContainerScore}>
              Simon`'`s game
            </Text>
          </View>
          <TouchableOpacity style={styles.controlContainerInnerRight} onPress={Actions.pop}>
            <Text style={styles.controlContainerScoreButton}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Cubes.propTypes = {
  setScore: React.PropTypes.func,
}

export default Cubes
