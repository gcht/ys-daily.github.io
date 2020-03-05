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
		  alert('这一段测试程序')

		  viewModel.get('btn1').on('Click',function(){
		    alert('即将跳转到新增页面')
		  })

		}
	}
	return TestExternal;
})
