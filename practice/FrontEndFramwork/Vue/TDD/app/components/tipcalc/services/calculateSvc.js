angular.module("tipCalc.services", [])

	.factory("calculateSvc", function () {

		var defaultRating = "N/A";

		var defaultdata = {
			tipPercent: "0",
			amt: "0.00",
			total: "0.00"
		};

		function getDefaultRating() {
			return defaultRating;
		};

		function getDefaultData() {
			return defaultdata;
		};

		function getTipRating(tip) {
			var tipRating = "N/A";
			if (tip < 15) {
				tipRating = "So so";
			} else if (tip == 15) {
				tipRating = "Standard";
			} else if (tip > 15 && tip <= 20) {
				tipRating = "Great!";
			} else if (tip > 20 && tip <= 50) {
				tipRating = "Super!";
			} else {
				tipRating = "WOW!";
			}
			return tipRating;
		};

		function calcTipAmount(billTotal, tipPercent) {
			var tipAmount = Number(billTotal) * (Number(tipPercent) / 100);
			return tipAmount.toFixed(2);
		};

		function calcNewBillTotal(billTotal, tipAmount) {
			var newBillTotal = Number(billTotal) + Number(tipAmount);
			return newBillTotal.toFixed(2);
		};

		function roundTip(tipPercent) {
			var nTipPercent = Number(tipPercent);
			return Math.round(nTipPercent);
		};

		function calculate(tipPercent, billTotal) {
			var nTipPercent = Number(tipPercent);
			var nBillTotal = Number(billTotal);

			if (angular.isNumber(nTipPercent) && angular.isNumber(nBillTotal)) {
				var roundedTip = Math.round(nTipPercent);
				var tipAmount = calcTipAmount(nBillTotal, roundedTip);
				var newBillTotal = calcNewBillTotal(nBillTotal, tipAmount);

				var calculatedData = {
					tipPercent: roundedTip,
					amt: tipAmount.toFixed(2),
					total: newBillTotal.toFixed(2)
				};

				return calculatedData;
			} else {
				return getDefaultData();
			}


		}
		;
		return {
			roundTip: roundTip,
			calcTipAmount: calcTipAmount,
			calcNewBillTotal: calcNewBillTotal,
			calculate: calculate,
			getDefaultData: getDefaultData,
			getTipRating: getTipRating,
			getDefaultRating: getDefaultRating
		};

	});
