import {
  StyleSheet,
} from 'react-native'
import GLOBALS from './../../globals'

export const styles = StyleSheet.create({
  infoCircleContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
    position: 'absolute',
    top: 235,
    left: 105,
  },
  infoCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'blue',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoCircleText: {
    fontSize: 36,
    color: '#fff',
    fontFamily: 'Orbitron',
  },
  controlContainer: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    height: 30,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  controlContainerInnerLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  controlContainerInnerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  controlContainerScore: {
    zIndex: 2,
    fontFamily: 'Orbitron',
  },
  controlContainerScoreButton: {
    color: '#841584',
    zIndex: 2,
    fontFamily: 'Orbitron',
  },
  cubesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cubesContainerTop: {
    flexDirection: 'row',
    flex: .5,
  },
  cubesContainerBottom: {
    flexDirection: 'row',
    flex: .5,
  },
  touchText: {
    opacity: 0,
    zIndex: -1,
    color: 'red',
    height: 0,
  },
  touchTextActive: {
    opacity: 1,
    zIndex: 1,
    height: 20,
    fontSize: 20,
    color: 'black',
  },
  blueCube: {
    flex: .5,
    backgroundColor: GLOBALS.cubeColors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRightWidth: 6,
    borderBottomWidth: 6,
    borderColor: 'white',
  },
  redCube: {
    flex: .5,
    backgroundColor: GLOBALS.cubeColors.red,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderBottomWidth: 6,
    borderColor: 'white',
  },
  greenCube: {
    flex: .5,
    backgroundColor: GLOBALS.cubeColors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderRightWidth: 6,
    borderTopWidth: 6,
    borderColor: 'white',
  },
  yellowCube: {
    flex: .5,
    backgroundColor: GLOBALS.cubeColors.yellow,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderTopWidth: 6,
    borderColor: 'white',
  },
})
