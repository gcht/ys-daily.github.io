cb.defineInner([], function () {
  var TestExternal = {
    //外部调用方法入口
    doAction: function (name, viewModel) {
      if (this[name]) {
        this[name](viewModel);
      }
    },
    //初始化整个扩展脚本
    init: function (viewModel) {
        alert('扩展脚本执行中')
    }
  }
  return TestExternal;
})
