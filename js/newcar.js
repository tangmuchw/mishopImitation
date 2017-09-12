//			DOM2事件模型
init();

function init() {
	addEvent();
	itemChecked();
	allChecked();
	getCartTotalNum();
	addCart();
}

//设置colTotal，delGoods的相应的事件
function addEvent() {
	var cartGoodsList = document.getElementById("cart-goods-list");
	cartGoodsList.addEventListener("click", function(event) {
		//设置数量的加减和删除商品操作
		var numOp = event.target;
		//		console.log(numOp.className);
		var clickName = numOp.className;
		if(clickName == "minus") {
			var inputText = numOp.parentNode.children[1];
			inputText.value = inputText.value == "1" ? 1 : parseInt(inputText.value) - 1;
			setCartTotalPrice();
			setColTotal(numOp);
		} else if(clickName == "plus") {
			var inputText = numOp.parentNode.children[1];
			inputText.value = parseInt(inputText.value) + 1;
			setColTotal(numOp);
			setCartTotalPrice();

		} else if(clickName == "delGoods") {
			cartGoodsList.children[2].removeChild(numOp.parentNode.parentNode.parentNode.parentNode);
			getCartTotalNum();

		}
	}, false);
}

//设置小计
function setColTotal(id) {
	var inputText = parseFloat(id.parentNode.children[1].value);
	var itemRow = id.parentNode.parentNode.parentNode;
	var colTotal = itemRow.children[5];
	var colPrice = parseFloat(itemRow.children[3].innerHTML);
	//	console.log(colPrice);
	var account = inputText * colPrice;
	//toFixed(n),保留n位小数
	colTotal.innerHTML = account.toFixed(2) + "元";

}

//设置选框第一次选中的效果
function itemChecked() {
	var cartGoodsList = document.getElementById("cart-goods-list");
	//	全选框allCheckbox
	var allCheckbox = cartGoodsList.querySelector(".icon-checkbox");
	var checkboxs = cartGoodsList.querySelectorAll(".icon-checkbox");
	console.log(checkboxs.length);
	for(var i = 1; i < checkboxs.length; i++) {
		(function(index) {
			checkboxs[index].addEventListener("click", function() {
				this.style.cursor = "pointer";
				if(this.getAttribute("isClick")) {
					//点击过
					this.className = "icon-checkbox";
					this.removeAttribute("isClick");
					resetGoCheckout();
					setCartTotalPrice();
					getSelTaotalNum();

					for(var j = 0; j < checkboxs.length; j++) {
						//						console.log(checkboxs.length);
						if(checkboxs[j].className == "active") {
							changeGoCheckout();
						}
					}

				} else {
					this.className = "active";
					this.setAttribute("isClick", true);
					changeGoCheckout();
					setCartTotalPrice();
					getSelTaotalNum();

				}
				searchActive();
			});

		})(i);

	}
	//设置商品选框全部被选中时，全选也为选中样式
	function searchActive() {
		var activeBox = 0;
		for(var j = 1; j < checkboxs.length; j++) {
			if(checkboxs[j].className == "active") {
				activeBox++;
				if(activeBox == checkboxs.length - 1) {
					allCheckbox.className = "active";
				} else {
					allCheckbox.className = "icon-checkbox";

				}
			} else {}

		}
	}
	//设置当选框选中时.goCheckout 去结算的样式

	function changeGoCheckout() {
		var cartGoodsList = document.getElementById("cart-goods-list");
		var goCheckout = cartGoodsList.querySelector(".goCheckout");
		goCheckout.style.backgroundColor = "#FF6700";
		goCheckout.style.color = "#FFFFFF";
		goCheckout.style.border = "1px solid #FF6700";

	}
	//重置.goCheckout 去结算的样式
	function resetGoCheckout() {
		var cartGoodsList = document.getElementById("cart-goods-list");
		var goCheckout = cartGoodsList.querySelector(".goCheckout");
		goCheckout.style.backgroundColor = "#E0E0E0";
		goCheckout.style.color = "#B0B0B0";
		goCheckout.style.border = "1px solid #E0E0E0";
	}
	//设置已选中的商品数量#selTotalNum
	//getSelTaotalNum();

	function getSelTaotalNum() {
		var selectedItem = 0;
		var selTotalNum = document.getElementById("selTotalNum");
		var cartGoodsList = document.getElementById("cart-goods-list");
		var itemBoxs = cartGoodsList.querySelectorAll(".item-box");
		for(var i = 0; i < itemBoxs.length; i++) {
			var checkbox = itemBoxs[i].querySelector("i");
			if(checkbox.className == "active") {
				++selectedItem;
			}
		}
		//		console.log(selectedItem);
		selTotalNum.innerHTML = selectedItem;
	}

}

