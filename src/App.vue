<script setup>
//import JSON from './components/JSON.vue'
//import Form from './views/HomeView.vue'
//import BHeader from './components/BHeader.vue'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div class="main-container">
    <header>
      <NavigationBar />
    </header>
    <main class="main-box">
      <!-- <LibraryRegistrationForm /> -->
      <!-- <JSONLab /> -->
      <router-view> </router-view>
    </main>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
}

#app {
  min-height: 100vh;
}

/* Main container styles */
.main-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-box {
  flex: 1;
  padding: 20px 0;
}

/* Card styles */
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-bottom: 20px;
}

.card-header {
  background-color: #275fda;
  color: white;
  padding: 15px;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}

.card-body {
  padding: 20px;
}

.list-group-item {
  padding: 15px;
  border-bottom: 1px solid #e9ecef;
}

.list-group-item:last-child {
  border-bottom: none;
}

/* Form styles */
.form-label {
  font-weight: 500;
  color: #495057;
  margin-bottom: 8px;
}

.form-control,
.form-select {
  border-radius: 8px;
  border: 1px solid #dee2e6;
  padding: 10px 12px;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.form-control:focus,
.form-select:focus {
  border-color: #275fda;
  box-shadow: 0 0 0 0.2rem rgba(39, 95, 218, 0.25);
  outline: none;
}

.form-check-input:checked {
  background-color: #275fda;
  border-color: #275fda;
}

/* Button styles */
.btn {
  border-radius: 8px;
  font-weight: 500;
  padding: 10px 20px;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: #275fda;
  color: white;
}

.btn-primary:hover {
  background-color: #1e4bb8;
  transform: translateY(-1px);
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
  transform: translateY(-1px);
}

/* Text styles */
.text-danger {
  color: #dc3545 !important;
  font-size: 0.875rem;
  margin-top: 5px;
}

.text-success {
  color: #28a745 !important;
  font-size: 0.875rem;
  margin-top: 5px;
}

.text-center {
  text-align: center;
}

.text-muted {
  color: #6c757d !important;
}

/* Heading styles */
h1 {
  color: #2c3e50;
  font-weight: bold;
  margin-bottom: 20px;
}

h5 {
  color: #275fda;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* PrimeVue DataTable styles */
.p-datatable {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.p-datatable .p-datatable-header {
  background-color: white;
  color: #2c3e50;
  border: none;
}

.p-datatable .p-datatable-thead > tr > th {
  background-color: white;
  color: #2c3e50;
  border: none;
  padding: 15px;
  font-weight: 600;
}

.p-datatable .p-datatable-tbody > tr > td {
  padding: 12px 15px;
  border-bottom: 1px solid #e9ecef;
}

.p-datatable .p-datatable-tbody > tr:hover {
  background-color: #f8f9fa;
}

/* Container styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* Responsive design */
@media (max-width: 768px) {
  .main-box {
    padding: 10px 0;
  }

  .container {
    padding: 0 10px;
  }

  .btn {
    width: 100%;
    margin-bottom: 10px;
  }

  .btn.me-2 {
    margin-right: 0 !important;
  }

  .card-body {
    padding: 15px;
  }
}
</style>

<style scoped>
.fullpage-center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
