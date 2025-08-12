<template>
  <div class="login-container">
    <div class="login-form">
      <h2>User Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Please enter username"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Please enter password"
          />
        </div>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
        <button type="submit" :disabled="!username || !password">Login</button>
      </form>
      <div class="login-hint">
        <p>Hint: Username: admin, Password: 123456</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'LoginView',
  setup() {
    const username = ref('')
    const password = ref('')
    const errorMessage = ref('')
    const router = useRouter()

    // Hard-coded user credentials
    const VALID_USERNAME = 'admin'
    const VALID_PASSWORD = '123456'

    const handleLogin = () => {
      if (username.value === VALID_USERNAME && password.value === VALID_PASSWORD) {
        // Login successful, set authentication status
        localStorage.setItem('isAuthenticated', 'true')
        localStorage.setItem('username', username.value)

        // Redirect to home page or previously attempted page
        const redirectPath = router.currentRoute.value.query.redirect || '/'
        router.push(redirectPath)
      } else {
        // Login failed
        errorMessage.value = 'Incorrect username or password'
        setTimeout(() => {
          errorMessage.value = ''
        }, 3000)
      }
    }

    return {
      username,
      password,
      errorMessage,
      handleLogin,
    }
  },
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
}

.login-form {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: #007bff;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.error-message {
  color: #dc3545;
  text-align: center;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
}

.login-hint {
  margin-top: 20px;
  text-align: center;
  color: #666;
  font-size: 14px;
}
</style>