//设置全选效果
function allChecked() {
	var cartGoodsList = document.getElementById("cart-goods-list");
	//	全选框allCheckbox
	var allCheckbox = cartGoodsList.querySelector(".icon-checkbox");
	//	全部选框checkboxs
	var checkboxs = cartGoodsList.querySelectorAll(".icon-checkbox");
	//	console.log(checkboxs.length);
	allCheckbox.addEventListener("click", function() {
		this.style.cursor = "pointer";
		if(this.getAttribute("isClick")) {
			//点击过
			for(var i = 0; i < checkboxs.length; i++) {
				checkboxs[i].className = "icon-checkbox";
			}
			this.removeAttribute("isClick");
			resetGoCheckout();
			setCartTotalPrice();
			getSelTaotalNum();

		} else {
			this.setAttribute("isClick", true);
			for(var i = 0; i < checkboxs.length; i++) {
				checkboxs[i].className = "active";

			}
			changeGoCheckout();
			setCartTotalPrice();
			getSelTaotalNum();

		}

	});

}

//设置当选框选中时.goCheckout 去结算的样式

function changeGoCheckout() {
	var cartGoodsList = document.getElementById("cart-goods-list");
	var goCheckout = cartGoodsList.querySelector(".goCheckout");
	goCheckout.style.backgroundColor = "#FF6700";
	goCheckout.style.color = "#FFFFFF";
	goCheckout.style.border = "1px solid #FF6700";

}
//重置.goCheckout 去结算的样式
function resetGoCheckout() {
	var cartGoodsList = document.getElementById("cart-goods-list");
	var goCheckout = cartGoodsList.querySelector(".goCheckout");
	goCheckout.style.backgroundColor = "#E0E0E0";
	goCheckout.style.color = "#B0B0B0";
	goCheckout.style.border = "1px solid #E0E0E0";
}

//设置总计.cartTotalPrice
//setCartTotalPrice() ;
function setCartTotalPrice() {
	var cartTotal = 0;
	var cartGoodsList = document.getElementById("cart-goods-list");
	//	全部选框checkboxs
	var listBody = cartGoodsList.querySelector(".list-body");
	var cartTotalPrice = cartGoodsList.querySelector(".cartTotalPrice")
	var itemBoxs = listBody.querySelectorAll(".item-box");
	for(var i = 0; i < itemBoxs.length; i++) {
		var itemRow = itemBoxs[i].firstElementChild.firstElementChild;
		var checkbox = itemRow.firstElementChild.firstElementChild;
		if(checkbox.className == "active") {
			var colTotal = parseFloat(itemRow.children[5].innerHTML);
			cartTotal += colTotal;
		}

	}
	cartTotalPrice.innerHTML = cartTotal.toFixed(2);

}

//设置共有多少件商品#cartTotalNum

function getCartTotalNum() {
	var cartTotalNum = document.getElementById("cartTotalNum");
	var cartGoodsList = document.getElementById("cart-goods-list");
	var itemBoxs = cartGoodsList.querySelectorAll(".item-box");
	cartTotalNum.innerHTML = itemBoxs.length;

}

//设置已选中的商品数量#selTotalNum
//getSelTaotalNum();

