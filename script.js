const today = new Date();

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]; 
const day = today.getDate(); // Returns the day of the month (1-31)
const month = monthNames[today.getMonth()]; // Returns the month (0-11), so we add 1

document.getElementById("answer").innerHTML = "Today is day " + day + " of month " + month + ". Now go check Wikipedia.";
