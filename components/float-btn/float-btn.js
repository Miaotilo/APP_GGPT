/**
 * float-btn.js - 全局悬浮按钮组件
 * 功能：点击触发 floatclick 事件，由页面层决定导航或表单提交行为
 * 使用方式：<float-btn bind:floatclick="onFloatClick" />
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {},

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 点击事件 — 触发自定义事件交由页面处理
     */
    onTap() {
      this.triggerEvent('floatclick')
    }
  }
})