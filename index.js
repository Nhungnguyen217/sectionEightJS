import {initializeApp} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://catscrimbamobileapp-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const inputFieldEl = document.getElementById("input-field")
const btnAdd = document.getElementById("add-button")
btnAdd.addEventListener("click", function(){
    let text = inputFieldEl.value 
    console.log(text)
})
