export const getLogin = state => state.login
export const getCurrentUser = state => getLogin(state).currentUser
