let Bill = document.getElementById('bill');
let Tip = document.getElementById('tip');
let people = document.getElementById('people');
let T_a = document.getElementById('tip_amount');
let total = document.getElementById('total');
var finalAns =  document.getElementsByClassName('final-answer');
 
 
function get_bill()
{
    return Bill.value;
}

 function get_tip()
 {
     return Tip.value;
 }

 function get_people()
 {
     return people.value;
 }
 
function print_bill(num)
{
  var a = (get_bill()*(get_tip()/100))/get_people();
  var b = a+get_bill()/get_people();
  var c = a.toFixed(2);
  var d = b.toFixed(2);
  var error = "Per Person";
 
  if(Bill.value == 0 || Tip.value == 0 || people.value == 0 )
  {
    T_a.innerHTML =   "error";
    total.innerHTML = " fill all the value";
  }
else if(Tip.value > 100)
{
    alert("tip value must be less than 100");
}

  else 
  {
    T_a.innerHTML =  `<h3>${c}</h3>`;
    total.innerHTML = `<h2>${d}</h2>`;
    document.getElementsByClassName('tip-per-person').innerHTML = error;
  }
   
 
  }
  
   