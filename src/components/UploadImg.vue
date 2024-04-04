<template>
  <el-upload
    v-model:file-list="fileList"
    :http-request="uploadImage"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove"
    :on-success="handleSuccess"
    :on-change="handleChange"
    :limit="2"
    :auto-upload="true"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

import type { UploadProps, UploadUserFile } from 'element-plus'
import axios from 'axios'
const emit = defineEmits(['urls'])
import { GetURLApi } from '@/api/api'
const fileList = ref<UploadUserFile[]>([])
const urlList = ref<string[]>([])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const uploadImage: UploadProps['httpRequest'] = async ({ file }) => {
  const formData = new FormData()
  formData.append('files', file)
  const res = await GetURLApi(formData)
  return res.data
}

const handleRemove: UploadProps['onRemove'] = (uploadFile: any, uploadFiles) => {
  const index = urlList.value.indexOf(uploadFile.response.data.fileUrl!)
  if (index > -1) {
    urlList.value.splice(index, 1)
  }
 
}
const handleSuccess: UploadProps['onSuccess'] = (res, file, fileList) => {
  console.log('成功了')
  if (res.code === '0') {
    urlList.value.push(res.data.fileUrl)
  }
}
const handleChange: UploadProps['onChange'] = (uploadFiles) => {
  emit('urls', urlList.value)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}
</script>
