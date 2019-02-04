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
        <el-button plain size="mini" @click="setMissionDone(scope.row.missionId)">Done</el-button>
      </template>
    </el-table-column>
    <el-table-column v-if="isAdmin" label="Admin Operations" width="200">
      <template slot-scope="scope">
        <el-popover placement="left" width="400" trigger="click">
          <el-container>
            <el-input size="mini" placeholder="Edit the stuff here"></el-input>
            <el-button size="mini" style="margin-left: 10px" type="primary" plain icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row.missionId)">Submit</el-button>
          </el-container>
          <el-button slot="reference" size="mini" type="primary" plain icon="el-icon-edit"></el-button>
        </el-popover>
        <el-button style="margin-left: 10px" size="mini" type="danger" plain icon="el-icon-delete" @click="handleDelete(scope.$index, scope.row.missionId)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  import store from '@/store';

  export default {
    props: ['badge'],
    methods: {
      setMissionDone(missionId) {
        console.log(missionId)
      }
    },
    data() {
      return {
        isAdmin: store.state.isAdmin
      }
    }
  }
</script>
