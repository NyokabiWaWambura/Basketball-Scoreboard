let homeScore = document.getElementById("first");
let homeDigit = 0;
let guestScore = document.getElementById("second");
let guestDigit = 0;

function increment(count) {
   homeDigit += count
   homeScore.textContent = homeDigit.toString();
};



function incrementing(count) {
    guestDigit += count;
    guestScore.textContent = guestDigit.toString();
};

function resetForm() {
    homeDigit = 0;
    guestDigit = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    
}
