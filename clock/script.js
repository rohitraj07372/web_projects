 
const minuit = document.querySelector('.min');
const hour = document.querySelector('.hour');
const second = document.querySelector('.sec');
const dig = document.querySelector('.digital');


 function get_time()
 {
 	let now = new Date();

 	const s = now.getSeconds();
        const sDegree = (((s / 60) * 360));
        second.style.transform = `rotate(${sDegree}deg)`;


        const m = now.getMinutes();
        const mDegree = (((m / 60) * 360) );
        minuit.style.transform = `rotate(${mDegree}deg)`;


        const hr = now.getHours();
        const hrDegree = (((hr / 60) * 360)*5) + (m*0.5);
        hour.style.transform = `rotate(${hrDegree}deg)`;
        setTimeout(get_time, 1000);
 }
 
get_time();

 // digital time

 

function showTime()
{
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	var s = date.getSeconds();
	var session = "AM";

	if(h == 0)
	{
		h = 12;
	}
	if (h > 12) {
	 h = h-12;
		session = "PM";
	}

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

	var time = h +":" + m +":" + s +" " + session;
	 dig.innerHTML = time;
	setTimeout(showTime, 1000);//The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.

}

showTime();

function clock_sound()
{
	document.getElementById('clk_sound').play();
	setTimeout(clock_sound, 1000);
}

clock_sound();