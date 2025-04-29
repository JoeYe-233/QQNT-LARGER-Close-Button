# LARGER Close Button

![插件图标](./icon.svg)

LiteLoaderQQNT 插件，让 QQ 各个窗口的关闭按钮更大, 更宽

~~主播老眼昏花眼神不好, 总觉得原先的关闭按钮太小😭~~



## 使用方法

clone 或下载 Releases 中的 zip 文件解压，将文件夹移动至 `plugins` 文件夹下面，重启 QQNT 即可

## 已知问题

\[小问题\] 与 [window-on-top](https://github.com/mo-jinran/window-on-top/tree/v4) 有小冲突, QQ登录页面的设置按钮右侧间隔会比较大,不影响正常使用


\[解决方式\] 在 window-on-top 插件的`preload.js`和`renderer.js`中按如下注释部分对代码进行注释

```js
const interval = setInterval(() => {
    const window_control_area = document.querySelector(".window-control-area");
    // const setting_btn = document.querySelector(".login-container .setting");
    if (window_control_area) {
        clearInterval(interval);
        window_control_area.insertBefore(window_on_top_button, window_control_area.childNodes[0]);
    }
    // if (setting_btn) {
    //     setting_btn.style.marginRight = "32px";
    // }
}, 50);
```

## 特别鸣谢
基于 [window-on-top](https://github.com/mo-jinran/window-on-top/tree/v4) 修改而来, 感谢原作者！