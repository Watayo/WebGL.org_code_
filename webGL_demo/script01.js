//sample001

onload = function(){
    var c = document.getElementById('canvas');
    c.width = 500;
    c.height = 300;
    //webgl
    var gl = c.getContext('webgl') || c.getContext('experimental-webgl');

    //canvas
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}
