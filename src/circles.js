;
var circles = (function () {
	'use strict';

	var w = 600,
			h = 600,
			count = 60,
			circleData,
			circleDataOrig;

	function draw() {
		var svgCircles = d3Shared.makeSvg(w, h);

		makeData();
		drawElement(svgCircles.selectAll('circle').data(circleData).enter().append('circle'));
		svgCircles.on('click', function () {
			makeData();
			drawElement(svgCircles.selectAll('circle').data(circleData));
		})
	}

	function drawElement(svg) {
		svg.attr({
			r: function (d) {
				return Math.floor(d[2]);
			},
			cy: function (d, i) {
				return 6 * d[0];
			},
			cx: function (d) {
				return 6 * d[1];
			},
			fill: d3Shared.generateRandomColor
		})
	}

	function makeData() {
		circleDataOrig = d3Shared.generateData(count * 3);
		circleData = [];
		for (var i = 0; i < count; i++) {
			circleData.push([circleDataOrig[i], circleDataOrig[i + count], circleDataOrig[i + 2 * count]]);
		}
	}

	return {
		draw: draw
	}
})();
