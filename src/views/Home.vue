<template>
  <el-row class="row-bg center" justify="center">
    <el-button style="margin-bottom: 20px" type="info" plain @click="becomeAdmin">{{ isAdmin ? 'See the user view' : 'See the admin view' }}</el-button>
    <el-tabs type="border-card">
      <el-tab-pane label="📓 Schools">
        <br>
        <el-tabs>
          <el-tab-pane :label="school.name" v-for="school in schools">
            <School :school="school"></School>
          </el-tab-pane>
          <el-tab-pane label="📓 New School" v-if="isAdmin">
            <NewSchool></NewSchool>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
      <el-tab-pane label="🏛️ The company">
        <Company></Company>
      </el-tab-pane>
      <el-tab-pane label="⚙️ Preferences">
        <Preferences></Preferences>
      </el-tab-pane>
    </el-tabs>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import School from '@/components/School.vue'
import NewSchool from '@/components/NewSchool.vue'
import Company from '@/components/Company.vue'
import Preferences from '@/components/Preferences.vue'
import dataSchool1 from '@/seraphinAcademyData.json'
import dataSchool2 from '@/seraphinAcademyData2.json'

export default {
  mounted () {
    this.setCurrentUserData();
  },
  components: {
    School,
    NewSchool,
    Company,
    Preferences
  },
  props: ['school'],
  computed: {
    ...mapGetters(['getSchools', 'getAdmin']),
    isAdmin() {
      return this.getAdmin;
    },
    schools () {
      return this.getSchools;
    }
  },
  data() {
    return {
      newLearningTrajectoryTitle: null,
      newLearningTrajectory: null,
      newBadgeTitle: '',
      newBadges: [],
    }
  },
  methods: {
    ...mapActions(['setBecomeAdmin', 'setCurrentUserData']),
    becomeAdmin() {
      this.setBecomeAdmin(!this.isAdmin)
    },
    createNewLearningTrajectory() {
      this.newLearningTrajectory = this.newLearningTrajectoryTitle;
      this.newLearningTrajectoryTitle = '';
    },
    createNewBadge() {
      this.newBadges.push({ name: this.newBadgeTitle });
      this.newBadgeTitle = '';
    }
  }
}
</script>

<style scoped>
  .center{
    float: center;
  }
</style>
