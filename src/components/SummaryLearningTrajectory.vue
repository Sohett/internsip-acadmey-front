<template lang="html">
    <el-card class="box-card" shadow="hover">
      <div slot="header" class="clearfix">
        <router-link :to="{ name: 'learningTrajectory', params: {id: trajectory.learningTrajectoryId } }">
          <h2> {{ '🎓' + trajectory.name }}</h2>
        </router-link>
        <i v-if="isAdmin" style="margin: 0 5px" @click="editLearningPathTitle(trajectory)" class="el-icon-edit"></i>
        <i v-if="isAdmin" style="margin: 0 5px" @click="deleteLearningPath(trajectory)" class="el-icon-delete"></i>
      </div>
      <div v-for="badge in trajectory.badges" class="text item">
        {{ '🏅' + badge.name}}
      </div>
      <div v-if="isAdmin" class="text item">
        <el-input prefix-icon="el-icon-circle-plus-outline" placeholder="🏅 Add a new Badge + ENTER" v-model="newBadgeTitle" @keyup.enter.native="createNewBadge(trajectory)"></el-input>
      </div>
    </el-card>
</template>

<script>
export default {
  props: ['trajectory'],
  data() {
    return {
      newBadgeTitle: '',
      isAdmin: true
    }
  },
  methods: {
    deleteLearningPath(trajectory){
      this.$confirm(`Are you sure you want to delete the \"${trajectory.name}\" badges and all its related \"Badges\" ?`, 'Delete Learning Trajectory', {
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
</style>
