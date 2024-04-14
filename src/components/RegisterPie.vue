<template>
  <h1 style="justify-content: center; display: flex; margin-top: 20px">学生注册统计</h1>
  <div ref="chartContainer" style="width: 100%; height: 340px"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'

const chartContainer = ref(null)
let myChart = null

// Chart configuration
const option = {
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    // 边框颜色
    borderColor: 'transparent',
    // 边框圆角
    borderRadius: 10,
    // 内边距
    padding: 10,
    // 文字样式
    textStyle: {
      color: '#000'
    },
    trigger: 'item',
    // formatter: '{a} <br/>{b} : {c} ({d}%)',
    position: function (point, params, dom, rect, size) {
      // point 是鼠标的位置，格式如 [x, y]
      var x = point[0] * 1.01
      var y = point[1] * 1.01
      // 计算 tooltip 的最佳位置
      var boxWidth = size.contentSize[0]
      var boxHeight = size.contentSize[1]
      var graphWidth = size.viewSize[0]

      // 防止 tooltip 溢出图表右边界
      x = x < graphWidth + boxWidth ? x : x + boxWidth
      x = x < graphWidth - boxWidth ? x : x - boxWidth
      // 防止 tooltip 溢出图表上边界
      y = y < boxHeight ? y : y - boxHeight

      return [x, y]
    }
  },
  grid: {
    left: '5%', // 距离容器左侧的距离
    right: '5%', // 距离容器右侧的距离
    top: '5%', // 距离容器顶部的距离
    bottom: '5%', // 距离容器底部的距离
    containLabel: true // 此选项确保 "label" 也包含在图表区域内，避免被裁剪
  },
  legend: {
    left: 'center',
    top: 'bottom',
    data: ['已注册', '未注册']
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: '学生注册情况',
      type: 'pie',
      radius: '50%',
      center: ['50%', '50%'],
      data: [
        { value: 3335, name: '已注册' },
        { value: 1235, name: '未注册' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

window.addEventListener('resize', function () {
  myChart.resize()
})

onMounted(() => {
  if (chartContainer.value) {
    myChart = echarts.init(chartContainer.value)
    myChart.setOption(option)
  }
})
</script>
