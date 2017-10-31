function getString() {
    var date = new Date();
    var dateArray = [(date.getFullYear()), (date.getMonth() + 1 + ""), (date.getDate()), getDate(date.getHours()), (date.getMinutes()), (date.getMilliseconds())];
    return dateArray.join("");
}

function getDate(date) {
    var date = new Number(date);
    var dateStrArray = [];
    dateStrArray.push(Math.floor(date / 10));
    dateStrArray.push(date % 10);
    return dateStrArray.join("");
}
exports.dateToString = getString;
