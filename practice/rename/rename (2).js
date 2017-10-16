const fs = require('fs');
/**
 * 创建一棵树
 */


// let chineseName = ["步惊云外传", "父猛于虎", "传说", "惊变", "火烧凌云窟", "一遇风云便化龙", "剑快，箭快，我最快", "降龙神腿", "凤舞九天", "天下起风云", "如来神掌", "风云际会浅水游九霄龙吟惊天变", "惊云的眼神", "暴雨狂风", "疯狂的血", "无名英雄", "悟", "凌云窟之秘", "决裂", "风云决红颜血", "霸王别姬", "最爱是谁", "问谁领风骚", "灭天绝地剑廿三", "天下大乱", "一剑平天下", "冰魄", "再向虎山行", "一楼高手", "毁天", "风云际会", "师徒生死决", "大限难逃", "云无常风无向", "麒麟臂", "麒麟劫", "风火会", "焚身以火", "铁面无私", "血未冷泪未干", "惊神之战", "铁面后的剑", "剑魔", "剑祭", "剑祭后的阴谋", "剑祭之变", "剑祭三毒", "这一刀谁敢尝？这一剑谁敢找？", "雪饮神风", "傲雪六诀", "有情血无情雪", "九霄龙吟惊天变", "风云际会浅水游", "无名的三个仆人", "枭雄无路", "双雄会", "剑在云在", "剑归何处", "英雄气短", "以命赔剑", "无道", "决一战", "无情的剑局", "强者降临", "刀凶剑危", "杀不虚", "擒龙", "蓄势以发二十年的一剑", "剑宗", "极峰之战", "杀人不用剑舍身不舍心", "绝心", "风云变", "左天罗右地网", "步惊云的结局", "猪皇本色", "皇拳", "神龙变·风云现", "地狱难逃", "无神东来", "杀皇", "天下第一人", "魔道行", "一念成魔", "万剑归宗之秘", "无法可挡的魔刀", "惊成决·英雄血", "刀剑决", "同生共死", "最后之战", "拳痴", "控神者", "诛天", "谁与争锋", "拳祸", "借刀杀人", "惊月泣天", "拳殛无限·刀剑虚空", "无名之死", "天皇之子", "刹·煞·杀", "杀麟求路", "北饮狂刀", "龙冢之秘", "完美一招·完美一战", "有情人无情魔", "弑父", "不求不败只求一死", "霜逝", "战狂风", "死战·壹", "死战·贰", "死战·参", "死战·肆", "死战·最终回"];
let pathArray = [];
let PathObj = function(name, subPathArray) {
    this.name = name || "";
    this.subPathArray = subPathArray || [];
}
let SubPathObj = function(file) {
    this.oldName = file;
    this.newName = file.slice(-6);
}


PathObj.prototype.getFullPath = function() {
    return this.path + "/" + this.subPath;
};

// console.log("getPath: " + getPath("./rename"));
const rootPath = fs.readdirSync("./rename");
// fs.stat("./rename", (err, stats) => {
//     if (err) throw err;
//     console.log(`stats: ${JSON.stringify(stats)}`);
// });

for (let i = 0; i < rootPath.length; i++) {
    let currentPath = parseInt(rootPath[i]);
    pathArray[currentPath] = new PathObj(rootPath[i]);
}



for (let i = 0; i < pathArray.length; i++) {
    let subPath = "./rename/" + pathArray[i].name;
    subPath = fs.readdirSync(subPath);
    for (let count_2 = 0; count_2 < subPath.length; count_2++) {
        let imgName = subPath[count_2].toString();
        let ptt = new RegExp("\jpg$", "i");
        ptt.test(imgName) ? pathArray[i].subPathArray.push(new SubPathObj(imgName)) : "";
    }


    for (let i = 0; i < pathArray.length; i++) {
        let prefix = ("./rename/" + pathArray[i].name);
        for (let count_4 = 0; count_4 < pathArray[i].subPathArray.length; count_4++) {
            let subPath = pathArray[i].subPathArray[count_4];
            let oldNamePath, newNamePath, newNamePrefix, newNameSuffix, newNameArray = subPath.newName.split(".");
            newNamePrefix = newNameArray[0];
            newNameSuffix = newNameArray[1].toLowerCase();
            oldNamePath = subPath.oldName;
            oldNamePath = (prefix + "/" + oldNamePath);
            newNamePath = (prefix + "/" + pathArray[i].name + newNamePrefix + chineseName[parseInt(pathArray[i].name)] + "." + newNameSuffix);
            fs.rename(oldNamePath, newNamePath, (err) => {
                console.log(err || newNamePath);
            });
        }
    }

}



// print(pathArray);

function print(pathArray) {
    for (var i = 0; i < pathArray.length; i++) {
        console.log(`stats: ${JSON.stringify(pathArray[i])}`);
    }
}



function getPathName(argument) {
    fs.readFile("./contents.json", function(err, data) {
        if (err) throw err;
        const contentsArray = JSON.parse(data);
        for (let i = 0; i < contentsArray.length; i++) {
            console.log(contentsArray[i]);
        }
    });
}
