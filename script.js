// calculate function
function calculateTip() {
    let billAmount = document.getElementById("billAmount").value;
    let serviceQuality = document.getElementById("serviceQuality").value;
    let numPeople = document.getElementById("totalPeople").value;

    // Quick validation
    if (billAmount === "" || serviceQuality == 0) {
        alert("Please enter your amount")
        return; // this should prevent the function from continuing
    }
    // check to see if this input is empty or less than or equal to 1
    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
    // math part (ugh)
    let total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100
    total = total.toFixed(2)

    // supposed to display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

// supposed to hide elements 
document.getElementById("each").style.display = "none";
// this should call the function
document.getElementById("calculate").onclick = function () {
  
    calculateTip();
};
 



$("#calculate").click(function (event) {
    let thingClicked = this.innerHTML
    console.log("you clicked: ", thingClicked)
    $("#currentValue").html(thingClicked)
  })
  