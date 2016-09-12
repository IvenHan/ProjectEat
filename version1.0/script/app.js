// **设置参数范围**
//
// 创建食物选择范围
var foods = ['黄猛击米饭', '蛋炒饭', '沙县小吃', '肉夹馍', '兰州拉面', '原味鸡', '肉酱饭'];
// 设置字体选择范围
var fonts = ['字体1', '字体2', '字体3', '字体4', '字体5', '字体6', '字体7', '字体8'];
// 设置字体颜色选择范围（灰度）
var fontColor = ['#111', '#222', '#333', '#444', '#555', '#666', '#777', '#888', '#999', '#aaa', '#bbb', '#ccc', '#ddd', '#fff'];
// 设置字体大小选择范围
var fontSizeMax = 24;
var fontSizeMin = 8;
// 设置文本出现的时长范围
var showTimeMax = 1000;
// 初始化随机显示区域的坐标范围
var displayAreaX = 0;
var displayAreaY = 0;
//
//
//***************************************
//

window.onload = para; //页面加载完成后开始执行

function para() {
    getWidthAndHigth();
    mkItems();
}

function getWidthAndHigth() { //页面加载完成后，获取显示区域的宽和高
    var randomArea = document.getElementsByClassName('randomArea')[0];
    displayAreaX = randomArea.clientWidth;
    displayAreaY = window.innerHeight * 0.618;
}

// 创建随机属性对象的流水线
function mkItems() {
    var items = new Array();
    for (var i = 0; i < foods.length * 2; i++) {
        items[i] = new Object(); //开始创建这个显示对象
        items[i].name = chiceName(); //分配随机显示内容
        items[i].font = chiceFont(); //分配随机字体
        items[i].fontColor = chiceColor(); //分配随机颜色
        items[i].fontSize = chiceSize(); //分配随机字体大小
        items[i].showTime = setShowTime(); //分配显示时长
        // console.log(items[i]);                //测试输出对象列表
        showItem(items[i]); //在页面中显示这个元素
    }
}



function showItem(item) {
    var domP = document.createElement('p');
    var randomID = 'id' + Math.random()*10000000;
    domP.setAttribute(id,randomID);// 创建一个节点
    var txt = document.createTextNode(item.name);
    // 设置节点nodeValue为对象的name
    var showArea = document.getElementsByClassName('randomArea')[0];
    showArea.appendChild(domP);
    domP.appendChild(txt);
    domP.style.left = Math.floor(Math.random()*displayAreaX - 50) + 'px';
    domP.style.top = Math.floor(Math.random()*displayAreaY) + 'px';
    domP.style.color = item.fontColor;
    setTimeout(function () {

    }, item.showTime);
    // 获取当前随机显示区域的尺寸范围
    // 分配对象的相对坐标
    // 设置节点 为隐藏属性
    // 插入节点
    // 淡入显示节点
    // 开始计时，隐藏时间
    // 隐藏节点
    // 倒计时（淡出动画的时间）
    // 删除节点

}

// 随机选择一个名字
function chiceName() {
    var x = Math.floor(Math.random() * foods.length - 1) + 1;
    return foods[x];
}

// 随机选择一个字体
function chiceFont() {
    var x = Math.floor(Math.random() * fonts.length - 1) + 1;
    return fonts[x];
}

// 随机选择一种颜色
function chiceColor() {
    var x = Math.floor(Math.random() * fontColor.length - 1) + 1;
    return fontColor[x];
}

// 随机选择分配字体大小
function chiceSize() {
    var x = Math.floor(Math.random() * (fontSizeMax - fontSizeMin)) + fontSizeMin;
    return x + "px";
}

// 随机设定显示时长
function setShowTime() {
    var x = Math.floor(Math.random() * showTimeMax);
    return x;
}
