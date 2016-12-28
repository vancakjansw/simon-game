import { connect } from 'react-redux'
import { changeView } from '../../actions'
import CredentialsView from './credentials-view'

const CredentialsViewConnected = connect()(CredentialsView)

export default CredentialsViewConnected
