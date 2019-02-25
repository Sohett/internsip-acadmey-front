<template>
  <div>
    <p>Plan: Free plan up to 50 users</p>
    <p>Users: 18</p>
    <p>Admin: Thomas Sohet</p>
    <p>Contact us: jean-claude.dus@gmail.test</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getPreferences']),
      organization() {
        return this.getPreferences
      }
    }
  }
</script>
