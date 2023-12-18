/* VARIABLES */

//Page
let table = document.getElementById("bookingsTable");
let form = document.getElementById("bookingForm");

//Form input vars
let fromInput;
let toInput;
let whoInput;
let numRoomsInput;

//local vars

let fromDate;
let toDate;
let days;
let today;

/* FUNCTIONS */

//Utility
//prevent form from auto submit
function submitForm(event){

    //Preventing page refresh
    event.preventDefault();
 }

 form.addEventListener('submit', submitForm);

 //Main
function clearForm() {
    document.getElementById("bookingForm").reset();
}

function addBooking() {
    
    //remove old booings TBC

    //get inputs
    fromInput = document.getElementById("from").value;
    fromDate = Date.parse(fromInput);
    console.log(fromInput);
    console.log(fromDate);
    if(fromInput==="") { console.log("TRUE")}

    toInput = document.getElementById("to").value;
    toDate = Date.parse(toInput);

    whoInput = document.getElementById("who").value;
    console.log(whoInput);

    numRoomsInput = document.getElementById("rooms").value;
    numRoomsInput = parseInt(numRoomsInput);

    //calc diff between dates to get trip length
    days = toDate - fromDate;
    days = Math.round(days / (1000 * 3600 * 24));

    //validation of params   
    try {
        today  = Date.now();
        if(fromDate-today<0) throw "From date is in the past";
        if(days<0) throw "To date needs to be after from date";
        if(days>90) throw "Your trip is too long";
        if(numRoomsInput<1) throw "Number of rooms is too low";
        if(numRoomsInput>5) throw "Number of rooms is too high";
        if(fromInput==="") throw "Missing from date";
        if(toInput==="") throw "Missing to date";
        if(whoInput==="") throw "Missing who is staying";
        if(numRoomsInput==="") throw "Missing number of rooms";
    }   
    catch(err) {
        alert(err);
        return;
    } 

    
    //update the table
    var rowOutput = table.insertRow();

    var fromOutput = rowOutput.insertCell(0);
    var toOutput = rowOutput.insertCell(1);
    var daysOutput = rowOutput.insertCell(2);
    var whoOutput = rowOutput.insertCell(3);
    var roomsOutput = rowOutput.insertCell(4);

    fromOutput.innerHTML = fromInput;
    toOutput.innerHTML = toInput;
    daysOutput.innerHTML = days;
    whoOutput.innerHTML  = whoInput;
    roomsOutput.innerHTML = numRoomsInput;

    clearForm();
}