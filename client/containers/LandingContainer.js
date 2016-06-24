import { connect } from 'react-redux'
import Landing from '../components/Landing'

const mapStateToProps = (state) => {
  return {
    currentTeamMemberId: state.currentTeamMemberId
  }
}

export default connect(mapStateToProps)(Landing)
