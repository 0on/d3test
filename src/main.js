;(function () {
	'use strict';

	var selector = function() {
				return d3.select('.container').selectAll('div');
			};

	addData(selector(), generateData(20), divRectsProcessor);
	// setInterval(function () {
	// 	console.log(1);
	// 	var data = generateData(20);
	// 	removeData(selector(), []);
	// 	addData(selector(), data, divRectsProcessor);
	// }, 500);

	function generateData(n) {
		var ar = [];
		for (var i = 0; i < n; i++) {
			ar.push(Math.floor(Math.random() * 100));
		}
		return ar;
	}

	// data manipulation

	function removeData(selector, restData) {
		selector.data(restData, function(d) {
			return d;
		}).exit().remove();
	}

	function addData(selector, data, processor) { //need selector + data + adder
		processor(selector.data(data, function(d) {
			return d;
		}).enter());
	}

	// prcessors

	function divRectsProcessor(data) {
		data.append('div')
			.style('height', function (d) {
				return d * 2;
			})
			.style('background-color', generate);
	}

	function pTextProcessor(data) {
		data.append('p')
			.text(function (d) {
				return d;
			})
	}
})();
