/**
 * contact.js - 联系我们
 * 联系电话 + 微信二维码 + 一键拨打 + 复制微信号
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 联系电话（替换为实际招商热线）
    phoneNumber: '400-888-9999',
    // 企业微信号（替换为实际顾问微信号）
    wechatId: 'zhubao_gongguan_2026',
    // 二维码图片路径（后续替换为真实二维码图片）
    qrCodeImage: '/images/qr_code.png'
  },

  /**
   * 一键拨打咨询热线
   */
  onCallPhone() {
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber,
      success: () => {
        console.log('[拨号] 呼叫成功')
      },
      fail: (err) => {
        // 用户取消或设备不支持
        wx.showToast({
          title: '拨号失败，请稍后重试',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  /**
   * 复制企业微信号
   */
  onCopyWechat() {
    const wechatId = this.data.wechatId
    wx.setClipboardData({
      data: wechatId,
      success: () => {
        wx.showToast({
          title: '微信号已复制，打开微信添加',
          icon: 'success',
          duration: 2500
        })
      },
      fail: () => {
        wx.showToast({
          title: '复制失败，请手动记录微信号',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  /**
   * 保存二维码到相册（后续替换为真实二维码后启用）
   * 当前为占位提示
   */
  onSaveQRCode() {
    wx.showToast({
      title: '请先替换为真实二维码图片',
      icon: 'none',
      duration: 2000
    })

    /* ================================================
     * 【后续替换为真实二维码时，使用以下代码替换上方提示】
     *
     * wx.showLoading({ title: '保存中...', mask: true })
     *
     * wx.downloadFile({
     *   url: this.data.qrCodeImage,  // 或使用本地路径
     *   success: (res) => {
     *     wx.saveImageToPhotosAlbum({
     *       filePath: res.tempFilePath,
     *       success: () => {
     *         wx.hideLoading()
     *         wx.showToast({ title: '二维码已保存', icon: 'success' })
     *       },
     *       fail: () => {
     *         wx.hideLoading()
     *         wx.showToast({ title: '保存失败，请手动截图保存', icon: 'none' })
     *       }
     *     })
     *   },
     *   fail: () => {
     *     wx.hideLoading()
     *     wx.showToast({ title: '下载失败，请稍后重试', icon: 'none' })
     *   }
     * })
     * ================================================ */
  }
})