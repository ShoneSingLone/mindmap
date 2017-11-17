function getUrlParam(sUrl, sKey) {
    var ResultObj, returnResult;

    ResultObj = function (sUrl) {
        var kvArray = sUrl.split("?")[1].split("#")[0].split("&").map(function (val, index, arr) {
            return val.split("=");
        }),
            kvObj = {};

        for (var i = 0; i < kvArray.length; i++) {
            var currentArray = kvArray[i];
            //初次直接赋值
            if (!kvObj[currentArray[0]]) {
                kvObj[currentArray[0]] = currentArray[1];
            } else {
                // 重复视为有同名参数
                // 处理成数组
                if (!isArray(kvObj[currentArray[0]])) {
                    // 未处理
                    var stamp = kvObj[currentArray[0]];
                    kvObj[currentArray[0]] = [];
                    kvObj[currentArray[0]].push(stamp);
                }
                kvObj[currentArray[0]].push(currentArray[1]);
            }
        }
        return kvObj;
    }

    returnResult = function (kvObj, key) {
        if (sKey) {
            // 如果参数存在
            if (kvObj[sKey]) {
                return kvObj[sKey];
            } else {
                // 如果不存在返回空字符串
                return "";
            }
        } else {
            // 如果不指定参数返回全部参数对象或者{};
            return kvObj;
        }
    }

    return returnResult(new ResultObj(sUrl), sKey);
}

var isArray = Function.isArray || function (obj) {
    return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object Array]";
}

console.log(getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe", ""));
console.log(getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe", "test"));
console.log(getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe", "key"));
