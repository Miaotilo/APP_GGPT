/**
 * process.js - 合作流程
 * 纵向时间轴展示 6 步合作流程
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    stepList: [
      {
        step: 1,
        active: true,
        label: '意向咨询',
        desc: '浏览项目信息后，通过表单或联系方式提交合作意向，我们的顾问将在 24 小时内与你取得联系。'
      },
      {
        step: 2,
        active: false,
        label: '门店资质初审',
        desc: '提交门店营业执照、经营场所照片等基础材料，我们进行资质合规性审核。'
      },
      {
        step: 3,
        active: false,
        label: '合作细则洽谈',
        desc: '双方就合作模式、服务内容、费用结构等细则进行沟通确认，达成一致后签署合作协议。'
      },
      {
        step: 4,
        active: false,
        label: '后台共管绑定',
        desc: '完成抖音后台共管关系绑定，平台方协助门店完成类目准入及账号配置。'
      },
      {
        step: 5,
        active: false,
        label: '团购搭建与运营培训',
        desc: '开展团购选品、页面搭建、内容拍摄、运营技巧等系统培训，帮助门店快速上手。'
      },
      {
        step: 6,
        active: false,
        label: '正式启动同城抖音获客',
        desc: '团购正式上线，配合投流与内容运营，开启同城抖音流量获取，持续跟进优化。'
      }
    ]
  },

  /**
   * 悬浮按钮点击 — 跳转联系我们页
   */
  goContact() {
    wx.switchTab({
      url: '/pages/contact/contact'
    })
  }
})