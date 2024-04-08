<template>
  <el-menu router :default-active="activeIndex">
    <router-link to="/home/dashboard">
      <el-menu-item index="/home/dashboard">
        <el-icon><Odometer /></el-icon>
        <span>工作台</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/addStuds">
      <el-menu-item index="/home/addStuds">
        <el-icon><BottomRight /></el-icon>   
          <span>学生导入</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/add">
      <el-menu-item index="/home/add">
        <el-icon><DocumentAdd /></el-icon>
        <span>发布任务</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/checkActivity">
      <el-menu-item index="/home/checkActivity">
        <el-icon><CircleCheck /></el-icon>
        <span>活动审核</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/past">
      <el-menu-item index="/home/past">
        <el-icon><Management /></el-icon>
        <span>往期活动</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/createAd">
      <el-menu-item index="/home/createAd">
        <el-icon><ChatRound /></el-icon>
        <span>发布广告</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/pastAd">
      <el-menu-item index="/home/pastAd">
        <el-icon><setting /></el-icon>
        <span>管理广告</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const activeIndex = computed(() => {
  // 判断当前路由是否以 /home/dashboard 开头
  return route.path.startsWith('/home/dashboard') ? '/home/dashboard' : route.path
})
</script>

<style lang="scss" scoped>
.el-menu {
  border: 0;
  --el-menu-item-height: 50px;
}
</style>
