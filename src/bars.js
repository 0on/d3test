;
var bars = (() => {
  'use strict';

  const w = 500,
        h = 200,
        count = 30;
  let data = d3Shared.generateData(count);

  function draw() {
    let svg = d3Shared.makeSvg(w, h);

    drawElements(svg.selectAll('rect').data(data).enter().append('rect'));
    svg.on('click', () => {
      data = d3Shared.generateData(count);
      drawElements(svg.selectAll('rect').data(data).transition().ease('cubic').duration(500));
    });
  };

  function drawElements(svg) {
    svg.attr({
      x: (d, i) => {
        return i * (w / data.length);
      },
      y: (d) => {
        return h - 2 * d;
      },
      width: () => {
        return w / data.length - 1;
      },
      height: (d) => {
        return 2 * d;
      },
      fill: d3Shared.generateRandomColor
    });
  }

  return {
    draw: draw
  };

})();
