import * as types from './actionTypes'
const inputFocus = ()=>{
  return {
    type: types.INPUT_FOCUS
  }
}

const inputBlur = () => {
  return {
    type: types.INPUT_BLUR
  }
}
const mouseEnter = () => {
  return {
    type: types.MOUSE_ENTER
  }
}

const mouseLeave = ()=>{
  return {
    type: types.MOUSE_LEAVE
  }
}
const changePage = (page) => ({
	type: types.CHANGE_PAGE,
	page
});
export {
  inputBlur,
  inputFocus,
  mouseEnter,
  mouseLeave,
  changePage
}