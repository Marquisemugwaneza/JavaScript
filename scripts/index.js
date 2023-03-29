console.log("Marquise");

console.log(document.getElementById("hash"));
console.log(document.getElementById("test"));

console.log(document.getElementById("link").href);

console.log(document.getElementById("hash").innerHTML);

console.log(document.getElementById("main").innerHTML);

document.getElementById("java").innerHTML = "javascript is good";
document.getElementById("gre").style.color = "green";
document.getElementById("gre").style.paddingTop = "50px";


console.log("Marquise");
// create a new html tag

const today = new Date();
//const test = document.createElement("p");
//test.id = "test";
//test.innerHTML = "today"


const tes = document.getElementById("tes");
tes.innerHTML = today;

const bdate = new Date("1998-02-08");
tes.innerHTML = bdate;

let day = bdate.getDay();
tes.innerHTML = day;

let month = bdate.getMonth();
tes.innerHTML = month;

let website = window.location.href;
let address = document.getElementById("address");
address.innerHTML = website;

let protocol = window.location.protocol;
address.innerHTML = protocol;

let proto = window.location.host;
address.innerHTML = proto;

let history = window.history.length;
let spa = document.getElementById("spa");
spa.innerHTML = history;

window.confirm("Helloo!!");
//window.alert("Yes we did it");

window.location.href = "https://www.instagram.com";

