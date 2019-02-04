<template lang="html">
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <router-link to="/" class="left"><i class="el-icon-caret-left">Learning Trajectories 🎓</i></router-link>
        <br>
        <div slot="header" class="clearfix" style="margin: auto; width: 600px; text-align: center">
          <h2> {{ '🎓' + trajectory.name }}</h2>
          <p >Description: This learning path will take you into the cellar of digital marketing. You will learn every details related to how we aquire new leads and data on our clients</p>
          <br>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="trajectory.progress" status=""></el-progress>
        </div>
        <hr>
        <br>
        <el-container>
          <el-button v-if="isAdmin" size="small" type="success" plain class="left" @click="addBadge(trajectory)">🏅Create new Badge <i class="el-icon-circle-plus-outline"></i></el-button>
        </el-container>
        <br>
        <el-tabs type="card" style="height: auto;">
          <el-tab-pane v-for="badge in trajectory.badges" :label="'🏅' + badge.name">
            <el-container style="margin-top: 10px">
              <el-button v-if="isAdmin" size="mini" type="primary" plain icon="el-icon-edit" @click="editBadge(badge)">Edit Badge🏅</el-button>
              <el-button v-if="isAdmin" size="mini" type="danger" plain icon="el-icon-delete" @click="deleteBadge(badge)">Delete Badge🏅</el-button>
            </el-container>
            <el-progress type="circle" :percentage="50" status=""></el-progress>
            <Missions :badge="badge"></Missions>
          </el-tab-pane>
          <br>
          <el-button v-if="isAdmin" size="small" type="success" plain class="left" @click="addMission(trajectory)">🎯Create new mission <i class="el-icon-circle-plus-outline"></i></el-button>
        </el-tabs>
      </div>
    </el-col>
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
    },
    isAdmin() {
      return this.$store.state.isAdmin
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
    addMission() {
      this.$prompt('Enter the name of the new mission', 'Create a new Mission 🎯', {
        confirmButtonText: 'Create',
        cancelButtonText: 'Cancel'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: `The new mission ${value} was correctly created`
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
