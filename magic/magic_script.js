const msg = document.querySelector(".message");
const next = document.querySelector(".btn-warning");
const restart = document.querySelector(".btn-primary");
const yName = document.querySelector(".YourName");

let count = 0;
var x;
var half;
var random_counter = 0;

let synth = window.speechSynthesis;
let utter = new SpeechSynthesisUtterance();

const okBtn = document.querySelector(".ok");

// ************************************ voice change ****************
setTimeout(() => {
  const voices = synth.getVoices();
  const lastVoice = voices[voices.length - 1];
  const third = voices[2];
  // console.log(voices);
  utter.voice = third; // change voice
}, 500);

// ******************************  end of voice change ********************************

//************************************************  RANDOM  *************************

function rand() {
  x = Math.floor(Math.random() * 500 + 1);
  half = x / 2;
  return x, half;
}

// *********************************  END OF RANDOM  *****************************

// ****************************** start game function ****************************

next.onclick = () => {
  if (yName.value == "") {
    utter.text = "please enter your name first";
    synth.speak(utter);
  } else {
    if (random_counter == 0) {
      rand();
      random_counter++;
    }
    // instruction array
    let instruction = [
      "Think any amount in Rupee, and put your calculator with yourself.",
      "Take the same amount from your friend, and add them.",
      "Now You want to arrange your birthday party, so i gifted you  " +
        "<b>" +
        x +
        "</b>" +
        " rupee, add them too.",
      "suppose you spend half of the money in your party, and now you only have half of the money left with you..",
      "Now give the amount that you have taken from your friend from the remaining amount you have.",
      "You have " + "<b>" + half + "</b>" + " rupee with you! isn't it cool!!",
      "Thank You, press restart to play again.",
    ];

    if (count < instruction.length) {
      msg.innerHTML = instruction[count];
      utter.rate = 1.3;
      utter.pitch = 1;
      utter.lang = "en-IN";
      utter.text = instruction[count];
      count++;
    }

    synth.speak(utter);
  }
};
// ****************************** end of start game function ****************************

// ****************************** enter name and ok function ****************************

okBtn.onclick = function greeting() {
  var yourName = yName.value;
  if (yourName == "") {
    utter.text = "please enter your name.";
  } else if (yourName == "Rohit" || yourName == "rohit") {
    utter.text = `Hi! Your name is also Rohit, in fact this game is also made by Rohit. Press next button to continue.`;
  } else {
    utter.text = `Hi! ${yourName}. This is a magic game, written by Rohit. Now press next button and enjoy the game. `;
  }

  utter.lang = "en-IN";

  synth.speak(utter);
};

// ****************************** end of enter name and speak function ****************************

// ****************************** restart ************************************

restart.onclick = () => {
  utter.text = `OK, ${yName.value}`;
  synth.speak(utter);
  msg.innerHTML = "";
  count = 0;
  half = 0;
  x = 0;
  random_counter = 0;
};

//  ************************* end of restart  ****************************

//----------------------------------  Hindi version --------------------

const hi = document.querySelector(".Hindi");
hi.onclick = () => {
  var msg = (utter.text = "Dhanayabad");
  synth.speak(msg);
};

// -------------------------------- end Hindi version --------------------
