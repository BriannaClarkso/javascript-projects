// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    const readyButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButtom = document.getElementById("missionAbort");
    const up = document.getElementById("up")

    readyButton.addEventListener("click", function (event) {
    
        let takeOff = confirm("Shuttle in flight.");

        if(takeOff){
            flightStatus.innerHTML = ("Confirm that the shuttle is ready for takeoff.");
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;

        }
});

    landButton.addEventListener("click", function (event) {
    
        let readyToLand = confirm("The shuttle is landing. Landing gear engaged.");

        if(readyToLand){
            flightStatus.innerHTML = ("The shuttle has landed.");
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;

        }
});
   
    abortButton.addEventListener("click", function (event) {
    
        let needToAbort = confirm("Confirm that you want to abort the mission.");

        if(needToAbort){
            flightStatus.innerHTML = ("Mission aborted.");
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0;

        }
});

up.addEventListener("click", function (event) {
    
    // let goUp = confirm("Confirm that you want to abort the mission.");

    // if(needToAbort){
        rocket.style.left += 10px;
        // flightStatus.innerHTML = ("Mission aborted.");
        // shuttleBackground.style.backgroundColor = "green";
        // spaceShuttleHeight.innerHTML = 0;

    // }
});

// When the “Up”, “Down”, “Right”, and “Left” buttons are clicked, the following should happen:

// The rocket image should move 10 px in the direction of the button that was clicked.
// If the “Up” or “Down” buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.

});
