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

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// Convert the Date object to a JSON-like object
// let futureDate = new Date(2024, 3, 2, 12, 30, 0);

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

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

//future time in miliseconds.

const futureTime = futureDate.getTime();

console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  //time remaining in milliseconds
  const t = futureTime - today;
  console.log(t);
  //1 sec - 1000 milliseconds
  //1m = 60s
  //1hr = 60mins.
  //1 day = 24 hours.

  //86,400,000

  //values in milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // time remaining divided
  //  by day = how  many days rounded down
  let days = t / oneDay;
  days = Math.floor(days);

  //'t' is future date vs current date in milliseconds
  //The remainder operator isolates the time that doesn't fit into complete days,
  //divide that remainder to find
  //hours, minutes, and seconds.

  let hours = Math.floor((t % oneDay) / oneHour);

  let minutes = Math.floor((t % oneHour) / oneMinute);

  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array;
  const values = [days, hours, minutes, seconds];

  //adding 0s.
  //item is the h4 elements displaying days/hours/mins etc

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }

    return item;
  }

  //h4 items are the days/hour/mins etc elements.
  items.forEach(function (item, index) {
    //This is run through the function to check how to display - with 0 before or not
    item.innerHTML = format(values[index]);
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`;
  }
}

//countdown

let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
