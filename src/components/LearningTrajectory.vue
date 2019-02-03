<template lang="html">
  <el-row>
    <el-col :span="24"><div class="grid-content bg-purple-dark">
      <div slot="header" class="clearfix">
        <router-link to="/" class="left"><i class="el-icon-caret-left">Back</i></router-link>
        <h2> {{ '🎓' + trajectory.name }}</h2>
        <p>{{learningTrajectoryId}}</p>
      </div>
      <el-container>
        <el-button size="small" class="left" @click="addBadge(trajectory)">Create new Badge</el-button>
      </el-container>
      <br>
      <el-tabs type="card" style="height: auto;" closable @tab-remove="removeTab(trajectory)">
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
  },
  methods: {
    addBadge() {
      this.$prompt('Enter the name of the new badge', 'Create a new Badge 🏅', {
        confirmButtonText: 'Create',
        cancelButtonText: 'Cancel'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: `The new badge ${value} was correctly created`
        });
      })
    },
    removeTab(targetName) {
      this.$confirm(`Are you sure you want to delete the badge ${targetName.name} and all its related missions ?`, 'Delete badge', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        });
      })
      // See https://element.eleme.io/#/en-US/component/tabs
    }
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
