    var testNum = 12,
        testNum2 = 123456789,
        testPad = 7;

    /* 最简单朴素的写法 */
    function pad(num, n) {
        var i = (num + "").length;
        while (i++ < n) num = "0" + num;
        return num;
    }

    println(pad(testNum, testPad));
    println(pad(testNum2, testPad));

    /* 递归式写法 */
    function pad2(num, n) {
        if ((num + "").length >= n) return num;
        return pad2("0" + num, n);
    }
    println(pad2(testNum, testPad));
    println(pad2(testNum2, testPad));

    /* 奇淫技巧式写法 */
    function pad3(num, n) {
        return (Array(n).join(0) + num).slice(-n);
    }

    println(pad3(testNum, testPad));
    println(pad3(testNum2, testPad)); // ! WRONG

    /* 性能测试 */
    var N = 50000,
        start;
    for (var i = 0, c; c = ["pad", "pad2", "pad3"][i++];) {
        start = +new Date;
        for (var j = 0; j < N; ++j) {
            window[c](12, 3);
        }
        println(c + " time: " + (+new Date - start));
    }

    function println(msg) {
        document.write(msg + "<br />");
    }


    /* 质朴长存法 */
    function pad(num, n) {
        var len = num.toString().length;
        while (len < n) {
            num = "0" + num;
            len++;
        }
        return num;
    }
