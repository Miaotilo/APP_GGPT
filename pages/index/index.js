/**
 * index.js - 首页
 * 顶部Banner、四大优势展示、业务介绍、成功案例轮播
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 成功案例数据
    caseList: [
      {
        id: 1,
        title: '老凤祥黄金 · 深圳旗舰店',
        desc: '上线抖音团购3个月，线上曝光量突破80万+，到店转化率提升35%',
        statsLabel: '月均团购订单',
        statsValue: '200+'
      },
      {
        id: 2,
        title: '周大福 · 广州天河店',
        desc: '共管合作后成功上线珠宝团购，单月GMV突破150万元',
        statsLabel: '月均GMV',
        statsValue: '150万+'
      },
      {
        id: 3,
        title: '中国黄金 · 成都春熙路店',
        desc: '开业即上线团购，首月线上引流到店客户占比超40%',
        statsLabel: '线上引流占比',
        statsValue: '40%+'
      },
      {
        id: 4,
        title: '六福珠宝 · 杭州武林店',
        desc: '通过共管模式解决类目难题，团购上线首周订单量破百',
        statsLabel: '首周订单量',
        statsValue: '100+'
      }
    ],
    // 轮播当前索引
    swiperCurrent: 0
  },

  /**
   * 页面加载
   */
  onLoad() {
    // 页面初始化逻辑
  },

  /**
   * 轮播切换事件
   */
  onSwiperChange(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },

  /**
   * 点击指示圆点切换
   */
  onDotTap(e) {
    const index = e.currentTarget.dataset.index
    this.setData({
      swiperCurrent: index
    })
  },

  /**
   * 悬浮按钮点击 — 跳转联系我们页面（Tab 页使用 switchTab）
   */
  goContact() {
    wx.switchTab({
      url: '/pages/contact/contact'
    })
  }
})