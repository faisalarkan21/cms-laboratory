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
    console.log("Dicek!");
    console.log(localStorage.token);
  },

  loggedIn() {

    alert(localStorage.token);
    return localStorage.token;

  },

  masuk() {

    const varToken = {
      token: Math
        .random()
        .toString(36)
        .substring(7)

    }

    localStorage.token = varToken.token
    return localStorage.token

  }

}
