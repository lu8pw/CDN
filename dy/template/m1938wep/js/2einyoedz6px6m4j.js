function systemType() {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //安卓
        var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //iOS终端
        if (isAndroid && u !== "APP_WEBVIEW") {
            return 'android'
        }
        if (isIOS) {
            return 'iOS'
        }
    }
    (function isAndroid() {
        var data = document.getElementById("playBtn");
        console.log(data);
        if (this.systemType() == 'android') {
            data.style.display = "block";
        } else {
            data.style.display = "none";
        }
    })()

function loadBtn() {
    window.location.href = 'https://qspdown.oss-cn-shenzhen.aliyuncs.com/appdown/apk/%E5%85%A8%E8%A7%86%E9%A2%91TV5.apk'
}