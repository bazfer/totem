import { connect } from 'react-redux'

import { AddBlock, StopBlock } from '../actions'

import AddBlockButton from '../components/add_block_button'

const mapStateToProps = (state) => {
  return ({
    isRunning: state.totem.isRunning
  })
}

const mapDispatchToProps = {
  onAddBlockClick: AddBlock,
  onStopBlockClick: StopBlock
}

const AddBlockController = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddBlockButton)

export default AddBlockController