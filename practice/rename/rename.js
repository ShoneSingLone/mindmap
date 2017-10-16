const fs = require('fs');
let subPath = ".";
subPath = fs.readdirSync(subPath);
for (let count_2 = 0; count_2 < subPath.length; count_2++) {
    let ptt = new RegExp("www.zxit8.com", "i");
    if (ptt.test(subPath[count_2])) {
        fs.rename(subPath[count_2], subPath[count_2].replace(ptt, "玩转算法面试"), (err) => {
            console.log(err || newNamePath);
        });
    }
}
