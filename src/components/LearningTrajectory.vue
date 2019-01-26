<template lang="html">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2> {{ trajectory.name }}</h2>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button> -->
      </div>
      <el-tabs type="card" style="height: auto;">
        <el-tab-pane v-for="badge in trajectory.badges" :label="badge.name">
          <p>Status: <el-tag type="danger">Unfinished</el-tag></p>
          <Missions :badge="badge"></Missions>
        </el-tab-pane>
      </el-tabs>
  </el-card>
</template>

<script>
import Missions from './Missions.vue'
export default {
  props: ['trajectory', 'badge'],
  components: {
    Missions
  }
}
</script>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 10px;
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
    width: auto;
    margin: 10px 10px;
  }
</style>
