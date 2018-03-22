var old;
var score=0;
var rotated=0;
var obj1;
var over=0;
var lastState=new Array();
var can,ctx;
var lastloc=10000;
var destroyed=[];
var dd=0;
var sands=new Array();
var guns=new Array(); 
var snum=0,gnum=0;
var firenum=0;
var n=25;
var bgm;
var explosionImage;
var interval=800;
var i1=0;
var g=0;
var W,H;
var fireImage,constellation;
var pixels=new Array();
document.addEventListener("DOMContentLoaded",function(){
can=document.getElementById("can");
ctx=can.getContext("2d");

bgm=document.getElementById("bgm");
can.width=can.width-can.width%n;
can.height=can.height-can.height%n;
W=can.width;
H=can.height;
var width=W/n;
	var height=width;
constellation=new Image();
constellation.onload=function(){
fireImage=new Image();

fireImage.onload=function(){
randomBlockPicker();
};
fireImage.src="../Tetris/img/fire.png";


};
constellation.src="../Tetris/img/constellation.jpg";

for(a=0;a<W*H/(width*height)+2*n;a++)
{
pixels[a]=new Pixel(a,'clean');
if(a>W*H/(width*height))
pixels[a].state='block';
var extinguish=new Event('extinguish');
 (function(index) {
        pixels[index].addEventListener("blockhere", function(e) {
        	lastState[index]=pixels[index].state;

           var block=e.detail;
           pixels[index].blockId=i1;
          
          // console.log(block.locations);
          
           if(block.state=='fire' &&pixels[index].state=='sand')
           {
           	
            
           block.state='clean';
            pixels[index].state='clean';
           for(j=0;j<snum;j++)
{
	if(sands[j])
	if(pixels[sands[j].location].state=='clean'||pixels[sands[j].location+1].state=='clean'||pixels[sands[j].location+n].state=='clean'||pixels[sands[j].location+n+1].state=='clean')
	{
		pixels[sands[j].location].state=pixels[sands[j].location+1].state=pixels[sands[j].location+n].state=pixels[sands[j].location+n+1].state='clean';
	
		
		
sands[j].status='destroyed';	
			for(k=j;k<snum;k++)
			sands[k]=sands[k+1];
		var rand=Math.random();
		var r2=150+Math.floor(Math.random()*n*n)%(n*n-190);
		if(rand>0.5)
		{
		j--;
		snum--;

		guns[gnum]=new GunPowder(gnum,r2);
		pixels[r2].state='gun';
		pixels[r2+1].state='gun';
		pixels[r2+n].state='gun';
		pixels[r2+n+1].state='gun';
		gnum++;
	}
	else
	{
		if(sands[j])
     sands[j].location=r2;
		pixels[r2].state='sand';
		pixels[r2+1].state='sand';
		pixels[r2+n].state='sand';
		pixels[r2+n+1].state='sand';
		
	}
	

	
}
	
}
  


           }
          else if(block.state=='clean' &&pixels[index].state=='sand')
           {
           	
            
           	block.state='sand';
   pixels[index].state='clean';
       for(j=0;j<snum;j++)
{
	if(sands[j])
	if(pixels[sands[j].location].state=='clean'||pixels[sands[j].location+1].state=='clean'||pixels[sands[j].location+n].state=='clean'||pixels[sands[j].location+n+1].state=='clean')
	{
		pixels[sands[j].location].state=pixels[sands[j].location+1].state=pixels[sands[j].location+n].state=pixels[sands[j].location+n+1].state='clean';
	
		
		
sands[j].status='destroyed';	
			for(k=j;k<snum;k++)
			sands[k]=sands[k+1];
		var rand=Math.random();
		var r2=150+Math.floor(Math.random()*n*n)%(n*n-190);
		if(rand>0.5)
		{
		j--;
		snum--;

		guns[gnum]=new GunPowder(gnum,r2);
		pixels[r2].state='gun';
		pixels[r2+1].state='gun';
		pixels[r2+n].state='gun';
		pixels[r2+n+1].state='gun';
		gnum++;
	}
	else
	{
     sands[j]=new Sand(j,r2);
		pixels[r2].state='sand';
		pixels[r2+1].state='sand';
		pixels[r2+n].state='sand';
		pixels[r2+n+1].state='sand';
		
	}
	
}
	
}

           }
            else if(block.state=='clean' &&pixels[index].state=='gun')
           {
           	
            
           	block.state='gun';
           	   pixels[index].state='clean';
for(j=0;j<gnum;j++)
{
	if(guns[j])
	if(pixels[guns[j].location].state=='clean'||pixels[guns[j].location+1].state=='clean'||pixels[guns[j].location+n].state=='clean'||pixels[guns[j].location+n+1].state=='clean')
	{
		pixels[guns[j].location].state=pixels[guns[j].location+1].state=pixels[guns[j].location+n].state=pixels[guns[j].location+n+1].state='clean';
	
		
		
guns[j].status='destroyed';	
			for(k=j;k<snum;k++)
			guns[k]=guns[k+1];
var rand=Math.random();
		var r2=150+Math.floor(Math.random()*n*n)%(n*n-190);
		if(rand>0.5)
		{
		j--;
		gnum--;

		sands[snum]=new Sand(snum,r2);
		pixels[r2].state='sand';
		pixels[r2+1].state='sand';
		pixels[r2+n].state='sand';
		pixels[r2+n+1].state='sand';
		snum++;
	}
	else
	{
     guns[j]=new GunPowder(j,r2);
		pixels[r2].state='gun';
		pixels[r2+1].state='gun';
		pixels[r2+n].state='gun';
		pixels[r2+n+1].state='gun';
		
	}
		j--;
		gnum--;
	
}
	
}
           }
           else if(block.state=='fire' &&pixels[index].state=='gun')
           {
           	
           	explosionImage=new Image();
explosionImage.onload=function(){
ctx.drawImage(explosionImage,block.centerX-3*width,block.centerY-2*height,100,100);
g=1;

//interval=1000;

bgm.pause();

document.getElementById("exp").play();
pixels[index].state='clean';
score--;

bgm.play();
for(j=0;j<gnum;j++)
{
	if(guns[j])
	if(pixels[guns[j].location].state=='clean'||pixels[guns[j].location+1].state=='clean'||pixels[guns[j].location+n].state=='clean'||pixels[guns[j].location+n+1].state=='clean')
	{
		pixels[guns[j].location].state=pixels[guns[j].location+1].state=pixels[guns[j].location+n].state=pixels[guns[j].location+n+1].state='clean';
	
		
		
guns[j].status='destroyed';	
			for(k=j;k<snum;k++)
			guns[k]=guns[k+1];
var rand=Math.random();
		var r2=150+Math.floor(Math.random()*n*n)%(n*n-190);
		if(rand>0.5)
		{
		j--;
		gnum--;

		sands[snum]=new Sand(snum,r2);
		pixels[r2].state='sand';
		pixels[r2+1].state='sand';
		pixels[r2+n].state='sand';
		pixels[r2+n+1].state='sand';
		snum++;
	}
	else
	{
     guns[j].location=r2;
		pixels[r2].state='gun';

		pixels[r2+1].state='gun';
		pixels[r2+n].state='gun';
		pixels[r2+n+1].state='gun';
		gnum++;
	}
		
}
	block.stop=1;
}

if(pixels[index-1].state=='block'&&pixels[index-1].blockId>=0)
{
blocks[pixels[index-1].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index-1].blockId].locations[i]].state='clean';
score--;
}


if(pixels[index-2].state=='block'&&pixels[index-2].blockId>=0)
{
blocks[pixels[index-2].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index-2].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index+n+1].state=='block'&&pixels[index+n+1].blockId>=0)
{
blocks[pixels[index+n+1].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index+n+1].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index+n].state=='block'&&pixels[index+n].blockId>=0)
{
blocks[pixels[index+n].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index+n].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index+1].state=='block'&&pixels[index+1].blockId>=0)
{
blocks[pixels[index+1].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index+1].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index+2].state=='block'&&pixels[index+2].blockId>=0)
{
blocks[pixels[index+2].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index+2].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index-n].state=='block'&&pixels[index-n].blockId>=0)
{
blocks[pixels[index-n].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index-n].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index-n-1].state=='block'&&pixels[index-n-1].blockId>=0)
{
blocks[pixels[index-n-1].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index-n-1].blockId].locations[i]].state='clean';
score--;
}
document.getElementById("score").innerHTML="Score: "+score;
pixels[index-1].blockId=-2;
pixels[index-2].blockId=-2;
pixels[index-n-2].blockId=-2;
pixels[index-n].blockId=-2;
pixels[index-n-1].blockId=-2;
pixels[index+n].blockId=-2;
pixels[index+n+1].blockId=-2;
pixels[index-n+1].blockId=-2;
pixels[index-n-1].blockId=-2;

