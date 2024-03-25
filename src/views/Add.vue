<script lang="ts" setup>
import { reactive, ref } from 'vue'
import UploadImg from '@/components/UploadImg.vue'
import MapContainer from '@/components/MapContainer.vue';
const mapVisible = ref(false)
const form = reactive({
  faorson: 0,
  parentId: '',
  isMain: 0,
  taskName: '',
  taskDescription: '',
  taskType: '',
  taskImages: '',
  taskPoints: 0,
  taskRewards: '',
  taskRectangle: '',
  taskDifficulty: 0,
  taskPriority: 0,
  requiresGrade: '',
  requiresFaculty: '',
  requiresMajor: '',
  requiresPhoto: 0,
  requiresAttitude: '',
  requiresItem: '',
  taskRequiresType: '',
  requiresAudit: 0,
  startTime: '',
  endTime: '',
  tree: 0,
  chan: 0,
  water: 0
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <el-row :gutter="0" class="wrapper">
    <div class="left">
      <h1 style="font-size: 24px; margin-top: 15px; margin-left: 15px; margin-bottom: 15px">
        活动信息录入
      </h1>

      <el-form :model="form" label-width="auto">
        <el-row :gutter="0">
          <el-col :span="12" style="padding: 0 40px">
            <el-form-item label="活动等级">
              <el-radio-group v-model="form.faorson">
                <el-radio :value="1" label="父"/>
                <el-radio :value="0" label="子"/>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动属性" v-if="form.faorson === 1">
              <el-radio-group v-model="form.parentId">
                <el-radio :value="-1" label='含多项子活动'/>
                <el-radio :value="0" label="单项"/>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="父组件ID" v-if="form.faorson === 0">
              <el-input v-model="form.parentId" placeholder="please input activity name" />
            </el-form-item>
            <el-form-item label="活动类型">
              <el-radio-group v-model="form.isMain">
                <el-radio :value="1" label="主线任务"/>
                <el-radio :value="0" label="支线任务"/>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="任务对象年级">
              <el-input v-model="form.requiresGrade" />
            </el-form-item>
            <el-form-item label="任务对象所在学院">
              <el-select v-model="form.requiresFaculty" placeholder="请选择...">
                <el-option label="计算机学院" value="1" />
                <el-option label="外国语学院" value="2" />
                <el-option label="数学学院" value="3" />
                <el-option label="物理学院" value="4" />
                <el-option label="化学学院" value="5" />
                <el-option label="生物学院" value="6" />
              </el-select>
            </el-form-item>
            <el-form-item label="任务对象专业">
              <el-select v-model="form.requiresMajor" placeholder="请选择...">
                <el-option label="计算机科学与技术" value="1" />
                <el-option label="软件工程" value="2" />
                <el-option label="网络工程" value="3" />
                <el-option label="信息安全" value="4" />
                <el-option label="物联网工程" value="5" />
                <el-option label="数字媒体技术" value="6" />
              </el-select>
            </el-form-item>
            <el-form-item label="活动名称">
              <el-input v-model="form.taskName" placeholder="please input activity name" />
            </el-form-item>
            <el-form-item label="活动地点">
              <el-button plain @click="mapVisible = true">打开地图定位</el-button>
              <el-dialog v-model="mapVisible" title="请在下面点击选取活动中心点" width="800"> 
              <MapContainer style="margin: auto;" />
              </el-dialog>
            </el-form-item>
            <el-form-item label="活动时段">
              <el-col :span="11">
                <el-date-picker
                  v-model="form.startTime"
                  type="datetime"
                  placeholder="Pick a date"
                  style="width: 100%"
                />
              </el-col>
              <el-col :span="2" style="display: flex; justify-content: center">
                <span>—</span>
              </el-col>
              <el-col :span="11">
                <el-date-picker
                  v-model="form.endTime"
                  placeholder="Pick a time"
                  style="width: 100%"
                  type="datetime"
                />
              </el-col>
            </el-form-item>
            <el-form-item label="活动方式">
              <el-select v-model="form.taskRequiresType" placeholder="请选择...">
                <el-option label="答题" value="1" />
                <el-option label="浏览网页" value="2" />
                <el-option label="图片提交" value="3" />
                <el-option label="其它" value="4" />
              </el-select>
            </el-form-item>
            <el-form-item label="活动描述">
              <el-input v-model="form.taskDescription" type="textarea" :rows="6" />
            </el-form-item>
          </el-col>
          <el-col :span="12" style="padding: 0 40px">
            <el-form-item label="活动封面">
              <UploadImg></UploadImg>
            </el-form-item>
            <el-form-item label="活动奖励">
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  border: 1px solid rgba(187, 187, 187, 1);
                  border-radius: 5px;
                  padding: 10px;
                "
              >
                <div>
                  <span style="margin-right: 20px">小水滴</span>
                  <el-input-number v-model="form.water" :min="1" :max="10" />
                </div>
                <div>
                  <span style="margin-right: 20px">小铲子</span>
                  <el-input-number v-model="form.chan" :min="1" :max="10" />
                </div>
                <div>
                  <span style="margin-right: 20px">小树苗</span>
                  <el-input-number v-model="form.tree" :min="1" :max="10" />
                </div>
                <div>
                  <span style="margin-right: 20px">积&nbsp;&nbsp;&nbsp;分</span>
                  <el-input-number v-model="form.taskPoints" :min="1" :max="10" />
                </div>
              </div>
            </el-form-item>
            <el-form-item label="任务类型">
              <el-select v-model="form.taskType" placeholder="请选择...">
                <el-option label="开学前" :value="0" />
                <el-option label="注册时" :value="1" />
                <el-option label="开学后" :value="2" />
              </el-select>
            </el-form-item>
            <el-form-item label="图片打卡">
              <el-select v-model="form.requiresPhoto" placeholder="请选择...">
                <el-option label="不需要" :value="0" />
                <el-option label="物品" :value="1" />
                <el-option label="人像" :value="2" />
                <el-option label="动作" :value="3" />
                <el-option label="其他" :value="4" />
              </el-select>
            </el-form-item>
            <el-form-item label="物品识别类型" v-if="form.requiresPhoto === 1">
              <el-select v-model="form.requiresItem">
                <!-- 身份证 录取通知书 银行卡 证件照 手机 衣物 文具 -->
                <el-option label="身份证" :value="1" />
                <el-option label="录取通知书" :value="2" />
                <el-option label="银行卡" :value="3" />
                <el-option label="证件照" :value="4" />
                <el-option label="手机" :value="5" />
                <el-option label="衣物" :value="6" />
                <el-option label="文具" :value="7" />
              </el-select>
            </el-form-item>
            <el-form-item label="动作识别类型" v-if="form.requiresPhoto === 3">
              <el-select v-model="form.requiresAttitude">
                <el-option label="水平摆放" :value="1" />
                <el-option label="立正站直" :value="2" />
                <el-option label="加油动作" :value="3" />
                <el-option label="V动作" :value="4" />
                <el-option label="手摆成三角形" :value="5" />
                <el-option label="大字状" :value="6" />
                <el-option label="扎马步" :value="7" />
                <el-option label="右手举手" :value="8" />
                <el-option label="左手举手" :value="9" />
                <el-option label="双手比x" :value="10" />
              </el-select>
            </el-form-item>
            <el-form-item label="是否人工审核">
              <el-switch v-model="form.requiresAudit" active-text="是" inactive-text="否" />
            </el-form-item>
            <el-form-item label="优先级">
              <el-slider
                v-model="form.taskPriority"
                :step="1"
                :min="1"
                :max="5"
                show-stops
                show-input
              />
            </el-form-item>
            <el-form-item label="难易程度">
              <el-slider
                v-model="form.taskDifficulty"
                :step="1"
                :min="1"
                :max="5"
                show-stops
                show-input
              />
            </el-form-item>
            <el-form-item>
              <el-button
                size="large"
                type="primary"
                @click="onSubmit"
                round
                style="margin: auto; width: 100px"
                >创建任务</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-row>
</template>

<style scoped>
.wrapper {
  background-color: rgb(0, 255, 255);
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.left {
  background-color: #fff;
  width: 100%;
}
.right {
  background-color: #ab0e0e;
}
</style>
