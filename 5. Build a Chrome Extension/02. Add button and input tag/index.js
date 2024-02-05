
const myLeads = ['www.linkedin.com', 'www.google.com', 'www.docker.com']
const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.querySelector("#ul-el");

function addContentToWebpage(value) {
    const li = document.createElement("li");
    li.textContent = value;
    ulEl.append(li);
}

function addContentToArray(){
    myLeads.push(inputEl.value)
    
    addContentToWebpage(inputEl.value)

    //clear input value
    inputEl.value = "";
}

inputBtn.addEventListener("click", addContentToArray);

myLeads.forEach((item) => {
    addContentToWebpage(item);
})