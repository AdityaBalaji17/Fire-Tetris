var GunPowder=function(id,location)
{
this.id=id;
this.location=location;
//this.status='alive';
};
GunPowder.prototype.render=function(n,width,height)
{
//	if(this.status=='alive')
//	{
var location=this.location;
var x=(location*width/2)%can.width;
var y=Math.floor(location/n)*height/2;
var gunPowderImage=new Image();
gunPowderImage.onload=function(){
ctx.drawImage(gunPowderImage,x,y,width,height);//ctx defined in utilities.js
};
gunPowderImage.src="../Tetris/img/gunpowder.png";
//}
};