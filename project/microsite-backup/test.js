
                // 有一堆原材料就是自有变量
                var Calculator = function(decimalDigits, tax) {
                    this.decimalDigits = decimalDigits;
                    this.tax = tax;
                };
                // 交给谁来处理是可以切换的
                var one = {
                    describe: function() {
                        return console.log("original describe");
                    },
                    add: function(x, y) {
                        return console.log(x + y);
                    },
                    subtract: function(x, y) {
                        return console.log(x - y);
                    }
                };
                var two = {
                    describe: function() {
                        return console.log("original describe");
                    },
                    multiply: function(x, y) {
                        return console.log(x * y);
                    },
                    divide: function(x, y) {
                        return console.log(x / y);
                    }
                };
                Calculator.prototype = one;
                oneCalculator = new Calculator();
                oneCalculator.add(1, 2);
                oneCalculator.subtract(1, 2);
                // or
                Calculator.prototype = two;
                twoCalculator = new Calculator();
                twoCalculator.multiply(1, 2);
                twoCalculator.divide(1, 2);
                twoCalculator.__proto__.describe = function() {
                    return console.log("describe has changed");
                }
                one.describe();
                two.describe();
                three = new Calculator();
                three.describe();
            