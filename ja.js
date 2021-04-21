

var javascript = function(JS){
    
    with(JS){
    
        setTimeout(100);
        size(window.innerWidth,window.innerHeight,WEBGL)

var blocks = [];
var keys = [];

var MAP = {
//caps = -Z.. towards you
//lower = +z... farther into the screen
z3:[
[
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
],
[]
],
z2:[[
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
], 
[]
],
z1:[
[
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
], 
[]
],
Z2:[
[
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb--------------------------------------------------------bbbbbbbbbbbbb'
], 
[]
],
Z3:[
[
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'               ',
'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'
], 
[]
],

    
};


keyPressed = function(){
    keys[keyCode] = true;
};
keyReleased = function(){
    keys[keyCode] = false;
};
var collide = function(p1,p2) {
//p1 = position1 && p2 = position2
    return  p1.x - p2.x < p2.w &&
            p2.x - p1.x < p1.w &&
            p1.y - p2.y < p2.h &&
            p2.y - p1.y < p1.h &&
            p1.z - p2.z < p2.d &&
            p2.z - p1.z < p1.d;
};
var b;
var cam = false;

var Player = function(x,y){
    this.x = 10200;
    this.y = 1000;
    this.z = 0
    this.w = cam?400:50;
    this.h = cam?400:50;
    this.d = cam?400:50;
    this.grav = 0;
    this.jumpHeight = cam?20:30;
    this.canJump = true;
    this.speed =cam?20:100;
};
Player.prototype = {
    display:function(){
        
        pushMatrix();
		stroke(2, 255, 25);
		fill(0, 255, 9);
        translate(this.x+this.w/2,this.y+this.h/2,-this.z-this.d/2);
        box(this.w,this.h,this.d);
        popMatrix();
       //rect(this.x,this.y,this.w,this.h)
        
    if(cam){this.w = 200; this.h = 200; this.d = 200;}
    },
    move:function(){
        //add jumping and gravity//{
        this.grav+=2;//adds gravity
        this.y+=this.grav;//add gravity to current y position
        this.canJump = false;//sets can jump to default (false)
		        //}
        //blocks Y collide
        for(var i = blocks.length-1; i >= 0; i --){
            if(collide(this,blocks[i])){
                this.grav = 0;
                this.canJump = true;
                this.y = blocks[i].y - this.h;
            }
        }
        //jumping if space is pressed
        if(keys[32] && this.canJump){//32 === space
            this.grav-=this.jumpHeight;
        }

        //Move keys left and collide //{
            if(keys[LEFT]){this.x-=sin((b+90)/(180/PI)) * this.speed; this.z -= cos((b+90)/(180/PI)) * this.speed;}
            if(keys[RIGHT]){this.x+=sin((b+90)/(180/PI)) * this.speed; this.z+= cos((b+90)/(180/PI)) * this.speed;}
            if(keys[UP]){this.z+=sin((b+90)/(180/PI)) * this.speed; this.x-= cos((b+90)/(180/PI)) * this.speed;}
            if(keys[DOWN]){this.z-=sin((b+90)/(180/PI)) * this.speed; this.x+= cos((b+90)/(180/PI)) * this.speed;}
    //}
        
        //Move keys left and collide //{

				for(var i = blocks.length-1; i >= 0; i --){
					if(collide(this,blocks[i])){
						this.angle = atan2(this.x-blocks[i].x,this.z-blocks[i].z).toFixed(2);
						console.log(round(this.angle));
						if(this.angle < -2.35 || this.angle > 2.35 || this.angle >= -0.52 && this.angle <= 0.52){
						this.z = this.z < blocks[i].z ? blocks[i].z - this.d : blocks[i].z + blocks[i].d;}
						else{
						this.x = this.x < blocks[i].x ? blocks[i].x - this.w : blocks[i].x + blocks[i].w;
						}
					}
				}

			//}
         

			        
       

    },
};
var colors = [
color(255,0,0),
color(255,0,255),
color(255,255,0),
color(0,255,255),
color(255,0,99),
];

var Block = function(x,y,z,w,h,d){
    this.x = x;
    this.y=  y;
    this.z = z;
    
this.w = w;
this.h = h;
this.d=  d;
this.c = colors[floor(random(colors.length))];
};
Block.prototype = {
    display:function(){
        pushMatrix();
		strokeWeight(54);
		stroke(this.c)
		fill(this.c);
        translate(this.x+this.w/2,this.y+this.h/2,-this.z-this.d/2)
        box(this.w,this.h,this.d)
        popMatrix();
        //rect(this.x,this.y,this.w,this.h)
        
    },
    
};
var player = new Player(100,100,0);
var s = new PVector(player.w+500,player.h+20,player.d+999);

for (var i = 0; i < MAP.Z3[0].length; i ++){
for (var j = 0; j < MAP.Z3[0][i].length; j ++){

if (MAP.Z3[0][i][j] === "b"){
blocks.push(new Block(j * s.x, i * s.y,-s.z*2,s.x,s.y,s.z));
}

}}//z = -80
for (var i = 0; i < MAP.Z2[0].length; i ++){
for (var j = 0; j < MAP.Z2[0][i].length; j ++){

if (MAP.Z2[0][i][j] === "b"){
blocks.push(new Block(j * s.x, i * s.y,-s.z,s.x,s.y,s.z));
}

}}//z = -40
for (var i = 0; i < MAP.z1[0].length; i ++){
for (var j = 0; j < MAP.z1[0][i].length; j ++){

if (MAP.z1[0][i][j] === "b"){
blocks.push(new Block(j * s.x, i * s.y,0,s.x,s.y,s.z));
}

}}//z = 0
for (var i = 0; i < MAP.z2[0].length; i ++){
for (var j = 0; j < MAP.z2[0][i].length; j ++){

if (MAP.z2[0][i][j] === "b"){
blocks.push(new Block(j * s.x, i * s.y,s.z,s.x,s.y,s.z));
}

}}//z = 40
for (var i = 0; i < MAP.z3[0].length; i ++){
for (var j = 0; j < MAP.z3[0][i].length; j ++){

if (MAP.z3[0][i][j] === "b"){
blocks.push(new Block(j * s.x, i * s.y,s.z*2,s.x,s.y,s.z));
}

}}//z = 80
var b = 0;
var count = 0;


draw = function(){
    background(60, 100, 255)
    
	pushMatrix();
    if(cam){translate(width/2,height-300,620)}
	if(!cam){translate(width/2,height-100,0);}
    rotateY(b/(180/PI))
	translate(-player.x-player.w/2,-player.y,player.z);

    for(var i = blocks.length-1; i >= 0; i --){
        blocks[i].display();
	
    }
    player.display();
    if(!keys[SHIFT]){player.move();}
popMatrix();

  if(keys[65]){b+=10} 
  if(keys[68]){b-=10}
  

};

//////-__Program.END();__-/////////////
}};
var canvas = document.getElementById('canvas1')
var processing = new Processing(canvas,javascript)    
