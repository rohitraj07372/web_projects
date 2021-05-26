var replay = document.getElementsByClassName('button2');
var ok = document.getElementsByClassName('button1');
var rand = Math.floor(Math.random()*11)+1;

 // **************************  getting name  *********************************

var a = prompt('Enter your name');
 function return_a()
 {
     return(a);
 }

 // **************************** end og getting name **************************
var i = 0;
var txt = "Hello '"+a+"' My name is Rohit, let's play a magical game, PRESS OK";
var speed = 50;

var msg = document.getElementById('message');

function typeWriter() {
  if (i < txt.length) {
    msg.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

 function reset()
 {
     msg.innerHTML=" ";
 }

var msg1 =["Think any amount in RUPEE bteween 1 - 10.", "Take the same amount from your friend and add them",
"Now add rupee" + rand + "to your number","suppose you spend half of the money in bar",
"Now return the money that you have taken form your friend form the remaining money",
"YOU HAVE "+ rand/2 + "rupee with you! isn't it cool"] ;
 

 

  function next(){
  	 

   }



