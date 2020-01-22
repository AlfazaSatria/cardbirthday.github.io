var audio, playbtn, mutebtn, seek_bar;
function initAudioPlayer(){
	audio = new Audio();
	audio.src = "https://www.ruangpengantin.com/audio/Can't Help Falling In Love.mp3";
	audio.loop = true;
	audio.play();
	// Set object references
	playbtn = document.getElementById("playpausebtn");
	// mutebtn = document.getElementById("mutebtn");
	// Add Event Handling
	playbtn.addEventListener("click",playPause);
	// mutebtn.addEventListener("click", mute);
	// Functions
	function playPause(){
		if(audio.paused){
		    audio.play();
		    playbtn.style.background = "url(img/pause.png) no-repeat";
	    } else {
		    audio.pause();
		    playbtn.style.background = "url(img/play.png) no-repeat";
	    }
	}
}
window.addEventListener("load", initAudioPlayer);
