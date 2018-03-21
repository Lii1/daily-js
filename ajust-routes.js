// 这样做的意义在于何处
function adjustPath(str, user) {
    var strArr = str.split('/')
    var userArr = user.split('../')

    var ls = strArr.length,
        ul = userArr.length
    var s = '',
        l = ls - ul;
    if (l < 0) {
        throw new Error('文件没有找到！')
        for (let i = 0; i < l; i++) {
            console.log(i, strArr[i]);
            s += strArr[i] + "/";
        }
        return s + userArr[userArr.length - 1];
    }
}

// 方式二
function adjustPath(str, user) {
    var patharr = str.replace(/\/$/, "");
    var nstr = user.replace(/\.\.\//g, function(a){
        console.log(a);
        return patharr.pop() ? "" : a;
    });
    return patharr.length ? patharr.join("/") + "/" + nstr : nstr;
}