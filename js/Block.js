
var Block=function(id,locations,state,fireImage,type,centerX,centerY)
{
this.id=id;
this.state=state;
this.centerX=centerX;
this.centerY=centerY;
this.fireImage=fireImage;
this.type=type;
this.locations=[];
this.locations[0]=locations[0];
this.locations[1]=locations[1];
this.locations[2]=locations[2];
this.locations[3]=locations[3];
this.addEventListener('extinguish',function(e){
	alert('hhh');
for(i=0;i<4;i++)
	if(e.id==this.locations[i])
		this.state='clean';
},false);
};
Block.prototype.render=function(n,width,height)
{
var q,w;
for(i=0;i<4;i++)
{
var location=this.locations[i];
var x=(location*width)%can.width;
var y=Math.floor(location/n)*height;
ctx.fillStyle="black";
ctx.fillRect(x,y,width,height);
if(this.state=='fire')
ctx.fillStyle="#fdfa00";
else if(this.state=='clean')
ctx.fillStyle="red";
ctx.fillRect(x+1,y+1,width-2,height-2);

if(i==0)
q=x,w=y;


}

if(this.state=='fire')
{

ctx.drawImage(this.fireImage,this.centerX-width*2,this.centerY-2*height,4*width,4*height);

}


};
Block.prototype.rotate=function()
{
	if(this.type!=5)
	{
	for(i=0;i<4;i++)
	{
		var location=this.locations[i];
		var width=can.width/n;
		var height=width;
	//	alert(width+" "+height);
	var x=(location*width)%can.width;
var y=Math.floor(location/n)*height;
var M;
var l=1;
if(x!=this.centerX)
{

 M=(y-this.centerY)/(x-this.centerX);
 

}
else
	M=10000;
var theta;
if(x>this.centerX||y>this.centerY)
	l=-1;

if(M<10000)
 theta=Math.atan(M)*180/Math.PI;
else
theta=-180;
var phi;
if(M<10000)
 phi=45-Math.atan(M)*180/Math.PI;
else
phi=-45;
if((this.type==2||this.type==4)&&phi==90&&x<this.centerX&&y>this.centerY)
l=1;
var distance=l*Math.sqrt((x-this.centerX)*(x-this.centerX)+(y-this.centerY)*(y-this.centerY));
var x2=x+Math.sqrt(2)*distance*Math.cos(phi*Math.PI/180);
var y2=y-Math.sqrt(2)*distance*Math.sin(phi*Math.PI/180)+height;
this.locations[i]=Math.floor((((y2-height)*can.width)/(width*height))+x2/width);
//alert(phi+" "+this.locations[i]);
}
}
}
Block.prototype.descend=function()
{
	var height=can.width/n;
	this.centerY+=height;
	for(i=0;i<4;i++)
	{
		this.locations[i]+=n;
	}

};