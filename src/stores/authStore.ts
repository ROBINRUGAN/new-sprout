import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginApi } from '@/api/api'
import { ElMessage } from 'element-plus'
import router from '@/router'
export const useAuthStore = defineStore(
  'auth',
  () => {
    const token = ref('')
    const username = ref('')
    const id = ref('')
    const setToken = (data: string) => {
      token.value = data
    }
    const Login = async (loginData: any) => {
      const res = await LoginApi(loginData)
      if (res.data.code === '0') {
        ElMessage.success('登录成功！')
        setToken(res.data.data.token)
        router.push({ path: '/home' })
      } else {
        ElMessage.error(res.data.message)
      }
    }
    return { token, username, id, setToken, Login }
  },
  {
    // 启用持久化
    persist: true
  }
)