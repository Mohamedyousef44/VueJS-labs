<template>

    <div class="container d-flex flex-column justify-content-between align-items-center my-5" >
      <div class="row w-100 d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-6 d-flex flex-row justify-content-between align-items-center">
          <button id="form" class="btn btn-dark" @click="handleStatus">Form</button>
          <button id="user" class="btn btn-dark" @click="handleStatus">Users</button>
          <button id="admin" class="btn btn-dark" @click="handleStatus">Admins</button>
        </div>
      </div>

      <div class="row w-100 d-flex justify-content-center align-items-center mt-5">
        <form @submit.prevent="handleSubmit" class="col-12 col-md-6" v-if="status == 'form'">
          <div class="form-group w-100">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" v-model="form.name" class="form-control">
          </div>
          <div class="form-group">
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" v-model="form.age" class="form-control">
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" id="userradio" value="user" v-model="form.role">
            <label class="form-check-label" for="userradio">User</label>
          </div>
          <div class="form-check">
            <input type="radio" class="form-check-input" id="adminradio" value="admin" v-model="form.role">
            <label class="form-check-label" for="adminradio">Admin</label>
          </div>
          <button type="submit" class="btn btn-dark mt-5">Submit</button>
        </form>
        <div v-else-if="status == 'user'">
          <User :data="data" @user-updated="updateUserData"/>
        </div>

        <div v-else>
          <Admin :data="data" @admin-updated="updateAdminData" />
        </div>
      </div>
    </div>
    
  </template>
  
  <script>

  import User from './UserComponent.vue'
  import Admin from './AdminComponent.vue'


  export default {
    name: 'FormComponent',
    components: {
      User,
      Admin,
    },
    data() {
      return {
        form: {
          name: '',
          age: null,
          role: '',
        },
        status: 'form',
        data: []
      }
    },
    methods: {
      handleSubmit() {
        this.data.push(this.form);
        this.form = {
          name: '',
          age: null,
          role: '',
        }
      },
      handleStatus(e){
        this.status = e.target.id
      },
      updateUserData(updatedData){
        this.data = updatedData
      },
      updateAdminData(updatedData){
        this.data = updatedData
      }

    }
  }
  </script>