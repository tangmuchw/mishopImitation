//更多的操作
moreChoice();

function moreChoice() {
	var filterBoxItems = document.querySelectorAll(".filter-box-item");
	//console.log(filterBoxItems.length);

	for(var i = 0; i < filterBoxItems.length; i++) {
		//	console.log(filterBoxItems[i].children[1].onclick);
		filterBoxItems[i].children[1].onclick = function() {
			console.log("未点击前状态---" + this.getAttribute("isClick"));

			if(this.getAttribute("isClick")) {
				//			点击前isClick属性为null
				this.parentNode.children[3].style.display = "none";
				//			去除isClick属性
				this.removeAttribute("isClick");

			} else {
				//			点击后isClick属性存在了
				this.parentNode.children[3].style.display = "block";
				this.setAttribute("isClick", true);

			}
//			console.log("点击后前状态---" + this.getAttribute("isClick"));
		}

	}
}

//动态创建.gooditems .thumb 中.thumb-list里的li
//创建一个json对象用来存放在.thumb-lis li里的图片地址
var jsonImgSrc = [{
		smallImgSrc: ["img/searchpage/goodsItems/samll/01/pms_1493261826.22337469!34x34.jpg",
			"img/searchpage/goodsItems/samll/01/pms_1493261828.23444007!34x34.jpg",
			"img/searchpage/goodsItems/samll/01/pms_1493261830.47158342!34x34.jpg"
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/01/pms_1493261826.22337469!200x200.jpg",
			"img/searchpage/goodsItems/big/01/pms_1493261828.23444007!200x200.jpg",
			"img/searchpage/goodsItems/big/01/pms_1493261830.47158342!200x200.jpg"
		]

	}, {
		smallImgSrc: ["img/searchpage/goodsItems/samll/02/pms_1499305934.58053598!34x34.jpg",
			"img/searchpage/goodsItems/samll/02/pms_1499306051.9153292!34x34.jpg",
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/02/pms_1499305934.58053598!200x200.jpg",
			"img/searchpage/goodsItems/big/02/pms_1499306051.9153292!200x200.jpg",
		]
	}, {
		smallImgSrc: ["img/searchpage/goodsItems/samll/01/pms_1493261826.22337469!34x34.jpg",
			"img/searchpage/goodsItems/samll/01/pms_1493261828.23444007!34x34.jpg",
			"img/searchpage/goodsItems/samll/01/pms_1493261830.47158342!34x34.jpg"
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/01/pms_1493261826.22337469!200x200.jpg",
			"img/searchpage/goodsItems/big/01/pms_1493261828.23444007!200x200.jpg",
			"img/searchpage/goodsItems/big/01/pms_1493261830.47158342!200x200.jpg"
		]

	}, {
		smallImgSrc: ["img/searchpage/goodsItems/samll/01/pms_1493261826.22337469!34x34.jpg",
			"img/searchpage/goodsItems/samll/01/pms_1493261828.23444007!34x34.jpg",
			"img/searchpage/goodsItems/samll/01/pms_1493261830.47158342!34x34.jpg"
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/01/pms_1493261826.22337469!200x200.jpg",
			"img/searchpage/goodsItems/big/01/pms_1493261828.23444007!200x200.jpg",
			"img/searchpage/goodsItems/big/01/pms_1493261830.47158342!200x200.jpg"
		]

	}, {
		smallImgSrc: ["img/searchpage/goodsItems/samll/02/pms_1499305934.58053598!34x34.jpg",
			"img/searchpage/goodsItems/samll/02/pms_1499306051.9153292!34x34.jpg",
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/02/pms_1499305934.58053598!200x200.jpg",
			"img/searchpage/goodsItems/big/02/pms_1499306051.9153292!200x200.jpg",
		]
	}, {
		smallImgSrc: ["img/searchpage/goodsItems/samll/02/pms_1499305934.58053598!34x34.jpg",
			"img/searchpage/goodsItems/samll/02/pms_1499306051.9153292!34x34.jpg",
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/02/pms_1499305934.58053598!200x200.jpg",
			"img/searchpage/goodsItems/big/02/pms_1499306051.9153292!200x200.jpg",
		]
	}, {
		smallImgSrc: ["img/searchpage/goodsItems/samll/02/pms_1499305934.58053598!34x34.jpg",
			"img/searchpage/goodsItems/samll/02/pms_1499306051.9153292!34x34.jpg",
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/02/pms_1499305934.58053598!200x200.jpg",
			"img/searchpage/goodsItems/big/02/pms_1499306051.9153292!200x200.jpg",
		]
	}, {
		smallImgSrc: ["img/searchpage/goodsItems/samll/02/pms_1499305934.58053598!34x34.jpg",
			"img/searchpage/goodsItems/samll/02/pms_1499306051.9153292!34x34.jpg",
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/02/pms_1499305934.58053598!200x200.jpg",
			"img/searchpage/goodsItems/big/02/pms_1499306051.9153292!200x200.jpg",
		]
	}, {
		smallImgSrc: ["img/searchpage/goodsItems/samll/02/pms_1499305934.58053598!34x34.jpg",
			"img/searchpage/goodsItems/samll/02/pms_1499306051.9153292!34x34.jpg",
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/02/pms_1499305934.58053598!200x200.jpg",
			"img/searchpage/goodsItems/big/02/pms_1499306051.9153292!200x200.jpg",
		]
	}, {
		smallImgSrc: ["img/searchpage/goodsItems/samll/02/pms_1499305934.58053598!34x34.jpg",
			"img/searchpage/goodsItems/samll/02/pms_1499306051.9153292!34x34.jpg",
		],
		bigImgSrc: ["img/searchpage/goodsItems/big/02/pms_1499305934.58053598!200x200.jpg",
			"img/searchpage/goodsItems/big/02/pms_1499306051.9153292!200x200.jpg",
		]
	}

]

