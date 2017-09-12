//	设置keywordList
	//	var main = document.getElementById("main");
	var keywordList = document.getElementById("keywordList");
	keywordList.onmouseover = function() {
		searchText.style.border = "1px solid #FF6700";
		searchBtn.style.border = "1px solid #FF6700";
		searchBtn.style.borderLeft = "0px"

	}
	keywordList.onmouseleave = function() {
		keywordList.style.display = "none";
	}

	//	设置searchbtn的事件
	var searchBtn = document.getElementById("search-btn");
	searchBtn.onmouseover = function() {
		searchBtn.style.border = "0px";
		searchBtn.setAttribute("src", "img/header/search-icon-hover.png");
		keywordList.style.display = "none";

	}
	searchBtn.onmouseleave = function() {
		searchBtn.style.border = "1px solid #CCCCCC";
		searchBtn.setAttribute("src", "img/header/seaerch-icon.png");
	}
	var searchText = document.getElementById("search-text")
	searchText.onmouseover = function() {
		searchText.style.border = "1px solid #FF6700";
		//		searchText.style.border-right = "0px";
		searchBtn.style.border = "1px solid #FF6700";
		searchBtn.style.borderLeft = "0px"
		searchText.parentNode.children[3].style.display = "block";
	}

	searchText.onmouseout = function() {
		searchText.style.border = "1px solid #CCCCCC";
		searchBtn.style.border = "1px solid #CCCCCC";
		searchBtn.style.borderLeft = "0px";
		//		searchText.parentNode.children[3].style.display = "none";
	}