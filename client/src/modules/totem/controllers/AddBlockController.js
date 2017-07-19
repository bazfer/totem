import { connect } from 'react-redux'

import { addBlock } from '../actions'

import AddBlock from '../components/add_block'

const mapStateToProps = (state) => {
  
}

const mapStateToProps = {

}

const AddBlockController = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddBlock)

export default AddBlockController