import {ADD_SEARCH_INPUT} from '../constants/action-types';
const initialState = {
    searchInput: []
  };
  
  function rootReducer(state = initialState, action) {
    if(action.type === ADD_SEARCH_INPUT){
      return Object.assign({},state,{
        articles: state.searchInput.concat(action.payload)
      });
    }
    return state;
  };
  
  export default rootReducer;
  