block.status='destroyed';
//block.blockId=-2;
           };
explosionImage.src="../Tetris/img/explosion.svg";
           }
           var f=0;
         	if(pixels[index+n].state=='block'&&pixels[index+n].blockId!=i1&&pixels[index+n].blockId!=-2)
          	{
          		if(index/n<=4)
          		{
          			if(over==0)
          			{
                   alert("Game over");
                   over=1;
                   window.location.href="index.html";
               }
          		}
          	
          		
          	pixels[index].state='block';
          	if(index+n<W*H/(width*height))
          	{
          		if(blocks[pixels[index].blockId]&&blocks[pixels[index+n].blockId])
           if(blocks[pixels[index].blockId].state=='fire'&&blocks[pixels[index+n].blockId].state=='gun'||
blocks[pixels[index+n].blockId].state=='fire'&&blocks[pixels[index].blockId].state=='gun'
           	)
           {
           	           	explosionImage=new Image();
explosionImage.onload=function(){
ctx.drawImage(explosionImage,block.centerX-3*width,block.centerY-2*height,100,100);
g=1;
//interval=1000;

score--;

document.getElementById("exp").play();
pixels[index].state='clean';
if(pixels[index-1].state=='block'&&pixels[index-1].blockId>=0)
{
blocks[pixels[index-1].blockId].status='destroyed';
score--;
}


if(pixels[index-2].state=='block'&&pixels[index-2].blockId>=0)
{
blocks[pixels[index-2].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index-2].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index+n+1].state=='block'&&pixels[index+n+1].blockId>=0)
{
blocks[pixels[index+n+1].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index+n+1].blockId].locations[i]].state='clean';
score--;
}

if(pixels[index+n].state=='block'&&pixels[index+n].blockId>=0)
{
blocks[pixels[index+n].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index+n].blockId].locations[i]].state='clean';
score--;
}

