(function() {

	var injector = angular.injector([ 'ng', 'tipcalculator' ]);
	var $controller, calculatedData;

	module("Tip Controller Tests", {
		beforeEach: function() {
			this.$scope = injector.get('$rootScope').$new();
			$controller = injector.get('$controller');
			$controller('tipCalcController', {
				$scope : this.$scope
			});

			// form in UI
			this.$scope.theForm = {
				$valid : true
			};
	    }
	});	



	test("Tip Calculations", function() {
		this.$scope.tipForm = {
			billTotal : 10,
			tipPercent : 15
		};
		this.$scope.calculateTip();
		strictEqual(this.$scope.amt, "1.50", "When the tip is 15% for a $10 bill, $scope tip amount should be 1.50");
		strictEqual(this.$scope.total, "11.50", "When the tip is 15% for a $10 bill, $scope new bill total should be 11.50");
		strictEqual(this.$scope.tipRating, "Standard", "When the tip is 15% for a $10 bill, $scope rating should be Standard");
	});		


})();