angular.module("tipCalc.controllers", ["tipCalc.services"])

.controller("tipCalcController", ["$scope", "calculateSvc", function($scope, calculateSvc){

	// defaults
	resetTipData();
	
	$scope.calculateTip = function() {
		if ($scope.theForm.$valid) {
			$scope.tipForm.tipPercent = calculateSvc.roundTip($scope.tipForm.tipPercent);
			$scope.amt = calculateSvc.calcTipAmount($scope.tipForm.tipPercent, $scope.tipForm.billTotal);
			$scope.total = calculateSvc.calcNewBillTotal($scope.tipForm.billTotal, $scope.amt );
			$scope.tipRating = calculateSvc.getTipRating($scope.tipForm.tipPercent);
		}
	};

	$scope.noTip = function() {
		$scope.tipForm = angular.copy({});
		$scope.tipForm.$pristine = true;
		resetTipData();
	};
	
	function resetTipData(){
		var defaultData = calculateSvc.getDefaultData();
		$scope.amt = defaultData.amt;
		$scope.total = defaultData.total;
		$scope.tipRating = calculateSvc.getDefaultRating();
	};

}]);
