import { connect } from 'react-redux'

import { AddBlock } from '../../menu/actions'

import AddBlockButton from '../components/add_block_button'

const mapDispatchToProps = {
  onAddBlockClick: AddBlock
}

const AddBlockController = connect(
  null, 
  mapDispatchToProps
)(AddBlockButton)

export default AddBlockController