function getSelTaotalNum() {
	var selectedItem = 0;
	var selTotalNum = document.getElementById("selTotalNum");
	var cartGoodsList = document.getElementById("cart-goods-list");
	var itemBoxs = cartGoodsList.querySelectorAll(".item-box");
	for(var i = 0; i < itemBoxs.length; i++) {
		var checkbox = itemBoxs[i].querySelector("i");
		if(checkbox.className == "active") {
			++selectedItem;
		}
	}
	console.log(selectedItem);
	selTotalNum.innerHTML = selectedItem;
}

//设置添加购物车的功能
var jsonCartGoods = [{
	imgBigSrc: "img/newcart/items/04/bigImg/pms_1495074053.84174465!140x140.jpg",
	imgSmallSrc: "img/newcart/items/04/smlImg/pms_1495074053.84174465!80x80.jpg",
	goodsName: "小米电视4  65英寸",
	price: "3000元"

}, {
	imgBigSrc: "img/newcart/items/05/bigImg/pms_1490666381.06634471!140x140.jpg",
	imgSmallSrc: "img/newcart/items/05/smlImg/pms_1470288129.01686992!80x80.jpg",
	goodsName: "小米路由器3C 白色",
	price: "99元"

}];
//添加商品操作
function addCart() {
	var recommend = document.getElementById("recommend");
	var xmListItem = recommend.querySelectorAll(".xm-recommend-list-item");

	//	console.log(xmListItem.length);
	for(var i = 0; i < xmListItem.length; i++) {
		(function(index) {
			var addCartBtn = xmListItem[index].querySelector(".addCart");
			addCartBtn.addEventListener("click", function() {
				createItemBox(index);
				getCartTotalNum();
				itemChecked2();

			})

		})(i);

	}

	function itemChecked2() {
		var cartGoodsList = document.getElementById("cart-goods-list");
		var listBody = cartGoodsList.querySelector(".list-body");
		var checkboxs = listBody.lastElementChild.querySelector(".icon-checkbox");
		checkboxs.addEventListener("click", function() {
			this.style.cursor = "pointer";
			if(this.getAttribute("isClick")) {
				//点击过
				this.className = "icon-checkbox";
				this.removeAttribute("isClick");
				resetGoCheckout();
				setCartTotalPrice();
				getSelTaotalNum();
				for(var j = 0; j < checkboxs.length; j++) {
					//						console.log(checkboxs.length);
					if(checkboxs[j].className == "active") {
						changeGoCheckout();
					}
				}

			} else {
				this.className = "active";
				this.setAttribute("isClick", true);
				changeGoCheckout();
				setCartTotalPrice();
				getSelTaotalNum();

			}
			searchActive();
		});

	}
	//设置商品选框全部被选中时，全选也为选中样式
	function searchActive() {
		var activeBox = 0;
		for(var j = 1; j < checkboxs.length; j++) {
			if(checkboxs[j].className == "active") {
				activeBox++;
				if(activeBox == checkboxs.length - 1) {
					allCheckbox.className = "active";
				} else {
					allCheckbox.className = "icon-checkbox";

				}
			} else {}

		}
	}
	//设置当选框选中时.goCheckout 去结算的样式

	function changeGoCheckout() {
		var cartGoodsList = document.getElementById("cart-goods-list");
		var goCheckout = cartGoodsList.querySelector(".goCheckout");
		goCheckout.style.backgroundColor = "#FF6700";
		goCheckout.style.color = "#FFFFFF";
		goCheckout.style.border = "1px solid #FF6700";

	}
	//重置.goCheckout 去结算的样式
	function resetGoCheckout() {
		var cartGoodsList = document.getElementById("cart-goods-list");
		var goCheckout = cartGoodsList.querySelector(".goCheckout");
		goCheckout.style.backgroundColor = "#E0E0E0";
		goCheckout.style.color = "#B0B0B0";
		goCheckout.style.border = "1px solid #E0E0E0";
	}
	//设置已选中的商品数量#selTotalNum
	//getSelTaotalNum();

	function getSelTaotalNum() {
		var selectedItem = 0;
		var selTotalNum = document.getElementById("selTotalNum");
		var cartGoodsList = document.getElementById("cart-goods-list");
		var itemBoxs = cartGoodsList.querySelectorAll(".item-box");
		for(var i = 0; i < itemBoxs.length; i++) {
			var checkbox = itemBoxs[i].querySelector("i");
			if(checkbox.className == "active") {
				++selectedItem;
			}
		}
		//		console.log(selectedItem);
		selTotalNum.innerHTML = selectedItem;
	}

}

