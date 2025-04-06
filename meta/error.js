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
    "209601": "Connection Timeout, the shop took too long to load",
    "205625": "ECS Gift error",
    "220003": "The requested URL was filtered by Opera's filter",
    "205968": "Bad device code",
    "205646": "Unable to send present (ECS Gift)",
    "205627": "Can't buy DLC for a title you don't own.",
    "205672": "ECS Account mismatch",
    "205826": "Server under heavy load.",
    "205829": "Server under heavy load",
    "205969": "Server under heavy load",
    "206670": "Invalid friend code",
    "206671": "Invalid/Wrong Wii Shop title ID",
    "206672": "No title info (Wii Shop)",
    "206673": "Invalid registration status",
    "206674": "Unexpected eclib error",
    "209800": "No DNS Entry for oss-auth.shop.wii.com",
    "220202": "Connection refused",
    "209593": "Access denied by Opera's Wii Shop domain filter",
    "209531": "Equivalent to a HTTP 404 error"
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
