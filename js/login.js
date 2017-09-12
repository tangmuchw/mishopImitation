//			设置账号登录和扫码登录
var loginForm = document.getElementById("login-form");
var formNav = loginForm.firstElementChild;
//			console.log(formNav.innerHTML);
var aList = formNav.getElementsByTagName("a");
//			console.log(aList[1].innerHTML);
//			console.log(loginForm.children[1].innerHTML);
aList[0].addEventListener("click", function() {
	loginForm.children[1].style.display = "block";
	loginForm.children[2].style.display = "none";
	aList[0].style.color = "#F56600";

	aList[1].style.color = "#666666";

})
aList[0].onmouseover = function() {
	aList[0].style.color = "#F56600";
}
aList[0].onmouseout = function() {
	aList[0].style.color = "#666666";
}
aList[1].addEventListener("click", function() {
	loginForm.children[1].style.display = "none";
	loginForm.children[2].style.display = "block";
	aList[0].style.color = "#666666";
	aList[1].style.color = "#F56600";

})
//验证表单
window.onload = function() {
	username.focus();
}

function confirmForm() {
	return isGo;

}
var infoInput = document.getElementById("info-input");
var username = document.getElementById("username");
var pwd = document.getElementById("pwd");
var isGo = true;
//判断username是否有效
username.onblur = function() {
	var phone = parseInt(username.value);
	//				console.log(typeof phone);
	if(isGo) {
		var regNum = /^1[3|5|7|8]{1}\d{9}/g;
		var regEmail = /^\w{1,15}@\w{1,}\.(com)$/g;
		var resNum = regNum.test(username.value);
		var resEmail = regEmail.test(username.value);
		//					console.log(resNum);
		//					console.log(resEmail);
		//					console.log(resEmail || resNum);

		if(resNum || resEmail) {
			pwd.focus();
			isGo = true;

		} else {
			username.style.border = "1px solid #F56600";
			infoInput.children[4].style.display = "block";
			if(username.value == "") {
				infoInput.children[2].style.display = "block";
				infoInput.children[4].style.display = "none";
				isGo = false;

			}
			isGo = false;
		}
	} else {
		isGo = true;
	}

}
username.onfocus = function() {
	isGo = true;
	infoInput.children[2].style.display = "none";
	infoInput.children[4].style.display = "none";
	username.style.border = "1px solid #666666";
	infoInput.children[3].style.display = "none";
	pwd.style.border = "1px solid #666666";

}
//			判断密码
pwd.onblur = function() {
	if(isGo) {
		if(pwd.value == "") {
			if(infoInput.children[4].style.display == "block") {
				infoInput.children[4].style.display = "none";
			}
			infoInput.children[3].style.display = "block";
			pwd.style.border = "1px solid #F56600";
			isGo = false;

		} else {
			isGo = true;

		}
	} else {
		isGo = true;
	}

}
pwd.onfocus = function() {
	infoInput.children[3].style.display = "none";
	pwd.style.border = "1px solid #666666";
}


resetA(document.getElementById("form-nav"));
//将#form-nav里的a标签设置为功能性a标签，即点击后页面不刷新，滚动条不移动到页面顶端
function resetA(id) {
	var aList = id.getElementsByTagName("a");
//	console.log(aList.length)
	for(var i = 0; i < aList.length; i++) {
		aList[i].addEventListener("click", function() {
			var even = event || window.event;
//			if(even.target.href.lastIndexOf(".html")) {
//				location.href = even.target.href;
//			} else {
				even.preventDefault();
//			}
		});
	}
}