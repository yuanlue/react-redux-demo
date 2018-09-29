const themeReducer = (state, action) => {
     state = {
        themeColor:"yellow",
        name:"yuanlue"
    }
    switch (action.type) {
      case 'CHANGE_COLOR':
        return { ...state, themeColor: action.themeColor }
      case 'MODIFY_NAME':
        return {...state,name:action.name}
      default:
        return state
    }
}
export default themeReducer