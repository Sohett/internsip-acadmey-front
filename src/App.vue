<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/learning-trajectories">Learning Trajectories</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #141f50;
}
#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #141f50;
}

#nav a.router-link-exact-active {
  color: #f5d71d;
}
</style>
