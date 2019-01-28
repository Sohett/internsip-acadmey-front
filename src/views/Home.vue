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
      school: 'it'
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
    }
  }
}
</script>

<style scoped>
  .center{
    float: center;
  }
</style>
