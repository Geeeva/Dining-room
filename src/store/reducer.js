const initialState = {
    lastPage: '',
    currentPage: 1,
    bottomValue: 1,
    topValue: 10
};

const reducer = (state = initialState, action) => {
    
    switch(action.type) {
        
        case "SET_INITIAL_PAGE":
        return {
            ...state,
            currentPage: 1
        }

        case "SET_MAX_PAGES":{
        return {
            ...state,
            lastPage: action.maxPages
        }}

        case "SET_FIRST_PAGE":{
        return {
            ...state,
            currentPage: 1
        }}
       
        case "NEXT_PAGE":{
        if(state.currentPage === state.lastPage){
            return {
                ...state,
                currentPage: state.lastPage,
            }
        } else if(state.currentPage < state.lastPage){
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        }} break;

        case "PREVIOUS_PAGE":{
        if(state.currentPage <= 1){
            return {
                ...state,
                currentPage: 1,
            }
        } else if(state.currentPage >= 2){
            return {
                ...state,
                currentPage: state.currentPage - 1,
            }
        }} break;

        case "SET_LAST_PAGE":
        return {
            ...state,
            currentPage: state.lastPage
        }

        case "BOTTOM_CHANGED":
        return {
            ...state,
            bottomValue: action.value
        }

        case "TOP_CHANGED":
        return {
            ...state,
            topValue: action.value
        }
        default:
        return state;
    }
};

export default reducer;