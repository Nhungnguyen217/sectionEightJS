import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://catscrimbamobileapp-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

const app = initializeApp(appSettings); //connect project with firebase
const database = getDatabase(app);
const shoppingListInDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const btnAdd = document.getElementById("add-button");
const ulEl = document.getElementById("shopping-list");

btnAdd.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingListInDB, inputValue);
  console.log(`${inputValue} added to firebase CatScrimbaMobileApp`);

  // Challenge: Clear the input field when button is pressed
  ulEl.innerHTML += `<li> ${inputValue} </li>`;
  inputFieldEl.value = ""

});
