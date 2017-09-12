change(document.getElementById("applicance"));
change(document.getElementById("smart"));
change(document.getElementById("match"));
change(document.getElementById("accessories"));
change(document.getElementById("around"));
//	设置applicance，smart，match等title-right的切换效果
function change(id) {
	var str = id;
	var titleRight = str.querySelector(".title-right");
	var titleLiList = titleRight.getElementsByTagName("li");
	var span8Items = str.querySelector(".span8Items");
	var itemsUl = span8Items.getElementsByTagName("ul");
	//console.log(titleLiList.length);
	//console.log(itemsUl.length);
	for(var p = 0; p < titleLiList.length; p++) {
		titleLiList[p].setAttribute("index", p);
		//	console.log(titleLiList[p].getAttribute("index"));
		titleLiList[p].onmouseover = function() {
			var titleLiIndex = this.getAttribute("index");
			titleLiList[0].removeAttribute("class");
			//去除其他titleLi的样式
			for(var k = 0; k < titleLiList.length; k++) {
				if(k == titleLiIndex) {
					titleLiList[titleLiIndex].style.color = "#FC7800";
					titleLiList[titleLiIndex].style.borderBottom = "2px solid #FC7800";
				} else {
					titleLiList[k].style.color = "#333";
					titleLiList[k].style.borderBottom = "none";
				}
			}
			//显示lititle：Li对应的itemsUl
			for(var u = 0; u < itemsUl.length; u++) {
				if(u == titleLiIndex) {
					itemsUl[titleLiIndex].style.display = "block";
				} else {
					itemsUl[u].style.display = "none";
				}
			}

		}
	}

}
//设置spanHotImg的效果
var spanHotImgs = document.querySelectorAll(".spanHotImg");
//	console.log(spanHotImgs.length);
for(var i = 0; i < spanHotImgs.length; i++) {
	spanHotImgs[i].addEventListener("mouseover", function() {
		var styleTop = parseFloat(document.defaultView.getComputedStyle(this, null).top);
		styleTop -= 5;
		this.style.top = styleTop + "px";
		this.style.boxShadow = "-5px 5px 10px #EBEBEB,5px 5px 10px #EBEBEB,0px 15px 10px #EBEBEB,0px 0px 0px #EBEBEB";

	})
	spanHotImgs[i].addEventListener("mouseout", function() {
		var styleTop = parseFloat(document.defaultView.getComputedStyle(this, null).top);
		styleTop += 5;
		this.style.top = styleTop + "px";
		this.style.boxShadow = "none";

	})
}
//设置everyItems的效果
var everyItems = document.querySelectorAll(".everyItems");
for(var j = 0; j < everyItems.length; j++) {

	everyItems[j].addEventListener("mouseover", function() {
		var review = this.querySelector(".review-wrapper");
		var styleTop = parseFloat(document.defaultView.getComputedStyle(this, null).top);
		styleTop -= 5;
		//			console.log(styleTop);
		this.style.top = styleTop + "px";
		this.style.boxShadow = "-5px 5px 10px #EBEBEB,5px 5px 10px #EBEBEB,0px 15px 10px #EBEBEB,0px 0px 0px #EBEBEB";
		//设置review-wrapper
		review.style.display = "block";
		review.style.bottom = "0px";
		review.onmouseover = function() {
			review.style.cursor = "pointer";
		}

		//			
		//			var btm = 33;
		//			var time = 0;
		//			var reviewBtm = parseFloat(document.defaultView.getComputedStyle(review, null).bottom);
		//			console.log(reviewBtm);
		//			if(reviewBtm == -66) {
		//				var interval = setInterval(function() {
		//					var reviewBtm = parseFloat(document.defaultView.getComputedStyle(review, null).bottom);
		//					btm += reviewBtm;
		//					console.log(reviewBtm);
		//					
		//					review.style.bottom = btm + "px";
		//					++time;
		//					if(time == 2) {
		//						clearInterval(interval);
		//					}
		//				}, 500)
		//			}

	})
	everyItems[j].addEventListener("mouseout", function() {
		var review = this.querySelector(".review-wrapper");
		var styleTop = parseFloat(document.defaultView.getComputedStyle(this, null).top);
		styleTop += 5;
		this.style.top = styleTop + "px";
		this.style.boxShadow = "none";
		//			console.log(styleTop);
		//设置review-wrapper
		var review = this.querySelector(".review-wrapper");
		review.style.display = "none";
		review.style.bottom = "-66px";

	})
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

//设置star-goods里的轮播效果
starGoodsCarousel();

function starGoodsCarousel() {
	var arrowLeft = document.getElementById("arrows-left");
	var arrowRight = document.getElementById("arrows-right");
	var area = document.getElementById("area");

	/*	能选颜色#B0B0B2
		不能选颜色#E0E0E1
		悬浮颜色#FF6B51*/
	//	arrowLeft的mouseover事件
	arrowLeft.onmouseover = function() {
		var areaLeftInit = getAreaLeftInit();
		//		console.log("arrowLeft---" + areaLeftInit);
		switch(areaLeftInit) {
			case 0:
				//			当前右箭头未点击
				this.style.cursor = "default";
				break;

			case -1226:
				//			当前右箭头点击了
				this.style.cursor = "pointer";
				this.style.color = "#FF6B51";
				break;

		};

	}
	//	arrowLeft的mouseovut事件
	arrowLeft.onmouseout = function() {
		var areaLeftInit = getAreaLeftInit();
		switch(areaLeftInit) {
			case 0:
				//			鼠标点击了，离开
				this.style.cursor = "default";
				break;

			case -1226:
				//			鼠标离开，未点击
				this.style.color = "#B0B0B2";
				break;

		};
	}
	arrowLeft.addEventListener("click", function() {
		arrowLeftClick();
	})

	//设置arrowLeftClick(),area左移动
	function arrowLeftClick() {
		//		右箭头设置为能选颜色
		arrowRight.style.color = "#B3B0B0"; //能选颜色
		//		当前对象,设置为不能选颜色
		arrowLeft.style.color = "#E0E0E0"; //不能选颜色
		arrowLeft.style.cursor = "default";
		var time = 0; //结束时间标志记录
		var areaLeftInit = getAreaLeftInit();
		if(areaLeftInit == 0) {
			//什么都不做

		} else {
			//			定时设置
			var interval = setInterval(function() {
				var currentStyleLeft = getAreaLeftInit();
				++time;
				switch(time) {
					case 1:
						currentStyleLeft += 234;
						area.style.left = currentStyleLeft + "px";

						break;
					case 6:
						clearInterval(interval);
						break;
					default:
						currentStyleLeft += 248;
						area.style.left = currentStyleLeft + "px";
						break;
				};

			}, 10)
		}

	}

	//	arrowRight的onmouseover事件
	arrowRight.onmouseover = function() {
		var areaLeftInit = getAreaLeftInit();
		switch(areaLeftInit) {
			case -1226:
				//			当前左箭头未点击
				this.style.cursor = "default";
				break;

			case 0:
				//			当前左箭头点击了
				this.style.cursor = "pointer";
				this.style.color = "#FF6B51";
				break;

		};

	}
	//	arrowRight的onmouseout件
	arrowRight.onmouseout = function() {
		var areaLeftInit = getAreaLeftInit();
		switch(areaLeftInit) {
			case -1226:
				//			鼠标点击了，离开
				this.style.cursor = "default";
				break;

			case 0:
				//			鼠标离开，未点击
				this.style.color = "#B0B0B2";
				break;

		};

	}
	//	右箭头的点击事件
	arrowRight.addEventListener("click", function() {
		arrowRightClick();

	})

	//	设置arrowRightClick(),area右移动
	function arrowRightClick() {
		//点击了，当前对象颜色改为不能选
		arrowRight.style.color = "#E0E0E1";
		arrowRight.style.cursor = "default";
		//左箭头颜色改为能选
		arrowLeft.style.color = "#B0B0B2";
		var time = 0; //结束时间标志记录
		var areaLeftInit = getAreaLeftInit();
		if(areaLeftInit == -1226) {

			//什么都不做
		} else {
			//			area.style.left = -1226 + "px";
			//单个goodsitems的width为234px 右边距为14px
			var interval = setInterval(function() {
				var currentStyleLeft = getAreaLeftInit();
				++time;
				if(time == 5) {
					currentStyleLeft -= 234;
					area.style.left = currentStyleLeft + "px";
					clearInterval(interval);
				} else {
					currentStyleLeft -= 248;
					area.style.left = currentStyleLeft + "px";

				}

			}, 10)
		}
	}

	//得到areaLeftInit的值
	function getAreaLeftInit() {
		var areaLeftInit;
		if(isIE()) {
			areaLeftInit = parseFloat(area.currentStyle.left);

		} else {
			areaLeftInit = parseFloat(document.defaultView.getComputedStyle(area, null).left);

		}
		return areaLeftInit;
	}

	//设置star-goods里的轮播效果自动轮播效果
	/*function autoCarousel() {
		var starGoodsInterval = setInterval(function() {
			var areaLeftInit = parseFloat(document.defaultView.getComputedStyle(area, null).left);
			//		console.log(styleLeftInit);
			switch(areaLeftInit) {
				case 0:
					arrowRightClick();
					break;
				case -1226:
					arrowLeftClick();
					break;

			}

		}, 3000);
		return starGoodsInterval;
	}

	function clearAutoCarousel() {
		if(autoCarousel()) {
			clearInterval(autoCarousel());
		}

	}*/

}
//设置#hero-goods的轮播效果
//设置箭头轮播效果
//设置箭头轮播效果
var arrSliderImg = [
	"img/homepage/xmad_14952091121315_yZtew.jpg",
	"img/homepage/xmad_14952089770715_otDpj.jpg",
	"img/homepage/xmad_14951141608572_igECG.jpg",
	"img/homepage/xmad_14944040497808_tjOJz.jpg",
	"img/homepage/5753d5e0-a89b-4a8b-ab00-a42eb66eb6f5.jpg"

];
var sliderImg = document.getElementById("sliderImg");
var prev = document.querySelector(".ui-prev");
var next = document.querySelector(".ui-next");
var index = 0; //记录当前轮播的图片位置
prev.addEventListener("click", function() {
	index--;
	if(index < 0) {
		index = arrSliderImg.length-1;
	}
	sliderImg.src = arrSliderImg[index];
	removeClassLi();
	liList[index].className = "active";

	//	console.log(index);

})
next.addEventListener("click", function() {
	//	console.log(arrSliderImg.length);
	index++;
	if(index > arrSliderImg.length - 1) {
		index = 0;
	}
	//		console.log(index);
	sliderImg.src = arrSliderImg[index];
	removeClassLi();
	liList[index].className = "active";

	//	console.log(index);

})

//设置定时轮播
setInterval(function() {
	index++;
	if(index > arrSliderImg.length - 1) {
		index = 0;
	} else if(index < 0) {
		index = arrSliderImg.length;
	}
	sliderImg.src = arrSliderImg[index];
	removeClassLi();
	liList[index].className = "active";

	//		for(var i = 0; i < arrSliderImg.length; i++) {
	//			sliderImg.src = arrSliderImg[i];
	//		}
}, 3000)
//设置圆圈轮播效果
//动态的创建圆圈个数
var homeSlider = document.querySelector(".home-slider");
var div = document.createElement("div");
var ul = document.createElement("ul");
div.className = "ui-pager";
homeSlider.appendChild(div);
div.appendChild(ul);
//	console.log(arrSliderImg.length)
for(var i = 0; i < arrSliderImg.length; i++) {
	var li = document.createElement("li");
	li.setAttribute("index", i);
	if(i == 0) {
		li.className = "active";
	}
	li.addEventListener("click", function() {
		removeClassLi();
		sliderImg.src = arrSliderImg[this.getAttribute("index")];
		this.className = "active";

	})
	ul.appendChild(li);
}
//	去掉li的样式
var liList = ul.getElementsByTagName("li");

function removeClassLi() {
	for(var i = 0; i < liList.length; i++) {
		liList[i].removeAttribute("class");
	}

}

//设置hero-goods-menu的切换效果
heroGoodsMenu();
function heroGoodsMenu(){
	var heroGoodsMenu = document.getElementById("hero-goods-menu");
	var liList  = heroGoodsMenu.getElementsByTagName("li");
	var divs = heroGoodsMenu.getElementsByTagName("div");
//	console.log(liList.length);
	for(var i=0;i<liList.length;i++){
		(function (index){
			liList[index].onmouseover =function(){
				divs[index].style.display = "block";
				divs[index].style.cursor = "pointer";
				
			}
			liList[index].onmouseout =function(){
				divs[index].style.display = "none";
				
			}
		})(i);
	}
}

//	var divs = document.getElementById("hero-goods-menu").getElementsByTagName("div");
//	divs.onmouseover = function(){
//		
//	}
//	设置hearderNav
//	var headerNavLiList = document.getElementById("headerNav").getElementsByTagName("li");
//	for(var i = 1; i < headerNavLiList.length-3; i++) {
// 		headerNavLiList.onmouseover = function(){
// 			headerNavLiList.children[1].style.display = "block";
// 		}
//	}