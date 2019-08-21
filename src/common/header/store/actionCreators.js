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

export {
  inputBlur,
  inputFocus
}