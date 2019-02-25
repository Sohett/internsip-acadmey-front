<template>
  <div>
    <p>Name: {{ organization.name }}</p>
    <p>Employees: {{ organization.numberOfEmployee }}</p>
    <p>Adresse : {{ organization.address }}</p>
    <p>Status Légal: {{ organization.legalStatus }}</p>
    <p>Ouverture du compte: {{ organization.createdAt }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getOrganization']),
      organization() {
        return this.getOrganization
      }
    }
  }
</script>
