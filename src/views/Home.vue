<template>
  <el-row class="row-bg center" justify="center">
    <el-button style="margin-bottom: 20px" type="info" plain @click="becomeAdmin">{{ this.$store.state.isAdmin ? 'See the user view' : 'See the admin view' }}</el-button>
    <el-tabs type="border-card">
      <el-tab-pane label="📓 Schools">
        <el-radio-group v-model="schoolLabel" style="margin-bottom: 20px;">
          <el-radio-button v-for="school in schools" :label="school.name">
          </el-radio-button>
        </el-radio-group>
        <el-container>
          <el-button v-if="isAdmin" size="small" style="margin-left: 10px; margin-bottom: 20px" @click="deleteSchool" type="danger" plain>Delete School <i class="el-icon-delete el-icon-right"></i></el-button>
          <el-button v-if="isAdmin" size="small" style="margin-left: 10px; margin-bottom: 20px" @click="promptNewSchool" type="success" plain>Create New School <i class="el-icon-delete el-icon-right"></i></el-button>
        </el-container>
        <el-col :span="6" v-for="trajectory in data.learningTrajectories">
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
      </el-tab-pane>
      <el-tab-pane label="🏛️ The company">
        <Company></Company>
      </el-tab-pane>
      <el-tab-pane label="⚙️ Preferences">
        <p>Plan: Free plan up to 50 users</p>
        <p>Users: 18</p>
        <p>Admin: Thomas Sohet</p>
        <p>Contact us: jean-claude.dus@gmail.test</p>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SummaryLearningTrajectory from '@/components/SummaryLearningTrajectory.vue'
import Company from '@/components/Company.vue'
import dataSchool1 from '@/seraphinAcademyData.json'
import dataSchool2 from '@/seraphinAcademyData2.json'

export default {
  mounted () {
    this.setCurrentUserData();
  },
  components: {
    SummaryLearningTrajectory,
    Company
  },
  props: ['trajectory'],
  computed: {
    ...mapGetters(['getSchools']),
    isAdmin() {
      return this.$store.state.isAdmin
    },
    schools () {
      return this.getSchools;
    }
  },
  data() {
    return {
      data: dataSchool1,
      newLearningTrajectoryTitle: null,
      newLearningTrajectory: null,
      newBadgeTitle: '',
      newBadges: [],
      schoolLabel: 'it',
      schoolName: '📓 IT School',
      schoolsOld: [
        {
          label: 'it',
          name: '📓 IT School',
          data: dataSchool1
        },
        {
          label: 'business',
          name: '📓 Business School',
          data: dataSchool2
        }
      ]
    }
  },
  methods: {
    ...mapActions(['setBecomeAdmin', 'setLearningTrajectories', 'setCurrentUserData', 'setSchools']),
    becomeAdmin() {
      this.setBecomeAdmin(!this.isAdmin)
    },
    createNewLearningTrajectory() {
      this.newLearningTrajectory = this.newLearningTrajectoryTitle;
      this.newLearningTrajectoryTitle = ''
    },
    createNewBadge() {
      this.newBadges.push({ name: this.newBadgeTitle });
      this.newBadgeTitle = ''
    },
    changeSchool(school) {
      this.data = school.data
      this.schoolLabel = school.label
      this.schoolName = school.name
    },
    deleteSchool() {
      this.$confirm(`Are you sure you want to delete the \"${this.schoolName}\" and all its related \"Learning Trajectories\" ?`, 'Delete School', {
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
    promptNewSchool() {
      this.$prompt('Enter the name of your new School', 'Create a new School 📓', {
        confirmButtonText: 'Create',
        cancelButtonText: 'Cancel'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: `The new school ${value} was correctly created`
        });
      })
    }
  }
}
</script>

<style scoped>
  .center{
    float: center;
  }
</style>
