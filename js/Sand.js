var Sand=function(id,location)
{
this.id=id;
this.location=location;
};
Sand.prototype.render=function(n,width,height)
{
var location=this.location;
var x=(location*width/2)%can.width;
var y=Math.floor(location/n)*height/2;
var sandImage=new Image();
sandImage.onload=function(){
ctx.drawImage(sandImage,x,y,width,height);//ctx defined in utilities.js
};

sandImage.src="../Tetris/img/sand.png";
ctx.strokeStyle="white";
/*ctx.rect(x,y,width,height);
ctx.stroke();       */
};