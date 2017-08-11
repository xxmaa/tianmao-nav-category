window.onload = function() {
            /*
            **template('id',data)是art-template基于模版名渲染的方法
            ** https://aui.github.io/art-template/docs/index.html
            **/
             // 获取包裹元素
            var wrap = document.querySelector('.wrap');
            // 获取侧边导航栏容器并填充内容
            var navCon = document.querySelector('.nav-con');
			navCon.innerHTML = template('category',json);
			// 获取总内容容器并添加数据
			var contentCon = document.querySelector('.content-con');
			contentCon.innerHTML = template('con', json);
			// 获取总内容容器中的panel-con包裹层来控制内容的显示与否
            var panelCon = document.querySelectorAll(".panel-con");
            // 获取侧边导航栏的目录个数
            var li = navCon.querySelectorAll('li');
            // 获取单独内容容器的个数(通过绝对定位定位到父级总内容容器，然后让单个内容显示)
			var len = panelCon.length;
            var i, j;
            // 遍历每个单独内容的容器
			for ( i = 0; i < len; i++) {
                // 为每个内容容器添加index属性
                panelCon[i].index = i;
                //默认让所有的都不显示
                panelCon[i].style.display = "none";
                // 鼠标滑动到该容器内让其一直显示
				panelCon[i].addEventListener('mouseover',function(event) {
                    this.style.display = "block";
                    event.stopPropagation();
                }, false);
                // 鼠标移出该内容容器就让其隐藏并取消对应导航选中样式
				panelCon[i].addEventListener('mouseleave',function(event) {
					this.style.display = "none";
					li[this.index].classList.remove('selected');
				}, false);
                // 获取单个内容容器包裹层
				var selector = '.panel-' + (i + 1);
				var subselector = panelCon[i].querySelector(selector);
				// 获取容器中a元素的个数
				var word = subselector.querySelectorAll('a');
                // 获取随机的固定个数的不同索引值
                var changeword = randomNumber(30, 1, word.length-1);
                // 为这些元素添加高亮样式
				changeword.forEach(function(item, index, arr){
					// console.log(word[item]);
					word[item].classList.add('highlight');
				});
            }
            // 遍历每个导航元素添加事件
			for (var i = 0; i < li.length; i++) {
                // 为每个元素添加索引
                li[i].index = i;
                //鼠标移入
				li[i].addEventListener('mouseover', function() {
                    // 添加selected类
					if (!this.classList.contains('selected')) {
						this.classList.add('selected');
                    }
                    // 显示对应的内容
					for ( j = 0; j < len; j++) {
						panelCon[j].style.display = "none";
					}
					panelCon[this.index].style.display = "block";
                }, false);
                // 鼠标移出
				li[i].addEventListener('mouseout', function(event) {
                    var event = event || window.event;
                    // 如果鼠标移出的相关元素(获取光标的元素)不是对应的内容
					if (event.relatedTarget.className != 'hot-word-con') {
                        // 隐藏内容并且移除导航的选中样式
                        panelCon[this.index].style.display = 'none';
						this.classList.remove('selected');
					}
                    event.stopPropagation();
				}, false);
					
			}	
			
    }
    // 获取一个n个元素的end-start范围内的数组(不同元素)
	function randomNumber(n, start, end) {
		if (n == 0) return;
		if (end == null) {
			end = start;
			start = 0;
		} 
		var num = Array(n);
		for (var i = 0; i < n; i++) {
			num[i] =  Math.floor(Math.random() * (end-start + 1)) + start;
			for (var j = 0; j < i; j++) {
				if (num[i] == num[j]) 
					i--;
			}
		}
		return num.sort(function(a, b){
			return  a-b;
		});
	}