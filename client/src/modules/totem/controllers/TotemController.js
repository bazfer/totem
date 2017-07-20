import { connect } from 'react-redux'
import { } from '../actions'
import TotemStack from '../components/totem_stack'

const mapStateToProps = (state) => {
  return({
    totem: state.menu.totem
  })
}
  
const TotemController = connect(mapStateToProps)(TotemStack)

export default TotemController