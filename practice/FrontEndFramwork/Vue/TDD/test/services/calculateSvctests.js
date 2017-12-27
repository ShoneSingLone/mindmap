(function() {

	var injector = angular.injector([ 'ng', 'tipcalculator' ]); // ng and the name of our app

	module("Tip Service Tests", {
		beforeEach: function() {
			this.CalcTestSvc = injector.get("calculateSvc");
	    }
	});	
	
	
	test("Tip Calculations", function() {
		var tipAmount = this.CalcTestSvc.calcTipAmount(10.00, 15);
		var newBillTotal = this.CalcTestSvc.calcNewBillTotal(10.00, 1.50);
		strictEqual(tipAmount, "1.50", "When the tip is 15% and the bill is $10, the tip amount should be $1.50");
		strictEqual(newBillTotal, "11.50", "When the bill is is $10 and the tip amount is $1.50, the new bill total should be $11.50");
	});		
	
	test("Tip Ratings", function() {
		var rating = this.CalcTestSvc.getTipRating(5);
		strictEqual(rating, "So so", "When the tip amount is below $15, the rating should be So So");
		rating = this.CalcTestSvc.getTipRating(15);
		strictEqual(rating, "Standard", "When the tip amount equals $15, the rating should be Standard");
		rating = this.CalcTestSvc.getTipRating(20);
		strictEqual(rating, "Great!", "When the tip amount is between $15 and $20 (inclusive), the rating should be Great!");
		rating = this.CalcTestSvc.getTipRating(50);
		strictEqual(rating, "Super!", "When the tip amount is between $20 and $50 (inclusive), the rating should be Super!");
		rating = this.CalcTestSvc.getTipRating(60);
		strictEqual(rating, "WOW!", "When the tip amount is greater than $50, the rating should be Wow!");
	});		
		

})();