//Set Up an Event Listener for DOMContentLoaded
//addEventListener` takes a `String` with the name of the event and and a callback function.


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('#text').textContent = "This is really cool!";
  console.log("The DOM has loaded");
});

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");

