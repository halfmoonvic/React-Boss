// import { createStore } from './mini-redux.js'

const SET_ADD = 'SET_ADD'
const SET_REMOVE = 'SET_REMOVE'

// reducer
export function counter(state = 10, action) {
  const { type, payload } = action
  console.log(type)
  switch (type) {
    case SET_ADD:
      return state + payload
    case SET_REMOVE:
      return state - payload
    default:
      return 10
  }
}

// action-creator
export function setAdd(val) {
  return { type: SET_ADD, payload: val }
}

export function setRemove(val) {
  return { type: SET_REMOVE, payload: val }
}

// async-action-creator
export function getAdd(val) {
  return dispatch => {
    setTimeout(() => {
      dispatch(setAdd(val))
    }, 1000)
  }
}

export function getRemove(val) {
  return dispatch => {
    setTimeout(() => {
      dispatch(setRemove(val))
    }, 1000)
  }
}

// array-creator
export function arrAdd(val) {
  return [setAdd(1), setAdd(1), getAdd(1)]
}

// // 创建实例
// const store = createStore(counter)
// const init = store.getState()
// console.log(`初始化: ${init}`)

// function listener() {
//   const current = store.getState()
//   console.log(`执行过程: ${current}`)
// }

// store.subscribe(listener)

// store.dispatch({type: 'SET_ADD', payload: 2})
// store.dispatch({type: 'SET_ADD', payload: 2})
// store.dispatch({type: 'SET_REMOVE', payload: 2})
// store.dispatch({type: 'SET_REMOVE', payload: 2})
// store.dispatch({type: 'SET_REMOVE', payload: 2})
