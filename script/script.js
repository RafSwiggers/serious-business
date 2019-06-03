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

function closetime() {
    if (closingtime) {
        closeingtime = false;
    } else {
        closingtime = true;
    }
}
console.log(closingtime);