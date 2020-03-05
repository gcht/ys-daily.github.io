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
		  //alert('这一段扩展脚本'+ (new Date()).toString());
alert('这一段扩展脚本');
// 		  viewModel.get('btn1').on('click',function(){
// 		    alert('即将跳转到新增页面')
// 		  })
		
// 			 viewModel.on('beforemyAction1',function(){
// 		    alert('before即将跳转到新增页面')
				 
// 				  viewModel.on('afteryAction1',function(){
// 		    alert('after即将跳转到新增页面')
// 		  })
		
// 				 viewModel.on('beforeAddExecute',function(){
// 		    alert('即将跳转到新增页面......beforeAddExecute')
// 		  })
				 
// 				 viewModel.on('beforeAdd',function(){
// 		    alert('即将跳转到新增页面......beforeAdd')
// 		  })
				
		

		}
	}
	return TestExternal;
})
