import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import performLogin from './loginActions'
const mapStateToProps = (state, ownProps) => {
  return {
    error:state.login.error,
    token:state.login.token
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    doLogin: (obj) => {
      dispatch(performLogin(obj));
    }
  }
}
const loginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
export default loginPageContainer