var goodsListBox = document.getElementById("goods-list-box");
createThumbListLi(goodsListBox);
adjustGoodsListBox(goodsListBox);
//动态创建.thumb-list里的li
function createThumbListLi(id) {
	var goodsItems = id.querySelectorAll(".goods-items");
	for(var k = 0; k < goodsItems.length; k++) {
		//		.thumb-list是ul里的li
		var thumbList = goodsItems[k].querySelector(".thumb-list");
		//				console.log(jsonImgSrc[k].smallImgSrc.length);

		(function(outer) {
			for(var j = 0; j < jsonImgSrc[outer].smallImgSrc.length; j++) {
				//			console.log(k);
				//				console.log(j + "---" + jsonImgSrc[outer].smallImgSrc)
				var createLi = document.createElement("li");
				var liA = document.createElement("a");
				liA.href = "#";
				var liAImg = document.createElement("img");
				liAImg.src = jsonImgSrc[outer].smallImgSrc[j];
				liA.appendChild(liAImg);
				createLi.appendChild(liA);
				thumbList.appendChild(createLi);

			}
		})(k);

	}

}
//调整#goods-list-box .thumb-list
function adjustGoodsListBox(id) {
	var thumbList = id.querySelectorAll(".thumb-list");
	//	所有的thumb-list
	for(var i = 0; i < thumbList.length; i++) {
		//设置thumb-list居中的位置
		var listChildNum = thumbList[i].children.length;
		//		console.log(listChildNum);
		//		console.log(thumbList.length);
		var newMarginLeft = (listChildNum * 34 + 10 * (listChildNum - 1)) / 2;
		thumbList[i].style.marginLeft = -newMarginLeft + "px";

		//设置.thumb-list里的li鼠标悬停效果
		var liList = thumbList[i].getElementsByTagName("li");

		for(var j = 0; j < liList.length; j++) {
			liList[j].addEventListener("mouseover", function() {
				var newLiList = this.parentNode.children;
				//				console.log( newLiList.length);
				//去掉未被选中的li的边框样式
				//动态改变.figure里img的src
				for(var k = 0; k < newLiList.length; k++) {
					newLiList[k].style.borderColor = "#E0E0E0";

				}
				//给选中的liList中的li添加新边框颜色
				this.style.borderColor = "#F97D28";

			});
		}
	}

}

//设置.thumb-list里的li鼠标悬浮时#figure a标签里的img的src
thumbListLiMouseOver(goodsListBox);

function thumbListLiMouseOver(id) {
	var goodsItems = id.querySelectorAll(".goods-items");
	for(var k = 0; k < goodsItems.length; k++) {

		(function(outer) {
			//			console.log("outer---" + outer);
			//		.thumb-list是ul里的li
			var thumbList = goodsItems[outer].querySelector(".thumb-list");
			//		thumbList里的li设置为liList
			var liList = thumbList.getElementsByTagName("li");
			//			console.log("li---" + liList.length);
			//			console.log("bigImg---" + jsonImgSrc[all].bigImgSrc.length);
			for(var i = 0; i < jsonImgSrc[outer].bigImgSrc.length; i++) {
				//				console.log("i---" + i);
				liAddEvent(i);

				function liAddEvent(i) {
					liList[i].addEventListener("mouseover", function() {
						var bigImgSrc = jsonImgSrc[outer].bigImgSrc[i];
						//						console.log(bigImgSrc);
						var newGoodsItem = this.parentNode.parentNode.parentNode;
						var imgFigure = newGoodsItem.firstElementChild.firstElementChild.firstElementChild;
						imgFigure.src = bigImgSrc;

					});
				}

			}

		})(k);

	}
}

//调用resetA()
resetA(document.getElementById("filter-box"));

