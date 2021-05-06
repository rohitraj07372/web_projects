  d1 = document.querySelector('.display-1');
  d2 = document.querySelector('.display-2');
  d_temp = document.querySelector('.temp-result');
  number = document.querySelectorAll(".number");
  ope = document.querySelectorAll('.operator');


//************** getting and printing dsiplay 1 element  *******************
function get_display1()
{
  return d1.innerText;
} 

function print_display1(num)
{
 d1.innerText = num;
} 
   //***************************   end    ********************** 


// *************************** display 2 function   *************************
function get_display2()
{
  return d2.innerText;
} 


function print_display2(num)
{
  if(num==""){
    d2.innerText=num;
  }
  else{

    d2.innerText=getFormattedNumber(num);
  } 
}
function getFormattedNumber(num){
  if(num=="-"){
    return "";
  }
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}


//  ***************************** end of display 2 function   ***********************

//    *********************   temp result   ***********************

function get_temp()
{
  return d_temp.innerText;
} 

function print_temp(num)
{
 d_temp.innerText = num;
} 

// **************************** end    ***************



  // ***********************   removing the comma from the bunber  *************************
  function reverseNumberFormat(num){
   return Number(num.replace(/,/g,''));
 }

 
// ****************     end   ********************


for(var i=0; i<number.length;i++)
{
	number[i].addEventListener("click", function()
  {
     var output = reverseNumberFormat(get_display2());
     if(output != NaN){
      output +=   this.innerText;
      print_display2(output);
     }


    
  });
}


// *************************  operators   *****************

for(var i = 0; i<ope.length;i++)
{
  ope[i].addEventListener('click', function(){
    if(this.id == "clear")
    {
      print_display2("0");
      print_display1("0");
      print_temp("0");
    }
    else if(this.id =="back")
    {
      var output = reverseNumberFormat(get_display2()).toString();
      if(output)
      {
        output = output.substr(0,output.length-1);
        print_display2(output);
      }
    }
    else
    {
      var output = get_display2();
      var history = get_display1();
     if(output==""&&history!=""){
        if(isNaN(history[history.length-1])){
          history= history.substr(0,history.length-1);
        }
      }
      if(output!="" || history!=""){
        output= output==""?output:reverseNumberFormat(output);
        history=history+output;
        if(this.id=="="){
          var result=eval(history);
          print_display2(result);
          print_display1("");
        }
        else{
          history=history+this.id;
          print_display1(history);
          print_display2("");
        }
      }
    }
    
  });
}