const errorCodes = {
    "204042": "User is not registered with the server",
    "204961": "SSL cipher error when trying to communicate with SOAP servers",
    "204050": "You do not own a title; ticket not found",
    "204036": "Problem importing Title metadata",
    "204035": "Problem importing ticket",
    "204037": "Problem importing title content",
    "204034": "Invalid SOAP response",
    "204704": "Equivalent to a HTTP 404 error",
    "209531": "Page not found",
    "209552": "Server error",
    "209600": "Connection Timeout, the shop took too long to load",
    "209601": "Connection Timeout, the shop took too long to load"
};

document.getElementById("submitBtn").addEventListener("click", function() {
    const codeInput = document.getElementById("errorCode").value;
    const resultsDiv = document.getElementById("results");
    const inputDiv = document.getElementById("input");

    if (errorCodes[codeInput]) {
        document.getElementById("code").innerText = codeInput;
        document.getElementById("issue").innerText = errorCodes[codeInput];
        inputDiv.style.display = "none";
        resultsDiv.style.display = "block";
    } else {
        alert("Invalid error code. Please enter a valid 6-digit error code. (the error might not be in the error.js, ask in the discord.)");
    }
});

function refreshPage() {location.reload();}
