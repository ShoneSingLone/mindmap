const fs = require('fs');
let subPath = ".",
    recordObj = {},
    recordArray = [],
    recNum;
subPath = fs.readdirSync(subPath);
for (let count_2 = 0; count_2 < subPath.length; count_2++) {
    let ptt = new RegExp("^第四章", "i");
    let title = "04";
    if (ptt.test(subPath[count_2])) {
        fs.rename(subPath[count_2], subPath[count_2].replace(ptt, "算法与数据结构(C++)" + title), (err) => {
            console.log(err || subPath[count_2]);
        })
    }
}
