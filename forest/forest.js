const button = document.querySelector("#myButton");
button.addEventListener("click", function() {
    document.querySelector("#player").play();
    document.querySelector("#myVideo").play();
})

const timer= 5;
let amoutTime=timer*60;

function calculateTime () {
   const countdown=document.querySelector("#countdown");
   let minutes= Math.floor(amoutTime/60);
   let seconds  = amoutTime%60;

   if (seconds < 10) {
    seconds= "0" + seconds;
}

   countdown.textContent = `${minutes} : ${seconds}`;
   amoutTime--;

   if (amoutTime < 0){
     stopTimer();
       amoutTime= 0;
   }
   
   function stopTimer() {
    clearInterval(timerId);
   }
   }

let timerId= setInterval(calculateTime,1000);