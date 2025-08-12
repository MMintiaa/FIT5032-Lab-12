<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">🗄️ W5.Library Registration Form</h1>
        <form @submit.prevent="submitForm">
          <div class="row mb-3">
            <div class="col-sm-6">
              <label for="username" class="form-label">Username:</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>

            <div class="col-sm-6">
              <label for="gender" class="form-label">Gender</label>
              <select
                class="form-select"
                id="gender"
                @change="validateGender"
                v-model="formData.gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-6">
              <label for="password" class="form-label">Password:</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>

            <div class="col-sm-6">
              <label for="confirm-password" class="form-label">Confirm password:</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                @blur="() => validateConfirmPassword(true)"
                @input="() => validateConfirmPassword(false)"
                v-model="formData.confirmPassword"
              />
              <div v-if="errors.confirmPassword" class="text-danger">
                {{ errors.confirmPassword }}
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-sm-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  @change="validateAustralianResident"
                  v-model="formData.isAustralian"
                />
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
              </div>
              <div v-if="errors.isAustralian" class="text-danger">{{ errors.isAustralian }}</div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-12">
              <label for="reason" class="form-label">Reason for joining</label>
              <textarea
                class="form-control"
                id="reason"
                rows="3"
                @blur="() => validateReason(true)"
                @input="() => validateReason(false)"
                v-model="formData.reason"
              >
              </textarea>
              <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
              <div v-if="successMessages.reason" class="text-success">
                {{ successMessages.reason }}
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="suburb" class="form-label">Suburb</label>
            <input type="text" class="form-control" id="suburb" v-bind:value="formData.suburb" />
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!--  PrimeVue DataTable  -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <p class="text-left" style="font-size: 1.2rem; margin-bottom: 1rem">
          This is a Primevue Datatable.
        </p>
        <DataTable
          :value="submittedCards"
          :paginator="true"
          :rows="5"
          :rowsPerPageOptions="[5, 10, 20]"
          tableStyle="min-width: 50rem"
        >
          <Column field="username" header="Username"> </Column>

          <Column field="password" header="Password"> </Column>
          <template #body="slotProps">
            <span class="text-muted">•••••••••</span>
          </template>

          <Column field="isAustralian" header="Australian Resident">
            <template #body="slotProps">
              {{ slotProps.data.isAustralian ? 'true' : 'false' }}
            </template>
          </Column>

          <Column field="gender" header="Gender">
            <template #body="slotProps">
              <span style="text-transform: capitalize">{{ slotProps.data.gender }}</span>
            </template>
          </Column>

          <Column field="reason" header="Reason">
            <template #body="slotProps">
              <span :title="slotProps.data.reason">
                {{
                  slotProps.data.reason.length > 50
                    ? slotProps.data.reason.substring(0, 50) + '...'
                    : slotProps.data.reason
                }}
              </span>
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup>
// Our logic will go here
import { ref } from 'vue'
// PrimeVue component import
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: false,
  reason: '',
  gender: '',
  suburb: 'Clayton',
})

const submittedCards = ref([])

const errors = ref({
  username: null,
  password: null,
  confirmPassword: null,
  isAustralian: null,
  gender: null,
  reason: null,
})

const successMessages = ref({
  reason: null,
})

const submitForm = () => {
  validateName(true)
  validatePassword(true)
  validateConfirmPassword(true)
  validateReason(true)
  validateAustralianResident()
  validateGender()
  if (
    !errors.value.username &&
    !errors.value.password &&
    !errors.value.confirmPassword &&
    !errors.value.reason &&
    !errors.value.isAustralian &&
    !errors.value.gender
  ) {
    submittedCards.value.push({ ...formData.value })
    clearForm()
  }
}

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
    confirmPassword: '',
    isAustralian: false,
    reason: '',
    gender: '',
  }

  errors.value = {
    username: null,
    password: null,
    confirmPassword: null,
    isAustralian: null,
    gender: null,
    reason: null,
  }

  successMessages.value = {
    reason: null,
  }
}

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Name must be at least 3 characters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters long.`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter.'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter.'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number.'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character.'
  } else {
    errors.value.password = null
  }
}

const validateConfirmPassword = (blur) => {
  const confirmPassword = formData.value.confirmPassword
  const password = formData.value.password

  if (confirmPassword.length === 0) {
    if (blur) errors.value.confirmPassword = 'Please confirm your password.'
  } else if (confirmPassword !== password) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match.'
  } else {
    errors.value.confirmPassword = null
  }
}

const validateAustralianResident = () => {
  if (!formData.value.isAustralian) {
    errors.value.isAustralian = 'Please confirm your residency status.'
  } else {
    errors.value.isAustralian = null
  }
}

const validateGender = () => {
  if (!formData.value.gender || formData.value.gender === '') {
    errors.value.gender = 'Please select your gender.'
  } else {
    errors.value.gender = null
  }
}

const validateReason = (blur) => {
  const reason = formData.value.reason.trim()

  errors.value.reason = null
  successMessages.value.reason = null

  if (reason.length === 0) {
    if (blur) errors.value.reason = 'Reason for joining is required.'
  } else if (reason.length < 10) {
    if (blur) errors.value.reason = 'Reason for joining must be at least 10 characters.'
  } else if (reason.length > 100) {
    if (blur) errors.value.reason = 'Reason for joining must be less than 100 characters.'
  } else {
    if (reason.toLowerCase().includes('friend')) {
      successMessages.value.reason = 'Great to have a friend'
    }
  }
}
</script>

<style scoped>
/* Our logic will go here 
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}
.list-group-item {
  padding: 10px;
}*/
</style>
