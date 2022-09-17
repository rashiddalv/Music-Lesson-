const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const audio4 = document.getElementById("audio4");
const audio5 = document.getElementById("audio5");
const audio6 = document.getElementById("audio6");

function playSong(name) {
  if (name.id == "Rick_Astley") {
    audio1.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
  } else if (name.id == "The_Weeknd") {
    audio2.play();
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
  } else if (name.id == "Loveless") {
    audio3.play();
    audio2.pause();
    audio1.pause();
    audio4.pause();
    audio5.pause();
    audio6.pause();
  } else if (name.id == "Sierra_Kidd") {
    audio4.play();
    audio2.pause();
    audio1.pause();
    audio3.pause();
    audio5.pause();
    audio6.pause();
  } else if (name.id == "Fools_Garden") {
    audio5.play();
    audio2.pause();
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio6.pause();
  } else if (name.id == "ChubbyChecker") {
    audio6.play();
    audio2.pause();
    audio1.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }
}
function pauseSong() {
  audio6.pause();
  audio2.pause();
  audio1.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
}
