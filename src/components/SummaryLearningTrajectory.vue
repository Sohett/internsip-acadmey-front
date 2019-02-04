<template lang="html">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <router-link :to="{ name: 'learningTrajectory', params: {id: trajectory.learningTrajectoryId } }">
          <h2> {{ '🎓' + trajectory.name }}</h2>
        </router-link>
        <i v-if="isAdmin" @click="editLearningPathTitle(trajectory)" class="el-icon-edit admin-edit admin-edit--primary"></i>
        <i v-if="isAdmin" @click="deleteLearningPath(trajectory)" class="el-icon-delete admin-edit admin-edit--danger"></i>
        <el-progress style="margin-top: 10px" :percentage="trajectory.progress"></el-progress>
      </div>
      <router-link class="no-decoration" :to="{ name: 'learningTrajectory', params: {id: trajectory.learningTrajectoryId } }">
        <div v-for="badge in trajectory.badges" class="text item">
          <span>{{ `🏅 ${badge.name} ` }}</span><i v-if="badge.accomplished" class="el-icon-success"></i>
        </div>
      </router-link>
      <div v-if="isAdmin" class="text item">
        <el-input prefix-icon="el-icon-circle-plus-outline" placeholder="🏅 Add a new Badge + ENTER" v-model="newBadgeTitle" @keyup.enter.native="createNewBadge(trajectory)"></el-input>
      </div>
    </el-card>
</template>

<script>
import store from '@/store/store';

export default {
  props: ['trajectory'],
  data() {
    return {
      newBadgeTitle: ''
    }
  },
  computed: {
    isAdmin() {
      return this.$store.state.isAdmin
    }
  },
  methods: {
    deleteLearningPath(trajectory){
      this.$confirm(`Are you sure you want to delete the \"${trajectory.name}\" and all its related \"Badges\" and \"Missions\"?`, 'Delete Learning Trajectory', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        });
      })
    },
    editLearningPathTitle(trajectory) {
      this.$prompt('Edit the Learning Path Title', 'Learning Path Title', {
        confirmButtonText: 'Update',
        cancelButtonText: 'Cancel'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: 'The new title is:' + value
        });
      })
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

  .box-card {
    width: auto;
    margin: 10px 10px;
  }

  .no-decoration {
    color: #000000;
  }

  .no-decoration:hover {
    color: #000000;
  }

  .admin-edit--danger{
    color: #f56c6c;
  }

  .admin-edit--primary{
    color: #409eff;
  }

  .admin-edit{
    margin: 0 5px;
  }
</style>
