<script lang="ts" setup>
import Stats from '@/components/Stats.vue'
import InfoItem from '@/components/InfoItem.vue'
import { ref } from 'vue'
import { ElTable, ElTableColumn, ElIcon } from 'element-plus'
import { useToolSelectStore } from '@/stores/toolSelectStore'
import { computed } from 'vue'

const toolSelect = useToolSelectStore()

// 定义一个方法来检查按钮是否应该被高亮
function isFocused(index: number) {
  return toolSelect.focused === index
}

// 定义一个方法来设置当前焦点
function setFocus(index: number) {
  toolSelect.focused = index
}

const tableData = ref([
  { rank: '1', activityName: '早安福大', completionVolume: '346.3W+', dailyIncrease: '35%' },
  { rank: '1', activityName: '早安福大', completionVolume: '346.3W+', dailyIncrease: '35%' },
  { rank: '1', activityName: '早安福大', completionVolume: '346.3W+', dailyIncrease: '35%' },
  { rank: '1', activityName: '早安福大', completionVolume: '346.3W+', dailyIncrease: '35%' }
])
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="18"
      ><div class="userData">
        <el-row>
          <h1>👏 欢迎回来</h1>
        </el-row>
        <el-row>
          <img src="../assets/home/dashboard-logo.png" alt="" />
          <div>
            <p>总活动</p>
            <div style="display: flex; align-items: center; justify-content: center">
              <p style="font-size: 24px; font-weight: bold; padding-top: 5px">12&nbsp;</p>
              <p>个</p>
            </div>
          </div>
        </el-row>
        <el-row>
          <div
            style="
              display: flex;
              justify-content: space-between;
              width: 125px;
              align-items: center;
              margin-bottom: 10px;
            "
          >
            <h1>用户数据</h1>
            <p style="font-size: 12px">(近七日)</p>
          </div>

          <Stats></Stats>
        </el-row></div
    ></el-col>

    <el-col :span="6">
      <el-row>
        <el-col :span="24"
          ><div class="tool">
            <h1>管理</h1>
            <el-row class="iconBtns">
              <el-col :span="8" class="toolWrapper">
                <router-link to="/home/dashboard/main">
                  <button
                    class="iconWrapper"
                    @click="setFocus(1)"
                    :class="{ 'is-focused': isFocused(1) }"
                  >
                    <el-icon><MessageBox /></el-icon>
                  </button>
                </router-link>

                <p>活动管理</p>
              </el-col>
              <el-col :span="8" class="toolWrapper">
                <router-link to="/home/dashboard/find">
                  <button
                    class="iconWrapper"
                    @click="setFocus(2)"
                    :class="{ 'is-focused': isFocused(2) }"
                  >
                    <el-icon><Histogram /></el-icon>
                  </button>
                </router-link>
                <p>用户统计</p>
              </el-col>
              <el-col :span="8" class="toolWrapper">
                <button
                  class="iconWrapper"
                  @click="setFocus(3)"
                  :class="{ 'is-focused': isFocused(3) }"
                >
                  <el-icon><DocumentCopy /></el-icon>
                </button>
                <p>高级管理</p>
              </el-col>
            </el-row>
            <el-row class="iconBtns">
              <el-col :span="8" class="toolWrapper">
                <button
                  class="iconWrapper"
                  @click="setFocus(4)"
                  :class="{ 'is-focused': isFocused(4) }"
                >
                  <el-icon><Guide /></el-icon>
                </button>
                <p>线上推广</p>
              </el-col>
              <el-col :span="8" class="toolWrapper">
                <button
                  class="iconWrapper"
                  @click="setFocus(5)"
                  :class="{ 'is-focused': isFocused(5) }"
                >
                  <el-icon><DataLine /></el-icon>
                </button>
                <p>广告投放</p>
              </el-col>
            </el-row>
          </div></el-col
        >
      </el-row>
      <el-row>
        <el-col :span="24"
          ><div class="info">
            <InfoItem type="activity"> 早安福大开始啦 </InfoItem>
            <InfoItem type="msg"> 新增内容尚未通过审核，详... </InfoItem>
            <InfoItem type="info"> 新增内容尚未通过审核，详... </InfoItem>
            <InfoItem type="msg"> 新增内容尚未通过审核，详... </InfoItem>
            <InfoItem type="info"> 新增内容尚未通过审核，详... </InfoItem>
            <InfoItem type="msg"> 新增内容尚未通过审核，详... </InfoItem>
          </div></el-col
        >
      </el-row>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="18">
      <RouterView />
    </el-col>
    <el-col :span="6"
      ><div class="image">
        <img src="../assets/home/image.png" alt="" /></div
    ></el-col>
  </el-row>
</template>

<style scoped>
.toolWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.iconWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  margin-bottom: 4px;
  height: 32px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 6px;
  border: none;
  font-size: 20px;
  color: black;
}
.iconWrapper:hover {
  color: #409eff;
  cursor: pointer;
}
.is-focused {
  color: #409eff;
}
.iconBtns {
  margin-top: 15px;
  font-size: 12px;
  text-align: center;
}
.image {
  height: 400px;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  padding: 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.userData {
  height: 500px;
  background-color: rgba(222, 244, 241, 1);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.tool {
  height: 210px;
  background-color: rgba(182, 232, 231, 1);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.info {
  height: 270px;
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}
</style>