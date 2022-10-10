// Run every minute for minutesToRun minutes

var buttonToClick;
var minutesToRun = 180;

for (let i = 0; i < minutesToRun; i++) {
  setTimeout(function(){
    console.log("Iteration #" + i);

    // Get button if it's there, change this depending on your page
    buttonToClick = document.getElementById("button-id");
    
    // Check if pop up with button is there, if so then click it, if not then do nothing
    if (buttonToClick && !buttonToClick.disabled) {
        console.log("PRESENTTTTT");
        buttonToClick.click();
    } else {
        console.log("NOOOOOO");
    }
  }, 60000 * i);
};
