// Authentication utility functions
// Check if user is logged in
export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true'
}

// Get current username
export const getCurrentUser = () => {
  return localStorage.getItem('username')
}

// Log out user
export const logout = () => {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('username')
}

// Set user login status
export const setAuthStatus = (status, username = null) => {
  if (status) {
    localStorage.setItem('isAuthenticated', 'true')
    if (username) {
      localStorage.setItem('username', username)
    }
  } else {
    logout()
  }
}
