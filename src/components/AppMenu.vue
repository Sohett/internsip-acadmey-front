<template>
  <el-menu>
    <router-link to="/" class="center"><img src="../assets/favicon.png" class="left" alt="logo"></router-link>
    <router-link to="/" class="center">Home</router-link> |
    <router-link to="/admin" class="center">Admin</router-link>
    <el-button class="right" type="text" @click="handleLogout">Logout</el-button>
  </el-menu>
</template>

<script>
  import { logout } from '@/services/auth'

  export default {
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
