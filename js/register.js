	var regNum = document.getElementById("regNum");
			var code = document.getElementById("code");
			var warns = document.querySelectorAll(".warning");
			var isGo = true;
//			console.log(warns[1].innerHTML);
			function comfirmForm() {
				return isGo;
			}
//			window.onload = function() {
//				regNum.focus();
//			}
			var regPhone = /^1[3|5|7|8]{1}\d{9}/g;
//			regNum的有效性验证
			regNum.addEventListener("blur", function() {
				if(regPhone.test(regNum.value)) {
					code.focus();
					isGo = true;
				} else {
					regNum.style.border = "1px solid #F56600";
					if(regNum.value == "") {
						warns[0].style.display = "block";
						isGo = false;

					} else {
						warns[1].style.display = "block";
						isGo = false;
					}
				}

			})
			regNum.addEventListener("focus", function() {
				warns[0].style.display = "none";
				warns[1].style.display = "none";
				regNum.style.border = "1px solid #E8E8E8";
				isGo = true;
			})
//			code的有效性验证
			code.addEventListener("blur", function() {
				if(code.value == "PF8QX") {
					isGo = true;
				} else {
					code.style.border = "1px solid #F56600";
					if(code.value == "") {
						warns[2].style.display = "block";
						isGo = false;
					} else {
						warns[3].style.display = "block";
						isGo = false;
						
					}
				}
			})
			code.addEventListener("focus", function() {
				warns[2].style.display = "none";
				warns[3].style.display = "none";
				code.style.border = "1px solid #E8E8E8";
				isGo = true;

			})