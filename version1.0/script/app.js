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
var displayTime = 1000;
//
//
//***************************************
//

window.onload = para;             //页面加载完成后开始执行

function para() {
    mkItems();
}


 // 创建随机属性对象的流水线
function mkItems() {
    var items = new Array();
    for (var i = 0; i < foods.length * 2; i++) {
        items[i] = new Object();              //开始创建这个显示对象
        items[i].name = chiceName();          //分配随机显示内容
        items[i].font = chiceFont();          //分配随机字体
        items[i].fontColor = chiceColor();    //分配随机颜色
        items[i].fontSize = chiceSize();      //分配随机字体大小
        console.log(items[i]);
        showItem(items[i]);                   //在页面中显示这个元素
    }
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
