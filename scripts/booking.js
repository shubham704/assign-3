/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
var totalCost = 0;
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

let days = document.querySelectorAll(".blue-hover");

// Add event listener to each li element
days.forEach(function (day) {
  day.addEventListener("click", function () {
    // Toggle 'clicked' class on click
    this.classList.toggle("clicked");
  });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
let clearButton = document.querySelector("#clear-button");

// Add event listener to the clear button
clearButton.addEventListener("click", function () {
  // Remove 'clicked' class from all elements
  days.forEach(function (day) {
    day.classList.remove("clicked");
  });
  // reset weekly cost to $0
  document.getElementById("calculated-cost").textContent = "0";
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
var halfDayButton = document.querySelector("#half");

halfDayButton.addEventListener("click", function () {
  // Set the daily rate to $20
  var dailyRate = 20;

  // Get the "half" and "full" elements
  var halfElement = document.querySelector("#half");
  var fullElement = document.querySelector("#full");

  // Add the "clicked" class to the "half" element
  halfElement.classList.add("clicked");

  // Remove the "clicked" class from the "full" element
  fullElement.classList.remove("clicked");

  // Calculate the total cost based on how many days are selected
  var daysSelected = document.querySelectorAll(
    ".day-selector .days.clicked"
  ).length;
  console.log(daysSelected);
  calculateTotalCost(dailyRate, daysSelected);
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
var fullDayButton = document.querySelector("#full");

fullDayButton.addEventListener("click", function () {
  var dailyRate = 35;

  var halfElement = document.querySelector("#half");
  var fullElement = document.querySelector("#full");

  halfElement.classList.remove("clicked");

  fullElement.classList.add("clicked");

  var daysSelected = document.querySelectorAll(
    ".day-selector .blue-hover.clicked"
  ).length;
  calculateTotalCost(dailyRate, daysSelected);
});
/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotalCost(dailyRate, daysSelected) {
  totalCost = dailyRate * daysSelected;
  document.querySelector("#calculated-cost").textContent = totalCost;
}
