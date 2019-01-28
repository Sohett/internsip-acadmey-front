<template>
  <el-form :inline="true" :model="school" class="demo-form-inline left">
    <el-form-item label="School">
      <el-input v-model="school.name" placeholder="Name of the school"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create the school</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        school: {
          name: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message({
          message: `Congrats, the School ${this.school.name} was successfuly created.`,
          type: 'success'
        });
      }
    }
  }
</script>

<style>
  .left{
    text-align: left;
  }
</style>
