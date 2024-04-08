<script setup>
import { ref } from 'vue'
import { ElTable, ElTableColumn, ElIcon } from 'element-plus'
import Pie from '@/components/Pie.vue'

const tableData = ref([
  { rank: '1', activityName: '早安福大', completionVolume: '346.3W+', dailyIncrease: '35%' },
  { rank: '1', activityName: '早安福大', completionVolume: '346.3W+', dailyIncrease: '35%' },
  { rank: '1', activityName: '早安福大', completionVolume: '346.3W+', dailyIncrease: '35%' },
  { rank: '1', activityName: '早安福大', completionVolume: '346.3W+', dailyIncrease: '35%' }
])
</script>
<template>
  <el-row :gutter="20">
    <el-col :span="12"
      >
      <div class="hot">
        <!-- <Locations/> -->
          <h1>热门活动</h1>
          <br />
          <el-table
            :data="tableData"
            style="width: 100%"
            :header-cell-style="{ backgroundColor: '#f5f5f5', color: '#000' }"
          >
            <el-table-column prop="rank" label="排名" width="60"></el-table-column>
            <el-table-column prop="activityName" label="活动名称"></el-table-column>
            <el-table-column prop="completionVolume" label="完成量"></el-table-column>
            <el-table-column label="日涨幅">
              <template #default="scope">
                <div>
                  {{ scope.row.dailyIncrease }}
                  <el-icon :style="{ color: 'red' }">
                    <CaretTop />
                  </el-icon>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
  </el-col>
    <el-col :span="12"
      ><div class="summary">
        <h1>学生分类统计</h1>
        <Pie></Pie></div
    ></el-col>
  </el-row>
</template>
<style scoped>
.hot {
  height: 400px;
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.summary {
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
