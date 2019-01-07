<template lang="html">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Learning Trajectory</span>
        <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
      </div>
      <div v-for="badge in badges" class="text item">
        {{ badge.name }}
      </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      badges: [
        { name: 'Testing' },
        { name: 'Production Rails' }
      ]
    }
}}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 350px;
  }
</style>
