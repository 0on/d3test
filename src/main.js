;(function () {
	'use strict';

	var w = 500,
			h = 200,
			data = generateData(50),
			svg = d3.select('body').append('svg')
							.attr({
								width: w,
								height: h
							});

	svg.selectAll('rect').data(data).enter().append('rect')
		.attr({
			x: function (d, i) {
				return i * (w / data.length);
			},
			y: function (d) {
				return h - 2 * d;
			},
			width: function () {
				return w / data.length - 1;
			},
			height: function (d) {
				return 2 * d;
			},
			fill: generate
		});

	function generateData(n) {
		var ar = [];
		for (var i = 0; i < n; i++) {
			ar.push(Math.floor(Math.random() * 100));
		}
		return ar;
	}

})();
