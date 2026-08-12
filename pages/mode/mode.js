/**
 * mode.js - 共管模式
 * 对比表格 + 模式详解 + FAQ 展开收起
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 对比表格数据
    compareList: [
      { item: '类目入驻', mode: '平台协助，合规门槛低', old: '自主操作，类目受限' },
      { item: '结算方式', mode: '直接结算至门店账户', old: '总部统一结算，到账慢' },
      { item: '品牌独立', mode: '保持门头/店名不变', old: '需变更品牌门头' },
      { item: '运营支持', mode: '全程配套运营培训', old: '自助摸索，支持较少' },
      { item: '费用结构', mode: '按效果付费，透明无隐形', old: '高额抽成+保证金' },
      { item: '退出灵活', mode: '自由选择退出', old: '合约绑定，退出成本高' }
    ],
    // FAQ 数据
    faqList: [
      {
        q: '共管模式安全合规吗？',
        a: '共管模式严格遵循抖音平台规则，通过合规的资质审核流程操作。所有团购上架均在平台允许范围内进行，不存在违规操作风险。',
        open: false
      },
      {
        q: '合作后多久能上线团购？',
        a: '门店提供完整资质材料后，通常在7-15个工作日内完成类目审核与团购搭建上线。具体周期视资质审核进度而定。',
        open: false
      },
      {
        q: '已有抖音账号的门店能合作吗？',
        a: '可以。已有抖音门店账号不影响合作，可根据实际情况选择沿用原有账号或开通新账号，灵活适配门店现有资源。',
        open: false
      },
      {
        q: '合作费用是怎么收取的？',
        a: '服务费用根据门店规模和所需服务内容确定，以签约前双方确认的细则为准。费用透明，无任何隐形成本。',
        open: false
      }
    ]
  },

  /**
   * FAQ 点击展开收起
   */
  toggleFaq(e) {
    const index = e.currentTarget.dataset.index
    const key = `faqList[${index}].open`
    this.setData({
      [key]: !this.data.faqList[index].open
    })
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