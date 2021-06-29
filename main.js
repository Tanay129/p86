var canvas=new fabric.Canvas(myCanvas);
var playerX=10;
var playerY=10;
var blockWidth=30;
var blockHeight=30;
var playerObject="";

function player(){
    fabric.Image.fromURL("New Project (1).png", function(Img){
        playerObject=Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerObject);
    });


}

function newImg(getImg){
    fabric.Image.fromURL(getImg, function(Img){
        blockObject=Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockObject);
    });


}