// Variable to hold the timer
let timer = null;

// Function to start movement
function start() {
    // Toggle buttons
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    
    // Move image every 500ms
    timer = setInterval(moveMeme, 500);
}

// Function to stop movement
function stop() {
    // Toggle buttons
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    
    // Stop the timer
    clearInterval(timer);
}

// Logic to change image position
function moveMeme() {
    let img = document.getElementById("meme");
    // Generate random coordinates
    img.style.top = Math.random() * 400 + "px";
    img.style.left = Math.random() * 400 + "px";
}