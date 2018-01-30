export const getLogin = state => state.login
export const getCurrentUser = state => getLogin(state).currentUser
export const getcheckedStoredToken = state => getLogin(state).checkedStoredToken
