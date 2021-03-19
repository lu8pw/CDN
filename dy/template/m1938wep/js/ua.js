function setCookie(name, value, days, domain, path) {
    var expires = '';
    if (days) {
        var d = new Date();

        d.setTime(d.getTime() + 1000*60);
        expires = '; expires=' + d.toGMTString();
    }
    domain = domain ? '; domain=' + domain : '';
    path = '; path=' + (path ? path : '/');
    document.cookie = name + '=' + value + expires + path + domain;
    var a = document.getElementById('change_type');
    a.href = getMobileUrl();
}

function readCookie(name) {
    var n = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i].replace(/^\s+/, '');
        if (c.indexOf(n) == 0) {
            return c.substring(n.length);
        }
    }
    return null;
}

function eraseCookie(name, domain, path) {
    setCookie(name, '', -1, domain, path);
}



function getMobileUrl() {
    var url = window.location.href;
    if (url.indexOf('www.') > 0){
        url = url.replace('www', 'm');
    } else if (url.indexOf('m.') > 0) {
        url = url.replace('m.', 'www.');
    }

    return url;
}
