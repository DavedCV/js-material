// Date ------------------------------------------------------------------------

// Creation --------------------------------------------------------------------

// Without arguments – create a Date object for the current date and time.
let now = new Date();
console.log(now);

// Create a Date object with the time equal to number of milliseconds (1/1000 of a second)
// passed after the Jan 1st of 1970 UTC+0.
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

// If there is a single argument, and it’s a string, then it is parsed automatically.
let dateString = new Date("2017/01/26");
console.log(dateString);

// new Date(year, month, date, hours, minutes, seconds, ms)
let dateLong = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(dateLong); // 1.01.2011, 02:03:04.567

// Access date components ------------------------------------------------------

/* 
  - getFullYear(): Get the year (4 digits)
  - getMonth(): Get the month, from 0 to 11.
  - getDate(): Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
  - getHours(), getMinutes(), getSeconds(), getMilliseconds()
  - getDay(): Get the day of week, from 0 (Sunday) to 6 (Saturday).
  - getTime(): Returns the timestamp for the date.
  - getTimezoneOffset(): Returns the difference between UTC and the local time zone, in minutes.

  There are also their UTC-counterparts, that return day, month, year and so on 
  for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just 
  insert the "UTC" right after "get".
*/

console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getTime());
console.log(now.getTimezoneOffset());

// Set date components ---------------------------------------------------------

/* 
  The following methods allow to set date/time components:
  - setFullYear(year, [month], [date])
  - setMonth(month, [date])
  - setDate(date)
  - setHours(hour, [min], [sec], [ms])
  - setMinutes(min, [sec], [ms])
  - setSeconds(sec, [ms])
  - setMilliseconds(ms)
  - setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
*/

let today = new Date();

today.setHours(0);
console.log(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
console.log(today); // still today, now 00:00:00 sharp.

// date to number, date diffs --------------------------------------------------

let date = new Date();
console.log(+date); // the number of milliseconds, same as date.getTime()

let start = Date.now(); // milliseconds count from 1 Jan 1970
// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}
let end = Date.now(); // end measuring time

console.log(`The loop took ${end - start} ms`);

// date.parse from a string ----------------------------------------------------

/*
  The method Date.parse(str) can read a date from a string.

  The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:
  - YYYY-MM-DD – is the date: year-month-day.
  - The character "T" is used as the delimiter.
  - HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
  - The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.
*/

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
console.log(ms); // 1327611110417  (timestamp)

let dateParse = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));
console.log(dateParse);

// EXERCISES -------------------------------------------------------------------

// exercise 1 ------------------------------------------------------------------
// Create a Date object for the date: Feb 20let date = new Date(2015, 0, 2);

let ex1 = new Date("2012-02-20T03:12Z");
console.log("exercise 1:", ex1);

// exercise 2 ------------------------------------------------------------------
// Write a function getWeekDay(date) to show the weekday in
//short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

let ex2 = new Date(2012, 0, 3); // 3 Jan 2012
console.log("exercise 2:", getWeekDay(ex2)); // should output "TU"

// exercise 3 ------------------------------------------------------------------
// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

function getDateAgo(date, days) {
  let newDate = new Date(date);
  newDate.setDate(date.getDate() - days);

  return newDate;
}

let ex3 = new Date(2015, 0, 2);

console.log(ex3);
console.log("exercise 3:", getDateAgo(ex3, 1)); // 1, (1 Jan 2015)
console.log("exercise 3:", getDateAgo(ex3, 2)); // 31, (31 Dec 2014)
console.log("exercise 3:", getDateAgo(ex3, 365)); // 2, (2 Jan 2014)

// exercise 4 ------------------------------------------------------------------
// Write a function getLastDayOfMonth(year, month) that returns the last day of
//month. Sometimes it is 30th, 31st or even 28/29th for Feb.

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  console.log(date);
  return date.getDate();
}

console.log("exercise 4:", getLastDayOfMonth(2012, 1));

// exercise 5 ------------------------------------------------------------------
// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

function getSecondsToday() {
  let now = new Date();
  let midnight = new Date(date.getFullYear(), now.getMonth(), now.getDate());

  return Math.round((now - midnight) / 1000);
}

console.log("exercise 5:", getSecondsToday());

// exercise 6 ------------------------------------------------------------------
// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

function getSecondsToTomorrow() {
  let today = new Date();
  let tomorrow = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );

  return Math.round((tomorrow - today) / 1000);
}

console.log("exercise 6:", getSecondsToTomorrow());

// exercise 7 ------------------------------------------------------------------
/*
  Write a function formatDate(date) that should format date as follows:

  - If since date passed less than 1 second, then "right now".
  - Otherwise, if since date passed less than 1 minute, then "n sec. ago".
  - Otherwise, if less than an hour, then "m min. ago".
  - Otherwise, the full date in the format "DD.MM.YY HH:mm". That 
  is: "day.month.year hours:minutes", all in 2-digit 
  format, e.g. 31.12.16 10:00.
*/

function formatDate(date) {
  let diff = new Date() - date;

  let sec = Math.floor(diff / 1000);
  let min = Math.floor(diff / (60 * 1000));

  // formatting
  year = date.getFullYear().toString().slice(-2);
  month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  dayOfMonth = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  if (diff < 1000) {
    return "right now";
  } else if (sec < 60) {
    return `${sec} sec, ago`;
  } else if (min < 60) {
    return `${min} min. ago`;
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
  }
}

console.log("exercise 7:", formatDate(new Date(new Date() - 1))); // "right now"

console.log("exercise 7:", formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

console.log("exercise 7:", formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
console.log("exercise 7:", formatDate(new Date(new Date() - 86400 * 1000)));
