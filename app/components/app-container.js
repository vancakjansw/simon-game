import { connect } from 'react-redux'
import { changeView } from '../actions'
import App from './app'

const mapStateToProps = (state) => {
  return {
    routes: state.routes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onViewChange: (id) => {
      dispatch(changeView(id))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default ConnectedApp
