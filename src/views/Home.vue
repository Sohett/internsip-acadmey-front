<template>
  <el-row class="row-bg center" justify="center">
    <el-tabs type="border-card">
      <el-tab-pane label="📓 Schools">
        <el-radio-group @change="changeDataSchool" v-model="school" style="margin-bottom: 20px;">
          <el-radio-button label="it">📓 IT School</el-radio-button>
          <el-radio-button label="business">📓 Business School</el-radio-button>
        </el-radio-group>
        <p>Here are the different learning paths for the engineering school</p>
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
        <el-col :span="6">
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
        <p>Name: Seraphin SA</p>
        <p>Employees: 20-25</p>
        <p>Address: Rue des gens bien, 22. Bruxelles 1000, BELGIQUE</p>
        <p>Business: Insurance</p>
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
// @ is an alias to /src
import SummaryLearningTrajectory from '@/components/SummaryLearningTrajectory.vue'
import dataSchool1 from '@/seraphinAcademyData.json'
import dataSchool2 from '@/seraphinAcademyData2.json'

export default {
  components: {
    SummaryLearningTrajectory
  },
  props: ['trajectory'],
  data() {
    return {
      data: dataSchool1,
      school: 'it',
      newLearningTrajectoryTitle: null,
      newLearningTrajectory: null,
      newBadgeTitle: '',
      newBadges: []
    }
  },
  methods: {
    changeDataSchool() {
      switch (this.school) {
        case 'it':
          this.data = dataSchool1;
          break;
        case 'business':
          this.data = dataSchool2;
          break;
      }
    },
    createNewLearningTrajectory() {
      this.newLearningTrajectory = this.newLearningTrajectoryTitle;
      this.newLearningTrajectoryTitle = ''
    },
    createNewBadge() {
      this.newBadges.push({ name: this.newBadgeTitle });
      this.newBadgeTitle = ''
    }
  }
}
</script>

<style scoped>
  .center{
    float: center;
  }
</style>
