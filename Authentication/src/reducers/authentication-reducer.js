const initialState = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'AUTH_INPUT_CHANGE':
            return {
                ...state, 
                [action.payload.field]: action.payload.value
            }
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_SUCCESS':
            console.log('logged in successfully!');
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: ''
            }
        case 'LOGIN_FAILURE':
            console.log('login failed!');
            return {
                ...state,
                error: 'Authentication Failed',
                loading: false
            }
        default:
            return state;
    }
}