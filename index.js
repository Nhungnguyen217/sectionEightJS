import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
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

    appendItemToShoppingListEl(currentItem);
  }
});

function clearShoppingListEl() {
  shoppingListEl.innerHTML = "";
}

function clearInputFieldEl() {
  inputFieldEl.value = "";
}

function appendItemToShoppingListEl(item) {
  //   shoppingListEl.innerHTML += `<li>${itemValue}</li>`;

  let itemID = item[0];
  let itemValue = item[1];

  let newEl = document.createElement("li");
  newEl.textContent = itemValue;
  // Challenge: Attach an event listener to newEl and make it so you console log the id of the item when it's pressed.
  newEl.addEventListener("dblclick", function () {
    let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`);
    remove(exactLocationOfItemInDB);
  });
  shoppingListEl.append(newEl);
}
