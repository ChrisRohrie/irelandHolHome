/* VARIABLES */

//Page
let table = document.getElementById("bookingsTable");

//Form
let fromInput;
let toInput;
let whoInput;
let numRooms

//Class

let fromDate;
let toDate;
let days;

/* MAIN FUNCTIONS */

function clearForm() {
    document.getElementById("bookingForm").reset();
}

function addBooking() {
    
    //get inputs
    fromInput = document.getElementById("from").value;
    fromDate = Date.parse(fromInput);

    toInput = document.getElementById("to").value;
    toDate = Date.parse(toInput);

    whoInput = document.getElementById("who").value;
    console.log(typeof whoInput);
    console.log(whoInput);

    numRooms = document.getElementById("rooms").value;
    numRooms = parseInt(numRooms);
    console.log(typeof numRooms);
    console.log(numRooms);

    //calc diff between dates to get trip length
    days = toDate - fromDate;
    days = Math.round(days / (1000 * 3600 * 24));

}