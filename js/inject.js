// 向页面注入JS
function injectCustomJs(jsPath, id)
{
    if(document.getElementById(id)){
        return;
    }
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('id', id);
    temp.setAttribute('type', 'text/javascript');
    // 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
    temp.src = chrome.extension.getURL(jsPath);
    // temp.onload = function()
    // {
    //     // 放在页面不好看，执行完后移除掉
    //     // this.parentNode.removeChild(this);
    // };


    document.head.appendChild(temp);
}

//需要再manifest.json中配置 "web_accessible_resources": ["js/test.js","js/jquery-3.4.1.min.js"],
injectCustomJs('js/jquery-3.4.1.min.js', 'jquery-script')
console.info("注入完成")

