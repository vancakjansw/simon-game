import { connect } from 'react-redux'
import { setScoreA } from './../../actions'
import Cubes from './cubes'

const mapDispatchToProps = (dispatch) => {
  return {
    setScore: (score) => {
      dispatch(setScoreA(score))
    }
  }
}

const CubesConnected = connect(
  null,
  mapDispatchToProps,
)(Cubes)

export default CubesConnected
