<template>
  <nav class="navbar">
    <div class="nav-container">
      <!-- Left side Logo and main navigation -->
      <div class="nav-left">
        <router-link to="/" class="nav-logo"> 📚 Library System </router-link>

        <div class="nav-links">
          <router-link to="/" class="nav-link">Home</router-link>
          <!-- Only logged-in users can see About page link -->
          <router-link v-if="userIsAuthenticated" to="/about" class="nav-link">
            About Us
          </router-link>
        </div>
      </div>

      <!-- Right side user info and login/logout -->
      <div class="nav-right">
        <!-- Logged-in state -->
        <div v-if="userIsAuthenticated" class="user-info">
          <span class="welcome-text"> Welcome, {{ currentUser }}! </span>
          <button @click="handleLogout" class="logout-btn">Logout</button>
        </div>

        <!-- Not logged-in state -->
        <div v-else class="auth-links">
          <router-link to="/login" class="login-link"> Login </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { isAuthenticated, getCurrentUser, logout } from '../utils/auth.js'

export default {
  name: 'NavigationBar',
  setup() {
    const router = useRouter()
    const userIsAuthenticated = ref(false)
    const currentUser = ref('')

    // Check authentication status
    const checkAuthStatus = () => {
      userIsAuthenticated.value = isAuthenticated()
      currentUser.value = getCurrentUser() || ''
    }

    // Handle logout
    const handleLogout = () => {
      logout()
      userIsAuthenticated.value = false
      currentUser.value = ''
      router.push('/')
    }

    // Listen to route changes, update authentication status
    router.afterEach(() => {
      checkAuthStatus()
    })

    // Check authentication status when component is mounted
    onMounted(() => {
      checkAuthStatus()
    })

    return {
      userIsAuthenticated,
      currentUser,
      handleLogout,
    }
  },
}
</script>

<style scoped>
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 60px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-logo:hover {
  color: #3498db;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #34495e;
}

.nav-link.router-link-active {
  background-color: #3498db;
}

.nav-right {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.welcome-text {
  font-size: 0.9rem;
  color: #ecf0f1;
}

.logout-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #c0392b;
}

.auth-links {
  display: flex;
  gap: 15px;
}

.login-link {
  color: white;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #3498db;
  border-radius: 4px;
  transition: all 0.3s;
}

.login-link:hover {
  background-color: #3498db;
  color: white;
}

/* Responsive design */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 15px;
  }

  .nav-left {
    gap: 15px;
  }

  .nav-links {
    gap: 10px;
  }

  .nav-link {
    padding: 6px 12px;
    font-size: 0.9rem;
  }

  .welcome-text {
    font-size: 0.8rem;
  }

  .logout-btn {
    padding: 6px 12px;
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .nav-left {
    gap: 10px;
  }

  .nav-logo {
    font-size: 1.2rem;
  }

  .nav-links {
    display: none;
  }

  .welcome-text {
    display: none;
  }
}
</style>
