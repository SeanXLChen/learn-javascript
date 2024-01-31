// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let errorMsg = "Something went wrong, please try again";
let errorEl = document.getElementById("error");

function errorPop() {
    errorEl.innerHTML = errorMsg;
}

