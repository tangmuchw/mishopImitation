//创建一个存放商品大图src和小图src的json对象jsonGoodsDetail
var jsonGoodsDetail = {
	imgSamllSrc: ["img/goodsdetail/goodsSmallPic/pms_1492677587.51797274!60x60.jpg",
		"img/goodsdetail/goodsSmallPic/pms_1492677587.53744519!60x60.jpg",
		"img/goodsdetail/goodsSmallPic/pms_1492677587.5184147!60x60.jpg"
	],
	imgBigSrc: ["img/goodsdetail/goodsBigPic/pms_1492677587.51797274!482x482.jpg",
		"img/goodsdetail/goodsBigPic/pms_1492677587.53744519!482x482.jpg",
		"img/goodsdetail/goodsBigPic/pms_1492677587.5184147!482x482.jpg",
	]
};

//商品详情#goods-detail里.goods-small-pic li点击，更换.goods-big-pic的img的src
smallPicClick();

function smallPicClick() {
	var goodsDetail = document.getElementById("goods-detail");
	var goodsSamllPic = goodsDetail.querySelector(".goods-small-pic");
	var liListSamll = goodsSamllPic.getElementsByTagName("li");
	//	设置liListSamll里的第一个li已经点击过
	//	console.log(liListSamll[0].getAttribute("isClick"));
	for(var i = 0; i < liListSamll.length; i++) {
		//设置liListSamll li的点击事件
		(function(index) {
			liListSamll[index].addEventListener("click", function() {
				delAllLiAttiribute();
				this.setAttribute("isClick", true);
				delBorderStyle();
				this.style.border = "1px solid #FF6700";
				this.style.cursor = "default";
				imgBigSrc = jsonGoodsDetail.imgBigSrc[index];
				var goodsBigPic = goodsDetail.querySelector(".goods-big-pic");
				var img = goodsBigPic.firstElementChild;
				img.src = imgBigSrc;
				//				console.log(this.style.boderColor);
			});

		})(i);
		//设置liListSamll li的鼠标事件

		(function(index) {
			liListSamll[index].onmouseover = function() {
				//				console.log(this.getAttribute("isClick"));
				if(this.getAttribute("isClick")) {
					//					点击过
					this.style.cursor = "default";
					//					console.log(this.getAttribute("isClick"));

				} else {
					this.style.cursor = "pointer";
					//					console.log(this.getAttribute("isClick"));

				}

				//				console.log(i + "----over----" + this.getAttribute("isClick"));
			}

		})(i);

	}
	//		去掉所有li中的isClick属性
	function delAllLiAttiribute() {
		for(var i = 0; i < liListSamll.length; i++) {
			liListSamll[i].removeAttribute("isClick");
		}
	}

	function delBorderStyle() {
		for(var i = 0; i < liListSamll.length; i++) {
			liListSamll[i].style.border = "1px solid #E0E0E0";
		}
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

//设置#goods-pic-zoom-block的效果，即放大图

//设置#goods-detail .goods-big-pic的点击事件
var goodsBigPic = document.querySelector("#goods-detail .goods-big-pic");
goodsBigPic.onclick = function() {
	var zoomBlock = document.getElementById("goods-pic-zoom-block");
	zoomBlock.style.display = "block";
};
//设置#goods-pic-zoom-block .zoom-exit-btn的点击事件
var zoomExitBtn = document.querySelector("#goods-pic-zoom-block .zoom-exit-btn");
zoomExitBtn.onclick = function() {
	var zoomBlock = document.getElementById("goods-pic-zoom-block");
	zoomBlock.style.display = "none";
};
//设置切换效果
var jsonZoomBigPic = {
	zoomBigPic: [
		"img/goodsdetail/zoomBigPic/pms_1492677587.51797274!513x513.jpg",
		"img/goodsdetail/zoomBigPic/pms_1492677587.53744519!513x513.jpg",
		"img/goodsdetail/zoomBigPic/pms_1492677587.5184147!513x513.jpg"
	]
};

zoomSmlPicClick();

function zoomSmlPicClick() {
	var zoomBlock = document.getElementById("goods-pic-zoom-block");
	var smlList = zoomBlock.querySelector(".zoom-sml-list");
	var liListSamll = smlList.getElementsByTagName("li");
	var navPre = document.querySelector("#goods-pic-zoom-block .zoom-big-nav .nav-pre");
	var navNext = document.querySelector("#goods-pic-zoom-block .zoom-big-nav .nav-next");
	//	设置liListSamll里的第一个li已经点击过
	//	console.log(liListSamll[0].getAttribute("isClick"));
	for(var i = 0; i < liListSamll.length; i++) {
		//	设置liListSmall里的li的点击事件
		(function(index) {
			liListSamll[index].addEventListener("click", function() {
				console.log(this.getAttribute("点击前" + "isClick"));
				delAllLiAttiribute();
				this.setAttribute("isClick", true);
				delBorderStyle();
				this.style.border = "1px solid #FF6700";
				this.style.cursor = "default";
				imgBigSrc = jsonZoomBigPic.zoomBigPic[index];
				var zoomBigBlock = zoomBlock.querySelector(".zoom-big-block");
				var img = zoomBigBlock.firstElementChild;
				img.src = imgBigSrc;
				console.log(this.getAttribute("isClick"));
				switch(index) {
					case 0:
						navPre.style.display = "none";
						navNext.style.display = "block";

						break;
					case 1:
						navPre.style.display = "block";
						navNext.style.display = "block";

						break;
					case 2:
						navPre.style.display = "block";
						navNext.style.display = "none";
						break;
				}
			});

		})(i);
		//	设置liListSmall里的li的鼠标离开事件
		(function(index) {
			liListSamll[index].onmouseover = function() {
				//				console.log(this.getAttribute("isClick"));
				if(this.getAttribute("isClick")) {
					//					点击过
					this.style.cursor = "default";

				} else {
					this.style.cursor = "pointer";

				}

			};
		})(i);

	}
	//		去掉所有li中的isClick属性
	function delAllLiAttiribute() {
		for(var i = 0; i < liListSamll.length; i++) {
			liListSamll[i].removeAttribute("isClick");
		}
	}
	//去掉li的border的style

	function delBorderStyle() {
		for(var i = 0; i < liListSamll.length; i++) {
			liListSamll[i].style.border = "1px solid #E0E0E0";
		}
	}

}

//设置.zoom-big-nav .nav-pre和.nav-next的点击事件
navClick();

function navClick() {
	var zoomBlock = document.getElementById("goods-pic-zoom-block");
	var zoomBigNav = document.querySelector("#goods-pic-zoom-block .zoom-big-nav");
	var navPre = zoomBigNav.querySelector(".nav-pre");
	var navNext = zoomBigNav.querySelector(".nav-next");

	//	console.log(jsonZoomBigPic.zoomBigPic.length);
	var nextIndex = 0;
	navNext.addEventListener("click", function() {
		navPre.style.display = "block";
		this.setAttribute("isClickNum", ++nextIndex);
		var num = this.getAttribute("isClickNum");
		var zoomBigBlock = zoomBlock.querySelector(".zoom-big-block");
		imgBigSrc = jsonZoomBigPic.zoomBigPic[num];
		var img = zoomBigBlock.firstElementChild;
		img.src = imgBigSrc;
		console.log(imgBigSrc);
		delBorderStyle();
		var smlList = document.querySelector("#goods-pic-zoom-block .zoom-sml-list");
		var liListSamll = smlList.getElementsByTagName("li");
		liListSamll[num].style.border = "1px solid #FF6700";
		liListSamll[num].style.cursor = "default";
		//		console.log(num);
		if(num == 2) {
			navNext.style.display = "none";
			nextIndex = 0;
		}

	});
	var preIndex = 2;
	navPre.addEventListener("click", function() {
		navNext.style.display = "block";
		this.setAttribute("isClickNum", --preIndex);
		var num = this.getAttribute("isClickNum");
		var zoomBigBlock = zoomBlock.querySelector(".zoom-big-block");
		imgBigSrc = jsonZoomBigPic.zoomBigPic[num];
		var img = zoomBigBlock.firstElementChild;
		img.src = imgBigSrc;
		console.log(imgBigSrc);
		delBorderStyle();
		var smlList = document.querySelector("#goods-pic-zoom-block .zoom-sml-list");
		var liListSamll = smlList.getElementsByTagName("li");
		liListSamll[num].style.border = "1px solid #FF6700";
		liListSamll[num].style.cursor = "default";
		//		console.log(num);
		if(num == 0) {
			navPre.style.display = "none";
			navNext.style.display = "block";
			preIndex = 2;
		}

	});

	//去掉li的border的style

	function delBorderStyle() {
		var smlList = document.querySelector("#goods-pic-zoom-block .zoom-sml-list");
		var liListSamll = smlList.getElementsByTagName("li");
		for(var i = 0; i < liListSamll.length; i++) {
			liListSamll[i].style.border = "1px solid #E0E0E0";
		}
	}

}