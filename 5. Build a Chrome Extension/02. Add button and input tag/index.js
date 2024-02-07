
const myLeads = ['www.linkedin.com', 'www.google.com', 'www.docker.com']
const inputEl = document.querySelector("#input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.querySelector("#ul-el");

function addContentToWebpage(value) {
    // Save Array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    const li = document.createElement("li");
    const link = document.createElement("a");
    
    link.textContent = value;
    link.href = value;
    link.target = "_blank";
    link.rel = "noopener noreferrer"; // Security for opening links in a new tab
    
    li.appendChild(link);

    ulEl.append(li);
}

function addContentToArray(){
    myLeads.push(inputEl.value)

    // Save Array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    addContentToWebpage(inputEl.value)

    //clear input value
    inputEl.value = "";
}

inputBtn.addEventListener("click", addContentToArray);

myLeads.forEach((item) => {
    addContentToWebpage(item);
})