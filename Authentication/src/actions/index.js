import firebase from 'firebase';

export const authInputChange = (obj) => {
    return {
        type: 'AUTH_INPUT_CHANGE',
        payload: obj
    }
}

export const login = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: 'LOADING'})
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: user
            })
        })
        .catch(error => {
            dispatch({
                type: 'LOGIN_FAILURE'
            })
        })
    }
}

export const ideaInputChange = (obj) => {
    return {
        type: 'IDEA_INPUT_CHANGE',
        payload: obj
    }
}

export const createIdea = ({title, idea}) => {
    const { uid } = firebase.auth().currentUser;

    return (dispatch) => {
        dispatch({type: 'IDEA_LOADING'})
        firebase.database().ref(`/userIdeas/${uid}/ideas`)
        .push({title, idea})
        .then(() => dispatch({type: 'NEW_IDEA'}))
        .catch(() => dispatch({type: 'IDEA_FAILURE'}))
    }
}

export const getIdeas = () => {
    const { uid } = firebase.auth().currentUser;

    return (dispatch) => {
        dispatch({type: 'IDEAS_LOADING'})
        firebase.database().ref(`/userIdeas/${uid}/ideas`)
        .on('value', (snapshot) => {
            dispatch({type: 'GET_IDEAS', payload: snapshot.val()})
        });
    }
}

export const clearIdeaMessage = () => {
    return (dispatch) => {
        dispatch({type: 'CLEAR_IDEA_DATA'});
    }
}

export const updateIdea = ({title, idea, id}) => {
    const { uid } = firebase.auth().currentUser;

    return (dispatch) => {
        dispatch({type: 'IDEA_LOADING'})
        firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
        .set({title, idea})
        .then(() => dispatch({type: 'IDEA_UPDATED'}))
        .catch(() => dispatch({type: 'IDEA_UPDATE_FAILURE'}))
    }
}

export const deleteIdea = ({title, idea, id}) => {
    const { uid } = firebase.auth().currentUser;

    return (dispatch) => {
        dispatch({type: 'DELETING_IDEA'})
        firebase.database().ref(`/userIdeas/${uid}/ideas/${id}`)
        .remove()
        .then(() => dispatch({type: 'IDEA_DELETED'}))
        .catch(() => dispatch({type: 'IDEA_DELETE_FAILURE'}))
    }
}