import { connect } from 'react-redux'

import { changeActiveTotem, deleteTotem } from '../actions'

import MenuList from '../components/menu_list'

const mapStateToProps = (state) => {
  return ({
    // map over array of totems, extract title and pair it with an id key
    totems: state.menu.totems.map((totem, i) => { return { tag: totem.title, id: i }} ),
    activeTotem: state.menu.active_totem,
    userName: state.user.user_name
  })
}

const mapDispatchToProps = {
  onTotemClick: changeActiveTotem,
  onDeleteClick: deleteTotem
}

const MenuController = connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuList)

export default MenuController