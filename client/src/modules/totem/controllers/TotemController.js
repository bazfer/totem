import { connect } from 'react-redux'
import { } from '../actions'
import TotemStack from '../components/totem_stack'

const mapStateToProps = (state) => {
  return({
    title: state.totem.title,
    blocks: state.totem.blocks,
    isRunning: state.totem.isRunning,
    stopwatch: state.totem.stopwatch
  })
}
  
const TotemController = connect(mapStateToProps)(TotemStack)

export default TotemController