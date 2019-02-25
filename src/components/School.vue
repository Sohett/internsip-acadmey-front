<template>
  <div>
    <br>
    <el-container>
      <el-button v-if="isAdmin" size="small" style="margin-left: 10px; margin-bottom: 20px" @click="deleteSchool" type="danger" plain>Delete School <i class="el-icon-delete el-icon-right"></i></el-button>
    </el-container>
    <el-col :span="6" v-for="trajectory in schoolFilteredLearningTrajectories">
      <div class="grid-content bg-purple">
        <SummaryLearningTrajectory :trajectory="trajectory">
        </SummaryLearningTrajectory>
      </div>
    </el-col>
    <el-col :span="6" v-if="newLearningTrajectory">
      <div class="grid-content bg-purple">
        <el-card class="box-card" shadow="hover">
          <div slot="header" class="clearfix">
            <h2>{{ '🎓' + newLearningTrajectory }}</h2>
          </div>
          <div v-for="badge in newBadges" class="text item">
            {{ '🏅' + badge.name}}
          </div>
          <div class="text item">
            <el-input prefix-icon="el-icon-circle-plus-outline" placeholder="🏅 Add a new Badge + ENTER" v-model="newBadgeTitle" @keyup.enter.native="createNewBadge"></el-input>
          </div>
        </el-card>
      </div>
    </el-col>
    <el-col :span="6" v-if="isAdmin">
      <div class="grid-content bg-purple">
        <el-card class="box-card" shadow="never">
          <div >
            <h2>🎓</h2>
            <el-input prefix-icon="el-icon-circle-plus-outline" placeholder="Add a new Learning Path + ENTER" v-model="newLearningTrajectoryTitle" @keyup.enter.native="createNewLearningTrajectory"></el-input>
          </div>
        </el-card>
      </div>
    </el-col>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import SummaryLearningTrajectory from '@/components/SummaryLearningTrajectory.vue'

  export default {
    components: {
      SummaryLearningTrajectory
    },
    props: ['trajectory', 'school'],
    computed: {
      ...mapGetters(['getLearningTrajectories', 'getAdmin']),
      schoolFilteredLearningTrajectories () {
        return this.getLearningTrajectories[this.school.schoolUuid];
      },
      isAdmin() {
        return this.getAdmin;
      }
    },
    methods: {
      deleteSchool() {
        this.$confirm(`Are you sure you want to delete the \"${this.school.name}\" and all its related \"Learning Trajectories\" ?`, 'Delete School', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          });
        })
      }
    }
  }
</script>
