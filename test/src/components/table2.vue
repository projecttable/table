<template>
    <el-table
      :data="tableData"
      style="width: 100%"
      class='table'
      tooltip-effect="dark"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="#" width="100"></el-table-column>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <el-button :span='12' @click="reset()"  size="small">编辑</el-button>
        <el-button :span='12' type="danger" size="small">删除</el-button>
      </el-table-column>
    </el-table>
</template>
<script>
export default {
  name: '',
  data () {
    const item = {
      id: 0,
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item),
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      console.log(this.multipleSelection)
      this.multipleSelection = val
    }
  }
}
</script>
<style lang="stylus">
.table{
  border: 1px solid #ebeef5;
  .el-table .cell{
    line-height: 22px;
  }
}
</style>
