<template>
  <el-menu router :default-active="activeIndex">
    <router-link to="/home/dashboard">
      <el-menu-item index="/home/dashboard">
        <el-icon><Odometer /></el-icon>
        <span>工作台</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/add">
      <el-menu-item index="/home/add">
        <el-icon><DocumentAdd /></el-icon>
        <span>发布任务</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/past">
      <el-menu-item index="/home/past">
        <el-icon><Management /></el-icon>
        <span>往期活动</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/feedback">
      <el-menu-item index="/home/feedback">
        <el-icon><ChatRound /></el-icon>
        <span>用户反馈</span>
      </el-menu-item>
    </router-link>

    <router-link to="/home/userCenter">
      <el-menu-item index="/home/userCenter">
        <el-icon><setting /></el-icon>
        <span>个人中心</span>
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
.el-menu{
    border: 0;
    --el-menu-item-height: 50px;
}

</style>