//创建itemBox
function createItemBox(index) {
	var itemBox = document.createElement("div");
	itemBox.setAttribute("class", "item-box");

	var itemTable = document.createElement("div");
	itemTable.setAttribute("class", "item-table");

	var itemSubBox = document.createElement("div");
	itemSubBox.setAttribute("class", "item-sub-box");

	var itemRow = document.createElement("div");
	itemRow.setAttribute("class", "item-row");

	var colCheck = document.createElement("div");
	colCheck.setAttribute("class", "col col-check");
	var i = document.createElement("i");
	i.setAttribute("class", "icon-checkbox");
	colCheck.appendChild(i);

	var colImg = document.createElement("div");
	colImg.setAttribute("class", "col col-img");
	var a = document.createElement("a");
	a.setAttribute("href", "#");
	var img = document.createElement("img");
	img.src = jsonCartGoods[index].imgSmallSrc;
	a.appendChild(img);
	colImg.appendChild(a);

	var colName = document.createElement("div");
	colName.setAttribute("class", "col col-name");
	var tags = document.createElement("div");
	tags.setAttribute("class", "tags");
	var h3 = document.createElement("h3");
	h3.setAttribute("class", "name");
	var a2 = document.createElement("a");
	a2.setAttribute("href", "#");
	a2.innerHTML = jsonCartGoods[index].goodsName;
	h3.appendChild(a2);
	colName.appendChild(tags);
	colName.appendChild(h3);

	var colPrice = document.createElement("div");
	colPrice.setAttribute("class", "col col-price");
	colPrice.innerHTML = jsonCartGoods[index].price;

	var colNum = document.createElement("div");
	colNum.setAttribute("class", "col col-num");
	var changeGoodsNum = document.createElement("div");
	changeGoodsNum.setAttribute("class", "change-goods-num");
	var a3 = document.createElement("a");
	a3.setAttribute("href", "javascript:void(0);");
	a3.setAttribute("class", "minus");
	a3.innerHTML = "-";
	var newInput = document.createElement("input");
	newInput.setAttribute("type", "text");
	newInput.setAttribute("class", "text");
	newInput.setAttribute("value", "1");
	var a4 = document.createElement("a");
	a4.setAttribute("href", "javascript:void(0);");
	a4.setAttribute("class", "plus");
	a4.innerHTML = "+";
	changeGoodsNum.appendChild(a3);
	changeGoodsNum.appendChild(newInput);
	changeGoodsNum.appendChild(a4);
	colNum.appendChild(changeGoodsNum);

	var colTotal = document.createElement("div");
	colTotal.setAttribute("class", "col col-total");
	colTotal.innerHTML = jsonCartGoods[index].price;

	var colAction = document.createElement("div");
	colAction.setAttribute("class", "col col-action");
	var a5 = document.createElement("a");
	a5.setAttribute("href", "javascript:void(0);");
	a5.setAttribute("class", "delGoods");
	a5.innerHTML = "X";
	colAction.appendChild(a5);

	itemRow.appendChild(colCheck);
	itemRow.appendChild(colImg);
	itemRow.appendChild(colName);
	itemRow.appendChild(colPrice);
	itemRow.appendChild(colNum);
	itemRow.appendChild(colTotal);
	itemRow.appendChild(colAction);

	itemTable.appendChild(itemRow);

	itemBox.appendChild(itemTable);
	itemBox.appendChild(itemSubBox);
	var listBody = document.querySelector(".list-body");
	listBody.appendChild(itemBox);

}