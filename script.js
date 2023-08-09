// Get Elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById("add-button");

// Add a new task to the list
function addTask() {
  // Check if the input is empty
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // Create a new list item
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create a cross icon
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = ""; // Clear the input box after adding a task
  saveData(); // Save the task added to local storage
}

// add event to 'Add' button
addBtn.addEventListener("click", (e) => {
  addTask();
});

// add event to the list container
listContainer.addEventListener(
  "click",
  (e) => {
    // Check if a list item was clicked
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); // Toggle the "checked" class for styling
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // Remove the task when the cross icon is clicked
      saveData();
    }
  },
  false //bubbling trigger inner first
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// display saved data from local storage
function showSaveData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Display saved data when the page loads
showSaveData();
