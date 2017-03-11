module.exports = {

  getToken() {

    const varToken = {
      token: Math
        .random()
        .toString(36)
        .substring(7)
    }

    localStorage.token = varToken.token
    return localStorage.token
  },

  logout() {
    delete localStorage.token
    console.log("Dibuang!");
    console.log(localStorage.token);
  },

  checkToken() {
    console.log(localStorage.token);
  },

  loggedIn() {
    return !localStorage.token
  }

  // loggedIn() {   return !!localStorage.token },

}
