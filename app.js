var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");
var temp = document.querySelector("h3");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("Sorry! Server is down, try again after some time.");
}

function clickHandler() {
    var innerText = textInput.value;

    fetch(constructURL(innerText))
        .then(response => response.json())
        .then(json => 
            {var translatedText = json.contents.translated;
             outputDiv.innerText = translatedText;})
        .catch(errorHandler);
    
    temp.innerHTML = temp.innerText + " 👇";
}

btnTranslate.addEventListener("click", clickHandler);