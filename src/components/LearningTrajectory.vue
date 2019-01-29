<template lang="html">
  <el-row>
    <el-col :span="24"><div class="grid-content bg-purple-dark">
      <div slot="header" class="clearfix">
        <h2> {{ '🎓' + trajectory.name }}</h2>
        <p>{{learningTrajectoryId}}</p>
        <router-link to="/" class="left"><i class="el-icon-caret-left">Back</i></router-link>
      </div>
      <br>
      <el-tabs type="card" style="height: auto;">
        <el-tab-pane v-for="badge in trajectory.badges" :label="'🏅' + badge.name">
          <br>
          <p>Status: <el-tag type="danger">Unfinished</el-tag></p>
          <Missions :badge="badge"></Missions>
        </el-tab-pane>
      </el-tabs>
    </div></el-col>
  </el-row>
</template>

<script>
import Missions from './Missions.vue'
import seraphinAcademyData from '@/seraphinAcademyData.json'

export default {
  props: ['badge'],
  components: {
    Missions
  },
  data() {
    return {
      learningTrajectoryId: null
    }
  },
  computed: {
    trajectory() {
      return seraphinAcademyData.learningTrajectories[this.learningTrajectoryId]
    }
  },
  created() {
    this.learningTrajectoryId = this.$route.params.id;
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

  .left{
    float: left;
  }
</style>
