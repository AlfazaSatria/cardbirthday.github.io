var countDownDate = new Date("Dec 28, 2019 10:00:00").getTime();
var countDownfunction = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;

var days = Math.floor(distance /(1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// satu garis
// document.getElementById("demo").innerHTML = days + "hari " + hours + "jam " + minutes + "menit " + seconds + "detik ";

// satu satu
document.getElementById("hari").innerHTML = days;
document.getElementById("jam").innerHTML = hours;
document.getElementById("menit").innerHTML = minutes;
document.getElementById("detik").innerHTML = seconds;

if(distance < 0) {
	clearInterval(countDownfunction);
	document.getElementById("hari").innerHTML = "0";
	document.getElementById("jam").innerHTML = "0";
	document.getElementById("menit").innerHTML = "0";
	document.getElementById("detik").innerHTML = "0";
}
},1000);