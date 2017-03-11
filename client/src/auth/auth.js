module.exports = {

  getToken() {

    const varToken = {
      token: Math.random().toString(36).substring(7)
    }

    localStorage.token = varToken.token
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token

  }

  // loggedIn() {   return !!localStorage.token },

}
