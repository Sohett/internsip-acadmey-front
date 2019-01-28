<template>
  <el-tabs type="border-card">
    <el-tab-pane label="Create learning">
      <el-card class="box-card" shadow="never">
        <SchoolForm>
        </SchoolForm>
      </el-card>
      <el-card class="box-card" shadow="never">
        <LearningTrajectoryForm>
        </LearningTrajectoryForm>
      </el-card>
      <el-card class="box-card" shadow="never">
        <BadgesForm>
        </BadgesForm>
      </el-card>
      <el-card class="box-card" shadow="never">
        <MissionForm>
        </MissionForm>
      </el-card>
    </el-tab-pane>
    <el-tab-pane label="Manage students">
    </el-tab-pane>
    <el-tab-pane label="Pending missions">
    </el-tab-pane>
  </el-tabs>
</template>

<script>
  import SchoolForm from '@/components/Forms/School.vue'
  import LearningTrajectoryForm from '@/components/Forms/LearningTrajectory.vue'
  import BadgesForm from '@/components/Forms/Badge.vue'
  import MissionForm from '@/components/Forms/Mission.vue'

  export default {
    components: {
      SchoolForm,
      LearningTrajectoryForm,
      BadgesForm,
      MissionForm
    },
  }
</script>

<style>
  .left{
    float: left;
  }
</style>
