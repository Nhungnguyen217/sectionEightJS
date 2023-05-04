import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
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
const shoppingListEl = document.getElementById("shopping-list");

btnAdd.addEventListener("click", function () {
  let inputValue = inputFieldEl.value;
  push(shoppingListInDB, inputValue);
  clearInputFieldEl();
});

onValue(shoppingListInDB, function (snapshot) {
  let itemsArray = Object.entries(snapshot.val());
  clearShoppingListEl();
  clearInputFieldEl();
  for (var i = 0; i < itemsArray.length; i++) {
    let currentItem = itemsArray[i];

    let currentItemID = currentItem[0];
    let currentItemValue = currentItem[1];
    appendItemToShoppingListEl(currentItemValue);
  }
});

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendItemToShoppingListEl(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`;
}
