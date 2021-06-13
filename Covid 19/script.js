var country = document.getElementById('CN');
let btn = document.getElementById('submit');
let d = document.getElementById('date');
let a = document.getElementById('active');
let card = document.getElementById('cards');
btn.addEventListener('click',function(e) {
    e.preventDefault();
    
    var c_value = country.value;
   var t = c_value.charAt(0).toUpperCase() +
   c_value.slice(1);

fetch("https://covid-19-tracking.p.rapidapi.com/v1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "74a99a9ad9msh245f5ef813065c1p11999ejsn7d1a54d44ca8",
		"x-rapidapi-host": "covid-19-tracking.p.rapidapi.com"
	}
})
.then (function(response) {
    return response.json(); 
}).then(function(result){
    
  for(var i in result){
      if(result[i].Country_text == t)
      {
        d.innerHTML = `Last Update: ${result[i]["Last Update"]}` ;
        a.innerHTML= `Active cases: ${result[i]["Active Cases_text"]}`;
       
        card.innerHTML=  `<div class="card" style="width: 270px; height:320px">
        <img src="card1.jpg" class="card-img-top" >
        <div class="card-body">
            <h5 class="card-title">New updates</h5>
            <p class="card-text" >
            New cases: ${result[i]["New Cases_text"]} <br>
             
            New Death: ${result[i]["New Deaths_text"]}</p>
             

        </div>
    </div>
    
    <div class="card " style="width: 270px; height:320px">
    <img src="card2.jpg" class="card-img-top">
    <div class="card-body">
        <h5 class="card-title">Total Data</h5>
        <p class="card-text">
        <p>Total cases: ${result[i]["Total Cases_text"]}<br> 
        
       Total Death: ${result[i]["Total Deaths_text"]} <br>
       
        Total Recovered: ${result[i]["Total Recovered_text"]} </p>

    </div>
</div>
    `    
  }
   
}
})
.catch(err => {
	console.error(err);
});
   
})





