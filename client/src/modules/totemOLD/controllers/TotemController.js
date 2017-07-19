import { connect } from 'react-redux';
import { addBlock } from '../actions';
import TotemStack from '../components/totem_stack';

const mapStateToProps = (state) => {
  return ({
    // need to map over array to reverse it
    totem: state.app.totems
  })
}

const mapDispatchToProps = {
  onBlockClick: addBlock
}

const TotemController = connect(mapStateToProps, mapDispatchToProps)(TotemStack);

export default TotemController