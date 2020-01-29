import { connect } from 'react-redux'
import LoginPage from './LoginPage'
import performLogin from './loginActions'
import { withRouter } from 'react-router-dom'
const mapStateToProps = (state, ownProps) => {
  debugger;
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
const loginPageContainer =  withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage))
export default loginPageContainer