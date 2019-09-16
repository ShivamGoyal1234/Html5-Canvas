 var canvas = document.querySelector('canvas');


//for  full width and height and we use margin = 0 in  css
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// for context become 2d
var c = canvas.getContext('2d');


// fillrect is a function which is use to make a square or  rectangle they have  4 argument (x,y,width,height)
// s and y are coordinations where we  want show our box just like graphics in c.

//c.fillStyle='rgba(255,0,0,0.5)';  // used for color the rectangles
//c.fillRect(100,100,100,100);

//c.fillStyle='rgba(200,0,250,0.5)';
//c.fillRect(400,100,100,100);

//c.fillStyle='rgba(185,0,0,0.5)';
//c.fillRect(600,100,100,100);


//line
//c.beginPath();
//c.moveTo(50,300);   // move to take x and y co-ordinates
//c.lineTo(300,100);
//c.lineTo(800,800);
//c.strokeStyle = "pink"                 // stroke value is a property which takes  css properties this change the color of line
//c.stroke();  //stroke is used for to visble. without this we cant see any line.



//arc/circle
//  c.arc (x,y,r,endAngle: Float, drawCounterClockwise ,  Bool(false) )
// this for loop is used to draw multiple circle but if we use only for loop all circle at one place which circle look like bolder so we declare var x and   as  a inner height and width
//for(var i=0;i<100;i++){
//  var x= Math.random() * innerWidth;
//  var y= Math.random() * innerHeight;
    
//c.beginPath();
//c.arc(x,y,30,0, Math.PI*2, false) 
//c.strokeStyle='blue'; 
//c.stroke();
//}

/* /////////////////////////////////////////////

// important  now we create multiple circle so we change tha value with this function and the all animation coding come in this function  this  cding is only for circle after we use this we create circles and animate tham and independent to each other

//////////////////////////////////////////////////
*/
var mouse = {
    x:undefined,
    y:undefined           // this is for shown x and y coordinate with listerebr
    
}

// Radius's
var maxRadius =40;
//var minRadius =2;


var colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#2980B9',
    
];

window.addEventListener('mousemove', function(event){    // every time we move mouse 
    //console.log(event);
    mouse.x = event.x;
    mouse.y = event.y;
   
    
})


window.addEventListener('resize', function(){
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    init();
});


function Circle(x,y,dx,dy,radius) {  // we create object
    this.x = x; 
    this.y = y;
    this.dx =dx;
    this.dy = dy;
    this.radius = radius
    this.minRadius = radius;
         
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)] ; 
    
    this.draw = function() {    // this a method to draw
     
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0, Math.PI*2, false) 
      //  c.strokeStyle='blue' 
    //     c.fillStyle = colorArray[Math.floor(Math.random() * colorArray.length)] ;  // hamne math.floor() use isliye kiya kyo ki math.random()  array ki ramdon value to de rha pr decimal me bhi ja rahi so ham ne use round off karne ke liye floor function use kiya namste  // dynamically change color so we comment it
        
          // c.stroke();
         c.fillStyle=   this.color;   
        c.fill();
           
    }
        this.update= function() {
             if(this.x + this.radius >innerWidth || 
                this.x - this.radius < 0) {
                this.dx = -this.dx;       
        }
            
             if(this.y + this.radius >innerHeight || 
                this.y - this.radius < 0) {
                this.dy = -this.dy;     
              
       }
    
             this.x += this.dx;
             this.y += this.dy;
            
             // interactivity
            if (mouse.x-this.x <50 && mouse.x -this.x >-50 &&mouse.y-this.y <50 && mouse.y -this.y >-50) {   //this is for when we hover on a  circle not all circle rdius increase only  that circle area where we hover 
               if(this.radius < maxRadius) { 
                 
                this.radius +=1;
               }
            } else if (this.radius >this.minRadius) {    // this is fo when jab hm only else lagake condition likhte h tab circle chote hote jate aur bo infinnte loop me chala jata h so hmm                                   else if bali conditon lagayenge jisse sare chote ho jayenge and jab mouse ko hover kareneg tab bo bade ho jayenge
                 this.radius -= 1;
            }
            
            this.draw();
        }
       
    }     

// we want to store 100 cicle in variable so we use array 
//   var circleArray = [];

  /*for (i=0;i<800;i++){
    //  var radius = 30;
   var radius = Math.random() * 3+1;
var x= Math.random() *(innerWidth -radius *2) +radius;       // we use -radius *2 becoj circle is  mobing outer boundry so we use this  to stay away 2px from canvas boundty
var y= Math.random() * (innerHeight -radius *2) +radius;      // +radius use to both side 
var dx=(Math.random() - 0.5) ; 
var dy=(Math.random() - 0.5) ;

circleArray.push(new Circle(x,y,dx,dy,radius));     
*/      
      

//var circle = new Circle(200,200,3,3,30);

 // }
// circle.draw(); we check only functions is working or not






/*var x= Math.random() *innerWidth;      // math.random is used for to randomly moving on x and y in canvas
var y= Math.random() * innerHeight;
var dx=(Math.random() - 0.5) * 8; //this is velocity of x means increases the speed of circle we have use dx in x increament
var dy=(Math.random() - 0.5) * 8; */  //we use this later

// we use math function in velocity because we want to change the direction and speed randomly but between 0.5 so we subtract 0.5

//var radius =30;
var circleArray = [];

function init() {
    
     circleArray = []; 
    
    for (var i=0;i<800;i++)  {
        
       

   var radius = Math.random() * 3+1;
var x= Math.random() *(innerWidth -radius *2) +radius;      
var y= Math.random() * (innerHeight -radius *2) +radius;      
var dx=(Math.random() - 0.5) ; 
var dy=(Math.random() - 0.5) ;

circleArray.push(new Circle(x,y,dx,dy,radius));
    
}

}
function animate() {
    requestAnimationFrame(animate); //this function takes function as a argument its just like loop over and over

    c.clearRect(0,0,innerWidth,innerHeight); // this will clear all circle and looks like circle is moving
    
    for(i=0;i<circleArray.length;i++) {
        
        circleArray[i].update();        
    }
    
    
 
     // circle.update();  // we use this to draw our second circle after we use pdate yo update
    
    
    
    
  /*    c.beginPath();
    c.arc(x,y,radius,0, Math.PI*2, false) 
    c.strokeStyle='blue'; 
    c.stroke();
 */
// if we use this without radius its look like circle is bounced back  throuth wall so we use radius variable with x     
    
    
   /* if(x + radius >innerWidth || x-radius < 0) {
        
        dx = -dx;       
    }
    if(y + radius >innerHeight || y-radius <0) {
        
        dy = -dy;     
    }
    
    x += dx;
    y += dy;
    */
    }


    animate();

   init();










