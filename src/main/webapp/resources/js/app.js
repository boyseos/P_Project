"use strict"; // 확실하게 코딩해라.
var app = app || {}; // app가있으면 가져다쓰고 없으면 app를 만들어라
app = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾을 수 없습니다.'; // 상수
	let _,js,router_js; // 맴버변수, _<-임시변수
	let run =x=> $.getScript(x+'/resources/js/cmm/router.js',	()=>{ $.extend(new Session(x));
			onCreate(x)
		});
	let init =x=>{
		$.getScript(router_js)
		router_js = x+'/resources/cmm/router.js'
		_ = $.ctx();
		js = $.js();
	}
	let onCreate =x=>{
		init(x)
		$('Hello World').appendTo('body')
		$.getJSON(x+'/xx/', d=>{
			alert(d)
		})
	}
	return {run}
		
})();