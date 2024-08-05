<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" v-model="form.name" />
        <span v-if="errors.name">{{ errors.name }}</span>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="form.email" />
        <span v-if="errors.email">{{ errors.email }}</span>
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="form.password" />
        <span v-if="errors.password">{{ errors.password }}</span>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  password: ''
});

const errors = ref({
  name: '',
  email: '',
  password: ''
});

const validateForm = () => {
  errors.value = {
    name: '',
    email: '',
    password: ''
  };

  let isValid = true;

  if (!form.value.name) {
    errors.value.name = 'Name is required.';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!form.value.email) {
    errors.value.email = 'Email is required.';
    isValid = false;
  } else if (!emailPattern.test(form.value.email)) {
    errors.value.email = 'Please enter a valid email.';
    isValid = false;
  }

  if (!form.value.password) {
    errors.value.password = 'Password is required.';
    isValid = false;
  } else if (form.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters long.';
    isValid = false;
  }

  return isValid;
};

const submitForm = () => {
  if (validateForm()) {
    alert('Form submitted successfully!');
  }
};
</script>

<style scoped>
/* A little bit of styling to make it look good */
.form-container {
  max-width: 400px;
  margin-bottom: 2em;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.form-group span {
  color: red;
  font-size: 0.9em;
}
</style>