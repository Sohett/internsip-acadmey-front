<template>
  <el-menu>
    <router-link to="/" class="center"><img src="../assets/favicon.png" class="left" alt="logo"></router-link>
    <router-link to="/" class="center">Home</router-link>
    <span v-if="isAdmin"> | </span>
    <router-link v-if="isAdmin" to="/admin" class="center">Admin</router-link>
    <el-button class="right" type="text" @click="handleLogout">Logout</el-button>
  </el-menu>
</template>

<script>
  import { logout } from '@/services/auth'
  import store from '@/store';

  export default {
    data() {
      return {
        isAdmin: store.state.isAdmin
      }
    },
    methods: {
      handleLogout () {
        logout()
      }
    }
  }
</script>

<style scoped>
  .right{
    float: right;
  }

  .center{
    float: center;
  }

  .left {
    float: left;
  }

  img{
    height: 20px;
    width: 20px;
  }
</style>
