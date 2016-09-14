

class Para {
    constructor({el, btn}) {
        this.areaEl =el;
        this.btn = document.getElementById(btn);
        this.foods = ['黄猛击米饭', '蛋炒饭', '沙县小吃', '肉夹馍', '兰州拉面', '原味鸡', '肉酱饭'];
        this.fonts = ['字体1', '字体2', '字体3', '字体4', '字体5', '字体6', '字体7', '字体8'];
        this.fontColor = ['#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd', '#fff'];
        this.fontSizeMax = 24;
        this.fontSizeMin = 8;
        this.showTimeMax = 1000;
        this.displayAreaX = 0;
        this.displayAreaY = 0;
        this.btnState = 1;
        this.timer = null;
        this.init()
    }

    init() {
        this.getWidthAndHigth();
        this.bindBtnClick();
    }

    bindBtnClick() {
        var self = this;
        this.btn.onclick = function () {

            if (self.btnState == 1) {
                self.mkItems();
            } else if (self.btnState == -1) {
                self.stopMkItems();
            }

            self.btnState = self.btnState * -1;
        }
    }

    stopMkItems() {
        clearInterval(this.timer)
    }


    getWidthAndHigth() {
        this.displayAreaX = this.areaEl.clientWidth;
        this.displayAreaY = window.innerHeight * 0.618;
    }

    mkItems() {
        var self = this;
        var timeer;

        self.timer = setInterval(function () {
            var item = {
                name: chiceName(), //分配随机显示内容
                font: chiceFont(), //分配随机字体
                fontColor: chiceColor(), //分配随机颜色
                fontSize: chiceSize(), //分配随机字体大小
                showTime: setShowTime() //分配显示时长
            };

            showItem(item); //在页面中显示这个元素
        }, 100);


        // for (var i = 0; i < this.foods.length * 2; i++) {
        //
        //     items[i] = {
        //         name: chiceName(), //分配随机显示内容
        //         font: chiceFont(), //分配随机字体
        //         fontColor: chiceColor(), //分配随机颜色
        //         fontSize: chiceSize(), //分配随机字体大小
        //         showTime: setShowTime() //分配显示时长
        //     };
        //
        //     showItem(items[i]); //在页面中显示这个元素
        // }


        function chiceName() {
            var x = Math.floor(Math.random() * self.foods.length - 1) + 1;
            return self.foods[x];
        }

        function chiceFont() {
            var x = Math.floor(Math.random() * self.fonts.length - 1) + 1;
            return self.fonts[x];
        }

        function chiceColor() {
            var x = Math.floor(Math.random() * self.fontColor.length - 1) + 1;
            return self.fontColor[x];
        }

        function chiceSize() {
            var x = Math.floor(Math.random() * (self.fontSizeMax - self.fontSizeMin)) + self.fontSizeMin;
            return x + "px";
        }

        function setShowTime() {
            var x = Math.floor(Math.random() * self.showTimeMax);
            return x;
        }

        function showItem(item) {
            var domP = document.createElement('p');
            // var randomID = 'id' + Math.random() * 10000000;
            // domP.setAttribute('id', randomID);   // 创建一个节点
            var txt = document.createTextNode(item.name);   // 设置节点nodeValue为对象的name
            self.areaEl.appendChild(domP);     //插入节点 <p>
            domP.appendChild(txt);      //在节点上插入  nodeValue
            domP.style.left = Math.floor(Math.random() * self.displayAreaX - 50) + 'px';
            domP.style.top = Math.floor(Math.random() * self.displayAreaY) + 'px';     //为节点分配随机坐标
            domP.style.color = item.fontColor;      //为节点文字分配的灰度颜色


            // 按照显示时间先后顺序删除节点
            setTimeout(function () {
                self.areaEl.removeChild(domP);
            }, item.showTime);


            // 淡入显示节点
            // 开始计时，隐藏时间
            // 隐藏节点
            // 倒计时（淡出动画的时间）
            // 删除节点

        }

    }

}
