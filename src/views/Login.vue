<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'
const authStore = useAuthStore();
const loginData = ref({
  username: '',
  password: ''
})
</script>

<template>
  <div class="background">
    <el-row class="wrapper">
      <el-col :span="12" class="left">
        <div class="info">
          <p style="font-size: 32px">新苗同学</p>
          <p>你的大学生活助手</p>
          <p>大学原来如此有趣</p>
        </div>
        <img class="pic" src="../assets/login/pic.png" alt="mewch" />
      </el-col>

      <el-col :span="12" class="right">
        <img class="logo" src="../assets/login/logo.png" alt="" />
        <div class="wrapper2">
          <p style="font-size: 28px; margin: 20px 0 10px 20px">新苗同学</p>
          <div class="form">
            <input
              type="text"
              name="username"
              id="username"
              v-model="loginData.username"
              placeholder="账号"
            />
            <input
              type="password"
              name="password"
              id="password"
              v-model="loginData.password"
              placeholder="密码"
            />
            <button @click="authStore.Login(loginData)">登录</button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  width: 80%;
}
input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
  border: 1px solid rgba(187, 187, 187, 1);
  border-radius: 5px;
  padding-left: 10px;
  font-size: 16px;
  font-family: SourceHanSansSC-regular;
}
button {
  width: 100%;
  height: 40px;
  background: #4f8980;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-family: SourceHanSansSC-regular;
  border: none;
  cursor: pointer;
}
button:hover {
  background: #70b7ac;
}
button:active {
  background: #4f8980;
}

.logo {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  margin-top: 30px;
  z-index: 100;
}
.pic {
  width: 225px;
  height: 225px;
  margin-top: -30px;
}
p {
  margin: 0;
  margin-bottom: 30px;
}
.wrapper2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.21);
  box-shadow: 0px 2px 6px 0px rgba(206, 206, 206, 0.5);
  border: 1px solid rgba(187, 187, 187, 1);
  width: 300px;
  height: 300px;
  margin: 0 auto;
  margin-top: -100px;
}
.info {
  margin: 0;
  margin-top: 40px;
  line-height: 28px;
  color: rgba(16, 16, 16, 1);
  font-size: 24px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.background {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper {
  width: 800px;
  height: 450px;
  border-radius: 10px;
  box-shadow: 0px 2px 6px 0px rgba(190, 190, 190, 0.4);
  font-family: Roboto;
  border: 1px solid rgba(187, 187, 187, 1);
}
.left {
  height: 100%;
  border-radius: 10px 0px 0px 10px;
  background: linear-gradient(180deg, rgba(182, 232, 231, 1) 0%, rgba(170, 213, 64, 1) 100%);
  justify-content: center;
  display: grid;
}
.right {
  height: 100%;
  border-radius: 0px 10px 10px 0px;
  background: white;
}
</style>
