<template lang="pug">
  #app
    div(v-if="displayLoginPage")
      el-container.full-height
        Login
    div(v-else)
      AppMenu#nav
      el-main(style="padding:50px;")
        router-view
      AppFooter
</template>

<script>
  import { isLoggedIn } from '@/services/auth'

  import AppMenu from './components/AppMenu'
  import AppFooter from './components/AppFooter'
  import Login from '@/components/Login'

  export default {
  name: 'app',
  components: {
    AppMenu,
    AppFooter,
    Login
  },
  computed: {
    displayLoginPage () {
      return (this.$route.name !== 'Callback' && !isLoggedIn())
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #141f50;
}
#nav {
  padding: 15px;
  border-bottom: 1px solid #141e50;
  background-color: #f5f4f6;
}

#nav a {
  font-weight: bold;
  color: #141f50;
}

#nav a.router-link-exact-active {
  color: #f5d71d;
}

.full-height {
  height: 100vh;
}

body{
  margin: 0;
}
</style>
