;
var d3Shared = (function() {
  'use strict';

  function generateRandomColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 16).toString(16);
    }
    return color;
  };

  function generateData(n) {
    var ar = [];
    for (var i = 0; i < n; i++) {
      ar.push(Math.floor(Math.random() * 100));
    }
    return ar;
  };

	function defaultSample(d) {
		return d;
	};

	function makeSvg(w, h) {
		return d3.select('body').append('svg')
		.attr({
			width: w,
			height: h
		});
	}

	return {
		defaultSample: defaultSample,
		makeSvg: makeSvg,
		generateData: generateData,
		generateRandomColor: generateRandomColor
	}

})();
