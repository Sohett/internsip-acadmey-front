<template>
  <el-row class="row-bg" justify="center">
    <el-col :span="24">
      <div class="grid-content bg-purple">
        <LearningTrajectory>
        </LearningTrajectory>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import LearningTrajectory from '@/components/LearningTrajectory.vue'
import seraphinAcademyData from '@/seraphinAcademyData.json'

export default {
  components: {
    LearningTrajectory
  },
  props: ['trajectory'],
  data() {
    return {
      data: seraphinAcademyData
    }
  }
}
</script>

<style="scoped">
</style>
