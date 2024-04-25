// Get the current year and populate the span with id="currentyear"
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date of the document and populate the element with id="lastModified"
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
