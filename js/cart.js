//设置userlist隐藏显示
			var user = document.getElementById("user");
			var userList = document.getElementById("user-list");
			user.onmouseover = function() {
				userList.style.display = "block";
			}
			userList.onmouseout = function() {
				userList.style.display = "none";

			}
			//			设置购物车
			//设置数量的加减
			var trs = document.getElementById("tab").children[1].getElementsByTagName("tr");
			//	console.log(trs[1].children[3].children[1].value);
			//	console.log(trs[1].children[3].children[1]);
			//	console.log(trs.length);
			function minus(t) {
				var td = t.parentNode
				//		console.log(td);
				var num = parseInt(td.children[1].value);
				console.log(td.children[1].value);
				num = num - 1;
				if(num <= 0) {
					num = 1;
				}
				td.children[1].value = num;
				setSubTatol(t);
				setTotal();
			}

			function plus(t) {
				var td = t.parentNode;
				//		console.log(td);
				var num = parseInt(td.children[1].value);
				console.log(td.children[1].value);
				num = num + 1;
				td.children[1].value = num;
				setSubTatol(t);
				setTotal();
			}

			//删除节点
			function removeItem(t) {
				var tr = t.parentNode.parentNode;
				document.getElementById("tab").children[1].removeChild(tr);
			}

			//	设置小计金额
			function setSubTatol(t) {
				//t.setAttribute("value","")
				var tr = t.parentNode.parentNode;
				var tdPrice = tr.children[2];
				var tdSubTatol = tr.children[4];
				var price = parseFloat(tdPrice.innerHTML);
				var subTatol = price * t.parentNode.children[1].value;
				tdSubTatol.innerHTML = subTatol + "元";

			}

			//计算总计
			//	function tongji() {
			//				var sum = 0;
			//				var rows = $("cart").children[1].children;
			//				for(var i = 0; i < rows.length; i++) {
			//					var cbo = rows[i].firstElementChild.firstElementChild;
			//					if(cbo.checked) {
			//						sum += parseFloat(rows[i].children[4].innerHTML)
			//					}
			//				}
			//				$("zongjia").innerHTML = sum + "元";
			//			}
			setTotal();

			function setTotal() {
				var sum = 0;
				var rows = document.getElementById("tab").children[1].children;
//				console.log(sum);
				for(var i = 0; i < rows.length; i++) {
					var cbo = rows[i].firstElementChild.firstElementChild;
					if(cbo.className == "active") {
						sum += parseFloat(rows[i].children[4].innerHTML);
					}
				}
//				console.log(sum);
				var totals = document.getElementById("total");
				totals.innerHTML = sum + "元"
			}

			//添加节点
			function addItem() {
				var tr = document.createElement("tr");
				var tdCheck = document.createElement("td");
				tdCheck.setAttribute("colspan", "2");
				tdCheck.innerHTML = "<i>" + "</i>";
				//		var tdCheck2 = document.createElement("td");
				//		tdCheck2.innerHTML = "";
				var tdGoodsName = document.createElement("td");
				tdGoodsName.innerHTML = "商品名称";
				var tdPrice = document.createElement("td");
				tdPrice.innerHTML = "778元";
				var tdAmount = document.createElement("td");
				tdAmount.innerHTML = "<input type='button' value='-' onclick='minus(this)'/>" + "<input type='text' onchange='setXiaoJi(this)' value='1'/>" + "<input type='button' value='+'  onclick='plus(this)'/>";
				var tdSubTatol = document.createElement("td");
				tdSubTatol.innerHTML = "778元";
				var tdOpe = document.createElement("td");
				tdOpe.innerHTML = "<input type='button' value='X' onclick='removeItem(this)'/>";
				tr.appendChild(tdCheck);
				//tr.appendChild(tdCheck2);
				tr.appendChild(tdGoodsName);
				tr.appendChild(tdPrice);
				tr.appendChild(tdAmount);
				tr.appendChild(tdSubTatol);
				tr.appendChild(tdOpe);
				document.getElementById("tab").children[1].appendChild(tr);
				check();
			}

			//设置没选中时，全选
			check();

			function check() {
				var iList = document.getElementById("tab").getElementsByTagName("i");
				var count = 0; //统计商品被选中的个数
				var cancleNum = 0;
				//		console.log(iList.length);
				//商品选中
				for(var i = 1; i < iList.length; i++) {
					iList[i].onclick = function() {
						if(this.className == "active") {
							//this.className = "";
							this.removeAttribute("class");
							count--;
							cancleNum++;
							//全选按钮出现，取消任意商品的选中，则取消全选样式
							if(cancleNum > 0) {
								iList[0].className = "";
							}
							//				console.log("取消"+cancleNum);
							//				console.log("选中"+count);
						} else {
							this.className = "active";
							++count;

							//				console.log(count);
							//设置商品全部选中时，全选按钮也选中
							if(count == iList.length - 1) {
								iList[0].className = "active";

							}

						}
						setTotal();

						//			console.log(judgeChecked(this));
					}
				}

			}

			//设置全选按钮
			var allCheck = document.getElementById("allCheck");
			allCheck.addEventListener("click", function() {
				var iList = document.getElementById("tab").getElementsByTagName("i");
				//设置全选
				if(iList[0].className == "") {
					for(var i = 0; i < iList.length; i++) {
						iList[i].className = "active"
					}
				} else {
					//设置不全选
					for(var i = 0; i < iList.length; i++) {
						iList[i].className = ""
					}

				}
				setTotal();

			})