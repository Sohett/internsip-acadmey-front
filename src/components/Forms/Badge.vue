<template>
  <el-form :inline="true" :model="badge" class="demo-form-inline left">
    <el-form-item label="School">
      <el-select v-model="badge.school" placeholder="Choose the school">
        <el-option label="IT School" value="dataSchool1"></el-option>
        <el-option label="Business School" value="dataSchool2"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Learning Trajectory">
      <el-select v-model="badge.learningTrajectory" placeholder="Choose the Learning Trajectory">
        <el-option label="The digital Marketing learning Path" value="1"></el-option>
        <el-option label="The Ruby in Rails production ready learning path" value="2"></el-option>
        <el-option label="The Web Archi and API gateway learning path" value="3"></el-option>
        <el-option label="The Single page app and VueJS learning path" value="4"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Badge">
      <el-input v-model="badge.name" placeholder="Name of the badge" style="with: 500px"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create the badge</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
        badge: {
          name: '',
          school: '',
          learningTrajectory: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$message({
          message: `Congrats, the Badge  ${this.badge.name} was successfuly created!`,
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

  .right{
    float: right;
  }
</style>
