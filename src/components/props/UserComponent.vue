<template>
    <div>
        <h2>Users Table</h2>
        <table class="table">
            <thead>
            <tr class="text-center">
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <template v-for="(item, index) in data" :key="index">
                <tr v-if="item.role == 'user'">
                    <td>{{ item.name }}</td>
                    <td>{{ item.age }}</td>
                    <td><button @click="deleteUser(index)" class="btn btn-danger">Delete</button></td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserComponent',
    props: {
      data: Array
    },
    methods:{
        deleteUser(index){
            let dataCopy = [...this.data];
            dataCopy.splice(index , 1);
            this.$emit('user-updated' , dataCopy)
        }
    },
    computed: {
        filterUsersOnly() {
            if (!this.data) {
            return [];
            }
            return this.data.filter(item => item.role == 'user');
        }
    }
  }
  </script>