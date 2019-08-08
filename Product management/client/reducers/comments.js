function postComments(state = [], action) {
  switch(action.type){
    case 'EDIT_PRODUCT':
      return [
        {...state[0], Desc: action.Desc, Price: action.Price}
      ]
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;
