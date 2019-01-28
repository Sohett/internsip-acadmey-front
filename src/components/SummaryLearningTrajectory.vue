<template lang="html">
  <router-link :to="{ name: 'learningTrajectory', params: {id: trajectory.learningTrajectoryId } }">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <h2> {{ '🎓' + trajectory.name }}</h2>
      </div>
      <div v-for="badge in trajectory.badges" class="text item">
        {{ '🏅' + badge.name}}
      </div>
    </el-card>
  </router-link>
</template>

<script>
export default {
  props: ['trajectory'],
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
