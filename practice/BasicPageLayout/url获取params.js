function getUrlParam(sUrl, sKey) {

    var kvArray = sUrl.split("?")[1].split("#")[0].split("&").map(function (val, index, arr) {
        return val.split("=");
    });
    var returnResult, ResultObj;

    ResultObj = function (kvArray) {
        var kvObj = {},
            resultObj = {};
        // 粗加工,有附加信息的kv对象
        for (var i = 0; i < kvArray.length; i++) {
            var currentArray = kvArray[i];
            //初次直接赋值
            if (!kvObj[currentArray[0]]) {
                kvObj[currentArray[0]] = currentArray[1];
            } else {
                // 重复视为有同名参数
                // 处理成数组
                // 未处理
                if (!kvObj[currentArray[0]].isArray) {
                    var stamp = kvObj[currentArray[0]];
                    kvObj[currentArray[0]] = {};
                    kvObj[currentArray[0]].isArray = true;
                    kvObj[currentArray[0]].length = 0;
                    kvObj[currentArray[0]][kvObj[currentArray[0]].length++] = stamp;
                }
                // 已经处理
                kvObj[currentArray[0]][kvObj[currentArray[0]].length++] = currentArray[1];
            }
        }

        for (var key in kvObj) {
            var _val = kvObj[key];
            if (_val.isArray) {
                var _kvArray = [];
                for (var i = 0; i < _val.length; i++) {
                    _kvArray.push(_val[i]);
                }
                resultObj[key] = _kvArray;
            } else {
                // 返回参数的值
                resultObj[key] = _val;
            }
        }
        return resultObj;
    }
    var resultObj = new ResultObj(kvArray);
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

    return returnResult(resultObj, sKey);
}

var isArray = Function.isArray || function (obj) {
    return typeof obj === "object" && Object.prototype.toString.call(obj) === "[object Array]";
}

console.log(getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe", "test"));
