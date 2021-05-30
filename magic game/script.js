var replay = document.getElementsByClassName('button2');
var ok = document.getElementsByClassName('button1');
var img= document.getElementsByClassName('image');
var count = 0;
var temp=0;
var tempHalf=0;

//************************************************  RANDOM  *************************
 
 function rand()
 {
  var x = Math.floor(Math.random()*13)+2;
  temp = x;
  tempHalf = temp/2;
  return temp;
  return tempHalf;
 }

// *********************************  END OF RANDOM  *****************************


//********************************     press ok function *********************************

function next(){
  if(temp == 0)
  {
    rand();
  }
   


  
        let msg1 =["Think any amount in Rupee, bteween 1 - 10.", "Take the same amount from your friend and add them.","Now You want to arrange your birthday party so i gifted you  " +"<b>" + temp +"</b>" + " rupee add them too.","suppose you spend half of the money in your party.",
"Now return the money that you have taken form your friend form the remaining money",
"You have "+"<b>"+ tempHalf+"</b>"  + " rupee with you! isn't it cool!!", "Thank You"] ;
 

        if(count<msg1.length)
        {
           
             msg.innerHTML = msg1[count];
          count++;  
   }
   if(count == msg1.length-1)
   {
      img[0].style.backgroundImage = "url('atti.jpg')";
   }
      
}


//******************************** end of press ok function  *****************************


// *****************************  replay  ***************************************************

function again_play(){
  img[0].style.backgroundImage = "url('hi.gif')";
     count =0;
      temp =0;
      tempHalf = 0;
     next();
     
} 

//  ********************************************  end of replay  ****************************


 
// ***********************

  

// **************************  getting name  *********************************
var a = prompt('Enter your name');
 function return_a()
 {
     return(a);
 }

 // **************************** end og getting name **************************


var i = 0;
var txt = "Hello "+a+" My name is "  + "Rohit, let's play a magical game, Press ok";
var speed = 70;

var msg = document.getElementById('message');

function typeWriter() {
  if (i < txt.length) {
    msg.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

 

<<<<<<< HEAD
  


=======
var msg1 =["Think any amount in Rupee, bteween 1 - 10.", "Take the same amount from your friend and add them.","Now You want to arrange your birthday party so i gifted you  " +"<b>" + rand +"</b>" + " rupee add them too.","suppose you spend half of the money in your party.",
"Now return the money that you have taken form your friend form the remaining money",
"You have "+"<b>"+ rand/2+"</b>"  + " rupee with you! isn't it cool!!", "Thank You"] ;
>>>>>>> aeb3d2c84f83693670efdc0b09ab58927bc9040c

 

  



function volume()
{
  document.getElementById('aud').volume = 0.3;
}
