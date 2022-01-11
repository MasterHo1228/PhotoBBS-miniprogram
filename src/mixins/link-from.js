export default {
  data: {
    // 记录进入页面来源
    from: null,
    // 页面标题
    titlePrefix: null,
    // 标题关键字
    titleKey: null,
    // 完整标题
    fullTitle: null
  },
  methods: {
    changeTitleName() {
      if (this.from && this.titleKey) {
        // 根据获取到的打开来源定义页面标题
        switch (this.from) {
          case 'me':
            this.titlePrefix = '我的'
            break
          case 'user-show':
            this.titlePrefix = 'Ta 发布的'
            break
        }

        // 拼接标题文字并设置
        this.fullTitle = this.titlePrefix + this.titleKey
        wx.setNavigationBarTitle({
          title: this.fullTitle
        })
      } else {
        wx.showToast({
          title: '非法请求！',
          icon: 'error',
          duration: 2000
        })
      }
    }
  }
}
