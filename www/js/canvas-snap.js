$(document).ready(function() {
    var canvas = new fabric.Canvas('tiles', { selection: false });
    var grid = 32;

    // create grid

    for (var i = 0; i < (640 / grid); i++) {
      canvas.add(new fabric.Line([ i * grid, 0, i * grid, 640], { stroke: '#ccc', selectable: false }));
      canvas.add(new fabric.Line([ 0, i * grid, 640, i * grid], { stroke: '#ccc', selectable: false }))
    }

    // add objects

    canvas.add(new fabric.Rect({ 
      left: 100, 
      top: 100, 
      width: 32, 
      height: 32, 
      fill: '#000', 
      originX: 'left', 
      originY: 'top',
      centeredRotation: true
    }));
    canvas.renderAll();

    // snap to grid

    canvas.on('object:moving', function(options) { 
      options.target.set({
        left: Math.round(options.target.left / grid) * grid,
        top: Math.round(options.target.top / grid) * grid
      });
    });
}
