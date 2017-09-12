siteCategory();

function siteCategory() {
	var siteCategory = document.querySelector(".site-category");
	var liList = siteCategory.getElementsByTagName("li");
	var divs = siteCategory.getElementsByTagName("div");
	//	console.log(liList.length);
	for(var i = 0; i < liList.length; i++) {
		(function(index) {
			liList[index].onmouseover = function() {
				divs[index].style.display = "block";
				divs[index].style.cursor = "pointer";

			}
			liList[index].onmouseout = function() {
				divs[index].style.display = "none";

			}
		})(i);
	}

}

//设置.header-nav-classify里的a鼠标事件
var classify = document.querySelector(".header-nav-classify");
var siteCategory = classify.querySelector(".site-category");
classify.onmouseover = function() {
	siteCategory.style.display = "block";
}
classify.onmouseleave = function() {
	setTimeout(function() {
		siteCategory.style.display = "none";

	}, 2000);

}

siteCategory.onmouseover = function() {
	siteCategory.style.display = "block";
}
siteCategory.onmouseleave = function() {
	siteCategory.style.display = "none";
}