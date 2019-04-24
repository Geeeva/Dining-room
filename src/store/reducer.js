const initialState = {
    currentPage: 1,
    maxPages: '',
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

        case "SET_FIRST_PAGE":{
            return {
                ...state,
                currentPage: 1
            }}

        case "SET_CURRENT_PAGE":{
        return {
            ...state,
            currentPage: parseInt(action.number)
        }}

        case "SET_LAST_PAGE":
        if(state.currentPage === 1){
            return {
                ...state, 
                currentPage: 0
            }
        } else {
            return {
            ...state,
            currentPage: parseInt(action.maxPages)
            }
        }

        case 'NEXT_PAGE':
        if(state.currentPage === action.maxPages){
            return {
                ...state, 
                currentPage: parseInt(action.maxPages)
            }
        } else {
            return {
                ...state,
                currentPage: parseInt(state.currentPage + 1)
            }
        }

        case "PREVIOUS_PAGE":
        if(state.currentPage <= 1){
            return {
                ...state,
                currentPage: 1,
            }
        } else {
            return {
                ...state,
                currentPage: parseInt(state.currentPage - 1),
            }
        }

        /*Changing filters values*/
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