const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// global variables
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
//grab heading 4 within that div.
//node list is a collection of elements, to select and manipulate
const items = document.querySelectorAll(".deadline-format h4");

console.log(items);

//get date - can hard code or not
//this is the date object with properties Day-word, month,  day(no.)
//hours/mins/seconds/gmt

// Convert the Date object to a JSON-like object
let futureDate = new Date(2023, 10, 14, 12, 30, 0);
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
//months from array variable, month is the number provided by the method.

const date = futureDate.getDate();
console.log(futureDate);

//days are 0 indexed - Sunday is 0.

//weekdays is the array - the index is 2 - so Tues
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} at ${hours}.${minutes}am`;
