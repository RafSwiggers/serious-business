var closingtime = true;

function sign() {
    //checks the time, and pours it into a variable
    var now = new Date();
    var theday = now.getDay();
    var thetime = now.getHours();
    // this 'if' makes the sign display 'open' when it's not saturday or sunday, and when the time is smaller than, 17 and higher than 9.
    if (theday != 0 && theday != 6 && 9 <= thetime <= 17) {
        document.getElementById("openclose").innerHTML = "We're open! Come on in!";
        //this else also displays the opening message, but on a saturday, if it's between 9 and 16.
    } else if (theday = 6 && 9 <= thetime <= 16) {
        document.getElementById("openclose").innerHTML = "We're open! Come on in!";
        //and finally, if it's not an opening time, the page displays the store as closed.
    } else {
        document.getElementById("openclose").innerHTML = "We're closed, I'm Sorry. Come back soon!";
    }
}
// this interval makes sure the clock function runs regularly.
var myVar = setInterval(setTime, 1000);

// this function displays the live time beneath the opening times. It gets the time from the earlier variables, and pours it
//into a string that is pleasant for a customer to read.
function setTime() {
    var now = new Date();
    document.getElementById("hours").innerHTML = now.getHours();
    // this conditional adds a zero to the minutes. Why? When it's less that 10; html only displays a single digit for the time, which looks funny.
    if (now.getMinutes() < 10) {
        document.getElementById("minutes").innerHTML = "0" + now.getMinutes();
        console.log("working")
    } else {
        document.getElementById("minutes").innerHTML = now.getMinutes();
    }

}
// this function changes the closing time of the current time to the exact time when the button is pressed. It let's the owner 'close early'.
function closetime() {
    var day = new Date;
    if (day.getMinutes() < 10) {
        document.getElementById("closetime" + day.getDay()).innerHTML = day.getHours().toString() + ":0" + day.getMinutes().toString();
        console.log("working")
    } else {
        document.getElementById("closetime" + day.getDay()).innerHTML = day.getHours().toString() + ":" + day.getMinutes().toString();
    }

}