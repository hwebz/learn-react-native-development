const initialState = {
    title: '',
    idea: '',
    loading: false,
    message: '',
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'IDEA_INPUT_CHANGE':
            return {
                ...state, 
                [action.payload.field]: action.payload.value
            }
        case 'IDEA_LOADING':
            return {
                ...state,
                loading: true,
                message: ''
            }
        case 'CLEAR_IDEA_DATA':
            return {
                ...state,
                title: '',
                idea: '',
                message: ''
            }
        case 'NEW_IDEA':
            return {
                ...state,
                title: '',
                idea: '',
                loading: false,
                message: 'An idea has been added successfully!'
            }
        case 'IDEA_FAILURE':
            return {
                ...state,
                title: '',
                idea: '',
                loading: false,
                message: 'An error occurred when trying to add idea!'
            }
        case 'IDEA_UPDATED':
            return {
                ...state,
                loading: false,
                message: 'Idea has been updated!'
            }
        case 'IDEA_UPDATE_FAILURE': 
            return {
                ...state,
                loading: false,
                message: 'An error occurred when trying to update idea!'
            }
        case 'DELETING_IDEA':
            return  {
                ...state,
                loading: true,
                message: ''
            }
        case 'IDEA_DELETED':
            return {
                ...state,
                loading: false,
                message: 'Idea has been deleted!'
            }
        case 'IDEA_DELETE_FAILURE': 
            return {
                ...state,
                loading: false,
                message: 'An error occurred when trying to delete idea!'
            }
        default:
            return state;
    }
}