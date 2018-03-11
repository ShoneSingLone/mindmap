// 操作 DOM 元素，把 content 显示到网页上
function show(content) {
    let eDiv = document.createElement('div');
    eDiv.innerHTML = ('Hello,' + content + ' ' + Date.now());
    eDiv.setAttribute('class', 'content');
    window.document.getElementById('app').appendChild(eDiv);
}

// 通过 CommonJS 规范导出 show 函数
module.exports = show;