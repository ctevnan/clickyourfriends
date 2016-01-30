var secondsCount = 0;
var timerInterval;
var toggleBtn = document.getElementById("toggleBtn");

setTimeout(function() {
  toggleBtn.parentNode.removeChild(toggleBtn);
  alert("Click the Shamoons as fast as you can!")
}, 20000);

function addSeconds() {
  secondsCount++;
}
//toggle btn is being clicked. get the data state attribute
//if its equal to start then change the inner html to be stop
//and change that attribute data-state to stop.
//or else, do the opposite.
function toggleTime() {
  if(this.getAttribute("data-state") === "start") {
    this.innerHTML = "Stop";
    this.setAttribute("data-state", "stop");
    secondsCount = 0;
    timerInterval = setInterval(addSeconds, 1000);
  } else {
    this.innerHTML = "Start";
    this.setAttribute("data-state", "start");
    clearInterval(timerInterval);
    alert("That took you" + secondsCount + " seconds");
  }  
}

toggleBtn.addEventListener("click", toggleTime);