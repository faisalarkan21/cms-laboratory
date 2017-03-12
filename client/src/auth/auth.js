module.exports = {

  getTokenAdmin() {

    // const varToken = {   token: Math     .random()     .toString(36)
    // .substring(7) }

    return localStorage.admin;
  },

  getTokenUser() {
    return localStorage.user;
  },

  logout() {
    delete localStorage.admin
    delete localStorage.user
    console.log("Dibuang!");
    console.log(localStorage.admin);
  },

  checkToken() {
    console.log("Dicek!");
    console.log(localStorage.admin);
    console.log(localStorage.user);
  },

  loggedInAdmin() {

    // alert(localStorage.admin);
    return localStorage.admin;

  },

  loggedInUser() {
    // alert(localStorage.user);
    // alert(localStorage.admin);
    return localStorage.user;

  },

  masukAdmin(token) {

    localStorage.admin = token
    // return localStorage.admin

  },
  masukUser(token) {

    localStorage.user = token
    // return localStorage.admin

  }

}
