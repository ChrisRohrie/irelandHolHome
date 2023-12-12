//Variables

let table = document.getElementById("bookingsTable");

let fromInput;
let toInput;
let daysInput;
let whoInput;

function clearForm() {
    document.getElementById("bookingForm").reset();
}

function addBooking() {
    fromInput = document.getElementById("from").value;
    toInput = document.getElementById("to").value;
    console.log(typeof(fromInput));
    console.log(fromInput);
    daysInput = toInput - fromInput;
    console.log(daysInput);
    whoInput = document.getElementById("who");
}