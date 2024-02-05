
const myLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn");

function addContentToArray(){
    myLeads.push(inputEl.value)

    myLeads.forEach((item) => {
        console.log(item);
    })
}

inputBtn.addEventListener("click", addContentToArray);
