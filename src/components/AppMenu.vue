<template>
  <el-menu>
    <img src="../assets/favicon.png" class="left" alt="logo">
    <router-link to="/" class="center">Home</router-link> |
    <router-link to="/learning-trajectories" class="center">Learning Trajectories</router-link>
    <router-link to="#" class="right">{{ logoutin }}</router-link>
  </el-menu>
</template>

<script>
  export default {
    computed: {
      logoutin() {
        return "Log in";
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
