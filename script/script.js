var closingtime = true;

function sign() {
    var now = new Date();
    var theday = now.getDay();
    var thetime = now.getHours();
    if (theday != 0 && theday != 6 && 9 <= thetime <= 17) {
        document.getElementById("openclose").innerHTML = "We're open! Come on in!";
    } else if (theday = 6 && 9 <= thetime <= 16) {
        document.getElementById("openclose").innerHTML = "We're open! Come on in!";
    } else {
        document.getElementById("openclose").innerHTML = "We're closed, I'm Sorry. Come back soon!";
    }
}

var myVar = setInterval(setTime, 1000);

function setTime() {
    var now = new Date();
    document.getElementById("hours").innerHTML = now.getHours();
    if (now.getMinutes() < 10) {
        document.getElementById("minutes").innerHTML = "0" + now.getMinutes();
        console.log("working")
    } else {
        document.getElementById("minutes").innerHTML = now.getMinutes();
    }

}

function closetime() {
    var day = new Date;
    if (day.getMinutes() < 10) {
        document.getElementById("closetime" + day.getDay()).innerHTML = day.getHours().toString() + ":0" + day.getMinutes().toString();
        console.log("working")
    } else {
        document.getElementById("closetime" + day.getDay()).innerHTML = day.getHours().toString() + ":" + day.getMinutes().toString();
    }

}