if(pixels[index+1].state=='block'&&pixels[index+1].blockId>=0)
{
blocks[pixels[index+1].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index+1].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index+2].state=='block'&&pixels[index+2].blockId>=0)
{
blocks[pixels[index+2].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index+2].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index-n].state=='block'&&pixels[index-n].blockId>=0)
{
blocks[pixels[index-n].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index-n].blockId].locations[i]].state='clean';
score--;
}
if(pixels[index-n-1].state=='block'&&pixels[index-n-1].blockId>=0)
{
blocks[pixels[index-n-1].blockId].status='destroyed';
for(i=0;i<4;i++)
pixels[blocks[pixels[index-n-1].blockId].locations[i]].state='clean';
score--;
}
document.getElementById("score").innerHTML="Score: "+score;

pixels[index-1].blockId=-2;
pixels[index-2].blockId=-2;

pixels[index-n].blockId=-2;
pixels[index-n-1].blockId=-2;

pixels[index+n].blockId=-2;
pixels[index+n+1].blockId=-2;

block.status='destroyed';
//block.blockId=-2;
           };
explosionImage.src="../Tetris/img/explosion.svg";
       }
           else if(blocks[pixels[index].blockId].state=='fire'&&blocks[pixels[index+n].blockId].state=='sand'||
blocks[pixels[index+n].blockId].state=='fire'&&blocks[pixels[index].blockId].state=='sand'
           	)
           {
           	blocks[pixels[index].blockId].state='clean';
           	blocks[pixels[index+n].blockId].state='clean';

           }
}
block.stop=1;
           
          	}
          
          

           

         });
        pixels[index].addEventListener('blockleft', function (e) { 
        if(pixels[index].state=='block'&&lastState[index])
		pixels[index].state=lastState[index];
        
	 });
   })(a);

}