//将a标签设置为功能性a标签，即点击后页面不刷新，滚动条不移动到页面顶端
function resetA(id) {
	var aList = id.querySelectorAll(".moreChoice");
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

//console.log(isIE());
//判断是否是IE浏览器  
function isIE() {
	var userAgent = navigator.userAgent; //取得浏览器中的userAgent字符串
	var isOpera = userAgent.indexOf("Opera") > -1; //判断是否为Opera浏览器
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
	//	console.log(isIE);
	if(isIE) {
		return ture;
	} else {
		return false;
	}

}
//调整.xm-pagers-wrapper的动画效果
adjustxmPagerWrapper();

function adjustxmPagerWrapper() {
	//获取对象xmCarouselWrapperUlList
	var xmCarouselWrapperUlList = document.getElementById("xm-carousel-wrapper-olList");
	//	获得xmCarouselWrapperUlList下的5个ul
	var carouselOlList = xmCarouselWrapperUlList.querySelectorAll(".xm-carousel-wrapper-ol");
	//	console.log(carouselOlList.length);
	//xmPagerOlLiList圆圈按钮
	var xmPagersWrapperUl = document.getElementById("xm-pagers-wrapper-ul");
	var xmPagerUlLiList = xmPagersWrapperUl.getElementsByTagName("li");
	//获取当前xmCarouselWrapperUlList的类样式的left
	var currentLeft = 0;
	//	console.log(isIE());
	if(isIE()) {
		currentLeft = parseFloat(xmCarouselWrapperUlList.currentStyle.left);
	} else {
		currentLeft = parseFloat(document.defaultView.getComputedStyle(xmCarouselWrapperUlList, null).left);
	}
	//	console.log(currentLeft);
	//第一个圆圈
	xmPagerUlLiList[0].addEventListener("click", function() {
		liUnclickStyle();
		liClickStyle(this);
		xmCarouselWrapperUlList.style.left = 0 + "px";
		liSpanEvent();

	});
	//第二个圆圈
	xmPagerUlLiList[1].addEventListener("click", function() {
		liUnclickStyle();
		liClickStyle(this);
		xmCarouselWrapperUlList.style.left = -1226 + "px";
		liSpanEvent();
	});
	//第三个圆圈
	xmPagerUlLiList[2].addEventListener("click", function() {
		liUnclickStyle();
		liClickStyle(this);
		xmCarouselWrapperUlList.style.left = -2452 + "px";
		liSpanEvent();

	});
	//第四个圆圈
	xmPagerUlLiList[3].addEventListener("click", function() {
		liUnclickStyle();
		liClickStyle(this);
		xmCarouselWrapperUlList.style.left = -3678 + "px";
		liSpanEvent();

	});

	//xmPagerOlLiList里的li点击后地样式改变
	function liClickStyle(id) {
		id.style.padding = "5px";
		var span = id.getElementsByTagName("span");
		span[0].style.width = "8px";
		span[0].style.height = "8px";
		span[0].style.borderRadius = "8px";
		span[0].style.border = "2px solid #FF6700";
		span[0].style.backgroundColor = "#F5F5F5";
		span[0].style.cursor = "default";

	}
	//xmPagerOlLiList里的li为被点击后地样式改变
	function liUnclickStyle() {
		for(var i = 0; i < xmPagerUlLiList.length; i++) {
			var span = xmPagerUlLiList[i].getElementsByTagName("span");
			xmPagerUlLiList[i].style.padding = "6px";
			span[0].style.width = "4px";
			span[0].style.height = "4px";
			span[0].style.borderRadius = "6px";
			span[0].style.border = "2px solid #B0B0B0";
			span[0].style.backgroundColor = "#B0B0B0";
			span[0].style.cursor = "pointer";

		}

	}
	//id为当前对象

	function liSpanEvent() {
		var xmPagersWrapperUl = document.getElementById("xm-pagers-wrapper-ul");
		var span = xmPagersWrapperUl.getElementsByTagName("span");
		//		console.log(span[0].style.cursor);
		for(var i = 0; i < xmPagerUlLiList.length; i++) {
			var span = xmPagerUlLiList[i].getElementsByTagName("span");
			console.log(span[0].style.cursor);
			if(span[0].style.cursor == "pointer") {
				//本身全灰，悬浮变橙
				span[0].onmouseout = function() {
					this.style.border = "2px solid #B0B0B0";
					this.style.backgroundColor = "#B0B0B0";
				}
				span[0].onmouseover = function() {
					this.style.border = "2px solid #FF6700";
					this.style.backgroundColor = "#FF6700";
				}
			} else {
				//什么都不做，保持原来的样子，外橙内灰
				span[0].onmouseout = function() {
					this.style.border = "2px solid #FF6700";
					this.style.backgroundColor = "#F5F5F5";
				}
				span[0].onmouseover = function() {
					this.style.border = "2px solid #FF6700";
					this.style.backgroundColor = "#F5F5F5";
				}

			}
		}

	}
}