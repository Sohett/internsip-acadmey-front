<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="8" v-for="trajectory in trajectories">
      <div class="grid-content bg-purple">
        <LearningTrajectory>
        </LearningTrajectory>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import LearningTrajectory from '@/components/LearningTrajectory.vue'

export default {
  components: {
    LearningTrajectory
  },
  data() {
    return {
      trajectories: [
        { name: "The Digital Marketeer directory", difficulty: 6, number_of_badges: 12},
        { name: "The Ruby on Rails and Production ready directory", difficulty: 8, number_of_badges: 14},
        { name: "The Web Architecture and API directory", difficulty: 7, number_of_badges: 14}
      ]
    }
  }
}
</script>
