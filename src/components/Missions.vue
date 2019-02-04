<template lang="html">
  <el-table
      ref="filterTable"
      :data="badge.missions"
      style="width: 100%">
      <el-table-column type="expand">
       <template slot-scope="props">
         <p>Mission: {{ props.row.mission }}</p>
         <p>Details: {{ props.row.missionDetails }}</p>
         <p>Level of difficulty: {{ props.row.level }}</p>
       </template>
     </el-table-column>
      <el-table-column
        sortable
        label="Done"
        prop="done"
        width="100">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.done ? 'success' : 'danger'"
            disable-transitions>{{scope.row.done ? 'YES' : 'NO'}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        label="Level"
        prop="level"
        width="100">
      </el-table-column>
      <el-table-column
        label="Mission"
        prop="mission"
        width="auto">
      </el-table-column>
      <el-table-column
        label="Mark as done"
        width="120">
      <template slot-scope="scope">
        <el-button
        type="primary"
        plain
        size="mini"
        @click="setMissionDone(scope.row.missionId)">Done</el-button>
      </template>
    </el-table-column>
    <el-table-column
      v-if="isAdmin"
      label="Operations"
      width="200">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row.missionId)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row.missionId)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: ['badge'],
    methods: {
      setMissionDone(missionId) {
        console.log(missionId)
      }
    },
    data() {
      return {
        isAdmin: true
      }
    }
  }
</script>