for(i=0;i<12;i++)
{
var randomNo=Math.random();
var r2=150+Math.floor(Math.random()*n*n)%(n*n-190);
if(randomNo<0.6)
{
	
	sands[snum]=new Sand(snum,r2);
	snum++;
	
    pixels[r2].state='sand';
    pixels[r2+1].state='sand';
    pixels[r2+n].state='sand';
    pixels[r2+n+1].state='sand';
}
else
{
	guns[gnum]=new GunPowder(gnum,r2);
gnum++;
 pixels[r2].state='gun';
    pixels[r2+1].state='gun';
    pixels[r2+n].state='gun';
    pixels[r2+n+1].state='gun';
}
}
});
var blocks=new Array();
var block;
function randomBlockPicker()
{

var randomNo=Math.random()*5;
var type=1;
/*
type 1=straight
type2=Z
type3=gun
type4=l
type5=square
*/

var width=W/n;
	var height=width;

if(randomNo<1)
{
	type=1;
	var f=60;
	var centerX=((62)*W/n)%W;
	
	var y=Math.floor(62/n)*height;
	
	var centerY=y;
	
	blocks[i1]=new Block(i1,[60,61,62,63],'fire',fireImage,type,centerX,centerY);
	
	
}
else if(randomNo<2)
{
	type=2;
	
	var centerX=((62)*W/n)%W;
	var centerY=Math.floor(87/n)*height;
	
	blocks[i1]=new Block(i1,[61,62,87,88],'fire',fireImage,type,centerX,centerY);
	
	
}
else if(randomNo<3)
{
	type=3;
	
	var centerX=((87)*W/n)%W;
	var centerY=Math.floor(87/n)*height;
	blocks[i1]=new Block(i1,[62,86,87,88],'fire',fireImage,type,centerX,centerY);
	
	
}
else if(randomNo<4)
{
	type=4;
	
	var centerX=((87)*W/n)%W;
	var centerY=Math.floor(87/n)*height;
	blocks[i1]=new Block(i1,[63,86,87,88],'fire',fireImage,type,centerX,centerY);

	
	
}
else
{
	type=5;
	
	var centerX=((63)*W/n)%W;
	var centerY=(Math.floor(87/n)*height);
	blocks[i1]=new Block(i1,[62,63,87,88],'fire',fireImage,type,centerX,centerY);
    
}
desc();
}
var l1=0;
function desc()
{
firenum=0;
old=i1;
	var width=W/n;
	var height=width;
	
	var blockHere=document.createEvent("CustomEvent");
blockHere.initCustomEvent("blockhere", true, true,blocks[i1]);
	//alert(blocks[i1].dispatchEvent(blockHere));
var blockLeft=document.createEvent("Event");
blockLeft.initEvent("blockleft", true, true);
for(j=0;j<snum;j++)
{
	if(sands[j])
	if(sands[j].status!='destroyed')

	sands[j].render(n,width*2,height*2);

	
}

for(j=0;j<gnum;j++)
{
	if(guns[j])
	if(guns[j].status!='destroyed')
guns[j].render(n,width*2,height*2);
}
for(j=3;j>=0;j--)
{
	if(pixels[blocks[i1].locations[j]])
 pixels[blocks[i1].locations[j]].dispatchEvent(blockHere);
 
}


	ctx.drawImage(constellation,0,0,W,H);

blocks[i1].render(n,W/n,W/n);
	

	for(j=0;j<i1;j++)
	{
if(blocks[j].state=='fire'&&blocks[j].status!='destroyed')
{			firenum++;
document.getElementById("blocks_on_fire").innerHTML="Blocks on fire: "+firenum;
}


		/*if(blocks[j].state=='fire'&&blocks[j].status!='destroyed')
		{

			blocks[j].addTimer();
			//alert(blocks[j].fireTimer);
		}
		*/
		if(blocks[j].status!='destroyed'&&blocks.status!='gone')
{	
		
		blocks[j].render(n,W/n,W/n);
	}
	}
	if((firenum>=5||score<0)&&over==0)
	{
		alert("game over");

		over=1;
		window.location.href="index.html";
	}

for(j=0;j<=3;j++)
	pixels[blocks[i1].locations[j]].dispatchEvent(blockLeft);

if(blocks[i1].stop==1)
{
for(j=0;j<i1;j++)
	{

		if(blocks[j].state=='fire'&&blocks[j].status!='destroyed')
		{

			blocks[j].addTimer();
			//alert(blocks[j].fireTimer);
		}
	}
	if(g==0)
	{
		score++;
		document.getElementById("score").innerHTML="Score: "+ score;
	for(j=3;j>=0;j--)
	{pixels[blocks[i1].locations[j]].state='block';
pixels[blocks[i1].locations[j]].blockId=i1;
}
var loc=0;
console.log(H/height);
for(b=0;b<H/height;b++)
	{
		var ff=0;
		for(c=loc;c<loc+n;c++)
		{
			
			
				if(c>=lastloc)
				{
console.log('hh');
					ff++;

				}
				console.log(lastloc);
			if(pixels[c].state!='block')
			{
				ff++;
				
			}
			//if(ff==0)
			//{
				
				
	
		
	}
	if(ff==0){
		score+=10;
		document.getElementById("score").innerHTML="Score: "+score;
	for(m=loc;m<loc+n;m++)
				{
		          pixels[m].state=pixels[m-n].state;
		          
		          for(j=0;j<4;j++)
		          {
		          	if(blocks[pixels[m].blockId])
		          	if(blocks[pixels[m].blockId].locations[j]==m)
		          	{
		          		blocks[pixels[m].blockId].status='destroyed';
		          		blocks[pixels[m].blockId].locations[j]=-10000;
		          	}
		          }
		          pixels[m].blockId=pixels[m-n].blockId;	
				}
for(x=0;x<=i1;x++)
{
	for(j=0;j<4;j++)
if(blocks[x].locations[j]<loc&&blocks[x].locations[j]>0)
{
	
	
	blocks[x].locations[j]+=n;

}
}
var y=loc;
while(y>n)
{
			for(t1=y-1;t1>=y-n;t1--)
			{
				pixels[t1].state=pixels[t1-n].state;
				pixels[t1].blockId=pixels[t1-n].blockId;
			}
			y-=n;
		}

			}
			
			loc+=n;
	}


	
}
else
{
	
}
i1++;
	g=0;
	interval=800;
	randomBlockPicker();
}
else
{
	blocks[i1].descend();
setTimeout(desc,interval);
}
}

