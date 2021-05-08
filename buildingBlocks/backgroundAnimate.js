function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_WIDTH);
    ctx.drawImage(backgroundLayer4, x, 0);
    ctx.drawImage(backgroundLayer4, x2, 0);
    if(x < - 2400) x = 2400 + x2 - gameSpeed;
    else x -= gameSpeed;
    if(x2 < - 2400) x2 = 2400 + x - gameSpeed;
    else x2 -= gameSpeed;
    requestAnimationFrame(animate);
};
animate();