<template>
  <div>
    <br>
    <el-button v-if="isAdmin" size="small" style="margin-left: 10px; margin-bottom: 20px" @click="promptNewSchool" type="success" plain>Create New School <i class="el-icon-delete el-icon-right"></i></el-button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getAdmin']),
      isAdmin() {
        return this.getAdmin;
      },
    },
    methods: {
      promptNewSchool() {
        this.$prompt('Enter the name of your new School', 'Create a new School 📓', {
          confirmButtonText: 'Create',
          cancelButtonText: 'Cancel'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: `The new school ${value} was correctly created`
          });
        })
      }
    }
  }
</script>
