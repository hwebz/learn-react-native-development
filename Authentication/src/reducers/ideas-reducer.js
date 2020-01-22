const initialState = {
    ideas: [],
    loading: false,
    message: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_IDEAS':
            return {
                ...state,
                ideas: action.payload,
                loading: false,
                message: ''
            }
        case 'IDEAS_LOADING':
            return {
                ...state,
                loading: true,
                message: 'Idea loading...'
            }
        default:
            return state
    }
}