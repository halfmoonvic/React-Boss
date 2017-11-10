const ADD_GUN = '加机关枪'
const REMOGE_GUN = '减机关枪'

// reducer
export function counter(state=0, action) {
  switch(action.type) {
    case ADD_GUN:
      return state + 1
    case REMOGE_GUN:
      return state - 1
    default:
      return 10
  }
}

// action creator
export function addGun() {
  return {type: ADD_GUN}
}
export function removeGun() {
  return {type: REMOGE_GUN}
}

// 此为 reducer 函数
export const calc = function(state=0, action) {
  const { type } = action;
  switch (type) {
    case 'add':
      return state + 1
    case 'jian':
      return state - 1
    default:
      return 0
  }
}

export const ADD = function(val) {
  return {
    type: 'add'
  }
}

export const JIAN = function (val) {
  return {
    type: 'jian'
  }
}
