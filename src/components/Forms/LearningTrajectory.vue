<template>
  <el-form :inline="true" :model="learningTrajectory" class="demo-form-inline left">
    <el-form-item label="School">
      <el-select v-model="learningTrajectory.school" placeholder="Choose the school">
        <el-option label="IT School" value="dataSchool1"></el-option>
        <el-option label="Business School" value="dataSchool2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Learning Trajectory">
      <el-input v-model="learningTrajectory.name" placeholder="Name of Learning Directory" style="with: 500px"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create the learning trajectory</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        learningTrajectory: {
          name: '',
          school: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message({
          message: `Congrats, the Learning Trajectory ${this.learningTrajectory.name} was successfuly created.`,
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
