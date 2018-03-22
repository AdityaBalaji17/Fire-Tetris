var p=1;
(function(){ // Block() class closure
  Block=function(id,locations,state,fireImage,type,centerX,centerY){

this.stop=0;
this.id=id;
this.state=state;
this.status='alive';
this.centerX=centerX;
this.centerY=centerY;
this.fireImage=fireImage;
this.fireTimer=0;
this.type=type;
this.locations=[];
this.locations[0]=locations[0];
this.locations[1]=locations[1];
this.locations[2]=locations[2];
this.locations[3]=locations[3];

  };
  var oListeners = {};  
  function runListeners(oEvent) {  
    if (!oEvent) { oEvent = window.event; }  
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {  
      if (oEvtListeners.aEls[iElId] === this) {  
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }  
        break;  
      }  
    }  
  }  

  Block.prototype.addEventListener = function (sEventType, fListener) {  
    if (oListeners.hasOwnProperty(sEventType)) {  
      var oEvtListeners = oListeners[sEventType];  
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {  
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }  
      }  
      if (nElIdx === -1) {  
        oEvtListeners.aEls.push(this);  
        oEvtListeners.aEvts.push([fListener]);  
        this["on" + sEventType] = runListeners;  
      } else {  
        var aElListeners = oEvtListeners.aEvts[nElIdx];  
        if (this["on" + sEventType] !== runListeners) {  
          aElListeners.splice(0);  
          this["on" + sEventType] = runListeners;  
        }  
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {  
          if (aElListeners[iLstId] === fListener) { return; }  
        }       
        aElListeners.push(fListener);  
      }  
    } else {  
      oListeners[sEventType] = { aEls: [this], aEvts: [ [fListener] ] };  
      this["on" + sEventType] = runListeners;  
    }  
  };  
  Block.prototype.removeEventListener = function (sEventType, fListener) {  
    if (!oListeners.hasOwnProperty(sEventType)) { return; }  
    var oEvtListeners = oListeners[sEventType];  
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {  
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }  
    }  
    if (nElIdx === -1) { return; }  
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {  
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }  
    }  
  };

Block.prototype.render=function(n,width,height)
{
  if(this.status!='destroyed'&&this.status!='gone')
  {
var q,w;
for(i=0;i<4;i++)
{
var location=this.locations[i];
var x=(location*width)%W;
var y=Math.floor(location/n)*height;
ctx.fillStyle="black";
ctx.fillRect(x,y,width,height);
if(this.state=='fire')
ctx.fillStyle="#fdfa00";
else if(this.state=='clean')
ctx.fillStyle="red";
else if(this.state=='sand')
ctx.fillStyle="orange";
else if(this.state=='gun')
ctx.fillStyle="gray";
ctx.fillRect(x+1,y+1,width-2,height-2);

if(i==0)
q=x,w=y;


}

if(this.state=='fire')
{

ctx.drawImage(this.fireImage,this.centerX-width*2,this.centerY-2*height,4*width,4*height);

}

}
else
{
  
    for(i=0;i<4;i++)
{
var location=this.locations[i];
var x=(location*width)%W;
var y=Math.floor(location/n)*height;
ctx.fillStyle="rgba(2,2,2,0)";
ctx.fillRect(x,y,width,height);
ctx.fillRect(x+1,y+1,width-2,height-2);

if(i==0)
q=x,w=y;

}

}
};
Block.prototype.rotate=function()
{
  
  var blah=this.locations;
console.log(blah);
  var newlocs=this.locations;
  var blockLeft=document.createEvent("Event");
blockLeft.initEvent("blockleft", true, true);
  rotated=1;
  var flag=0;
  for(j=0;j<4;j++)
  pixels[blocks[i1].locations[j]].dispatchEvent(blockLeft);
  for(i=0;i<4;i++)
  {
    var location=this.locations[i];
    var width=W/n;
    var height=width;
  //  alert(width+" "+height);
  var x=(location*width)%W;
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
if(x2<0||x2>=W)
{
  flag=1;
}
}

  if(this.type!=5&&flag==0)
  {
  for(i=0;i<4;i++)
  {
    var location=this.locations[i];
    var width=W/n;
    var height=width;
  //  alert(width+" "+height);
  var x=(location*width)%W;
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

this.locations[i]=Math.floor((((y2-height)*W)/(width*height))+x2/width);

//alert(phi+" "+this.locations[i]);
}
}
};
Block.prototype.descend=function()
{
  var height=W/n;
  this.centerY+=height;
  for(i=0;i<4;i++)
  {
    this.locations[i]+=n;
  }

};
Block.prototype.addTimer=function()
{
  this.fireTimer++;
  if(this.fireTimer>=10)
  {
    this.status='gone';
    var location=Math.min(this.locations[0],this.locations[1],this.locations[2],this.locations[3]);
    location=location-location%n;    
    lastloc=location;
    console.log(lastloc);
    var total=H;
    var T=location/n;
    var percent=T*100/n;
    p=percent/100;
    if(can.style.height>percent+"%")
    can.style.height=percent+"%";

    if(can.height>(percent/100)*300)
    can.height=(percent/100)*300;
    
   // console.log(can.style.height);
    for(i=location;i<=location+4*n;i++)
     if(pixels[i])
      {pixels[i].state='block';
    //if(blocks[pixels[i].blockId])
    //blocks[pixels[i].blockId].state='clean';
}
  }
};
  Block.prototype.dispatchEvent=runListeners;
})(); // Block() class closure