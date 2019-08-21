import { types } from './index'

const defaultState = {
  focused: false
}

const reducers = (state=defaultState, actions)=>{
  // if(actions.type==='input_focus') {
  //   return {
  //     focused: true
  //   }
  // }
  const newSate = JSON.parse(JSON.stringify(state))
  
  if(actions.type===types.INPUT_FOCUS) {
    newSate.focused = true
    return newSate
  }
  if(actions.type===types.INPUT_BLUR) {
    // console.log(newSate)
    newSate.focused = false
    return newSate
  }
  // console.log('inReucers')
  return newSate
}

export default reducers