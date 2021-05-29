var replay = document.getElementsByClassName('button2');
var ok = document.getElementsByClassName('button1');
var rand = Math.floor(Math.random()*11)+2;
var count = 0;
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

  function refreshPage(){
    window.location.reload();
} 
 

var msg1 =["Think any amount in Rupee, bteween 1 - 10.", "Take the same amount from your friend and add them.","Now You want to arrange your birthday party so i gifted you  " +"<b>" + rand +"</b>" + " rupee add them too.","suppose you spend half of the money in your party.",
"Now return the money that you have taken form your friend form the remaining money",
"You have "+"<b>"+ rand/2+"</b>"  + " rupee with you! isn't it cool!!", "Thank You"] ;

 

  function next(){
    let i = 0;
        if(count<msg1.length)
        {
            
            msg.innerHTML = msg1[count];
           count++;
   }

}

function volume()
{
  document.getElementById('aud').volume = 0.3;
}
