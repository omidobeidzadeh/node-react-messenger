import userActions from '../Actions/userActions'

const usersState = {
    success: null,
    message: null,
    isUserLoggedIn: false
}

const users = (state=usersState, action) => {
    let newState = state;
    switch(action.type) {
        case userActions.USER_REGISTER_SUCCESS:
            newState = {...usersState, ...action.payload}
            break
        case userActions.USER_REGISTER_FAILED:
            newState = { ...usersState, ...action.payload };
            break
        case userActions.USER_LOGIN_SUCCESS:
            newState = { ...usersState, ...action.payload, isUserLoggedIn: true };
            break
        case userActions.USER_LOGIN_FAILED:
            newState = { ...usersState, ...action.payload };
            break
        default:
            newState = state;
            break
    }
    return newState
}

export default users;