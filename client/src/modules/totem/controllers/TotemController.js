import { connect } from 'react-redux'
import { } from '../actions'
import TotemStack from '../components/totem_stack'

const mapStateToProps = (state) => {
  // console.log((state.app.totems[state.app.active_totem]))
  return({
    totem: state.app.totem,
    // totem_title: state.app.totems[state.app.active_totem]
  })
}
  
const TotemController = connect(mapStateToProps)(TotemStack)

export default TotemController