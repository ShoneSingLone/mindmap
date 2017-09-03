var print = function () {
  try {
    throw new Error();
  } catch (e) {
    var eStackArray = e.stack.split("\n");
    if (eStackArray.length > 2) console.error(eStackArray[2]);
    if (arguments.length > 0) console.warn(arguments[0]);
  }
}

module.exports = {print:print};
