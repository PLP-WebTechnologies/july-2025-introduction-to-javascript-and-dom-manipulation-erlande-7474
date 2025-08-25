// =============================
// Part 1: Variables & Conditionals
// =============================
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;
  let message;

  // Simple if/else conditional
  if (age >= 18) {
    message = "✅ You are an adult.";
  } else if (age > 0) {
    message = "🧒 You are a minor.";
  } else {
    message = "❌ Please enter a valid age.";
  }

  document.getElementById("ageResult").textContent = message;
});

// =============================
// Part 2: Functions
// =============================

// Function 1: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function 2: Format result string
function formatResult(sum) {
  return `The sum is: ${sum}`;
}

document.getElementById("calcBtn").addEventListener("click", function() {
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);

  let total = addNumbers(num1, num2);
  document.getElementById("sumResult").textContent = formatResult(total);
});

// =============================
// Part 3: Loops
// =============================

document.getElementById("countdownBtn").addEventListener("click", function() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old results

  // Example 1: Countdown with for loop
  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    list.appendChild(li);
  }

  // Example 2: Array iteration with forEach
  let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grape"];
  fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = `Fruit: ${fruit}`;
    list.appendChild(li);
  });
});

// =============================
// Part 4: DOM Manipulation
// =============================

let isBlue = false;

// 1. Toggle background color
document.getElementById("toggleColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = isBlue ? "#f9f9f9" : "#cce7ff";
  isBlue = !isBlue;
});

// 2. Add a new item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let newItem = document.createElement("li");
  newItem.textContent = "✨ New Item added!";
  document.getElementById("itemList").appendChild(newItem);
});

// 3. Change text content on hover (extra DOM interaction)
document.getElementById("ageResult").addEventListener("mouseover", function() {
  this.textContent = "👀 You hovered over the age result!";
});