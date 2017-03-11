
module.exports = {
  login(email, pass, cb) {
    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token
        if (cb) cb(true)
        this.onChange(true)
      } else {
        if (cb) cb(false)
        
      }
    })
  },

  getToken() {
    return localStorage.token
  },

  logout(cb) {
    delete localStorage.token
    
  
  },

  loggedIn() {
    return !!localStorage.token
  },

 
}








function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'password1') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7)
      })
    } else {
      cb({ authenticated: false })
    }
  }, 0)
}
