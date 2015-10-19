;
var bars = (function() {
  'use strict';

  var w = 500,
      h = 200,
      count = 30,
      data = d3Shared.generateData(count);

  function draw() {
    var svg = d3Shared.makeSvg(w, h);

    drawElements(svg.selectAll('rect').data(data).enter().append('rect'));
    svg.on('click', function () {
      data = d3Shared.generateData(count);
      drawElements(svg.selectAll('rect').data(data).transition().ease('cubic').duration(500));
    });
  };

  function drawElements(svg) {
    svg.attr({
      x: function(d, i) {
        return i * (w / data.length);
      },
      y: function(d) {
        return h - 2 * d;
      },
      width: function() {
        return w / data.length - 1;
      },
      height: function(d) {
        return 2 * d;
      },
      fill: d3Shared.generateRandomColor
    });
  }

  return {
    draw: draw
  };

})();
