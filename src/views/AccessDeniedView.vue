<template>
  <div class="access-denied-container">
    <div class="access-denied-content">
      <div class="icon">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
            fill="#dc3545"
          />
        </svg>
      </div>
      <h1>Access Denied</h1>
      <p>You need to log in to access this page.</p>
      <div class="action-buttons">
        <button @click="goToLogin" class="login-btn">Go to Login</button>
        <button @click="goToHome" class="home-btn">Return to Home</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'AccessDeniedView',
  setup() {
    const router = useRouter()

    const goToLogin = () => {
      router.push('/login')
    }

    const goToHome = () => {
      router.push('/')
    }

    return {
      goToLogin,
      goToHome,
    }
  },
}
</script>

<style scoped>
.access-denied-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  padding: 20px;
}

.access-denied-content {
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
}

.icon {
  margin-bottom: 20px;
}

h1 {
  color: #dc3545;
  margin-bottom: 15px;
  font-size: 2rem;
}

p {
  color: #666;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.login-btn,
.home-btn {
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  display: inline-block;
}

.login-btn {
  background-color: #007bff;
  color: white;
}

.login-btn:hover {
  background-color: #0056b3;
}

.home-btn {
  background-color: #6c757d;
  color: white;
}

.home-btn:hover {
  background-color: #545b62;
}

@media (max-width: 480px) {
  .action-buttons {
    flex-direction: column;
  }

  .login-btn,
  .home-btn {
    width: 100%;
  }
}
</style>
