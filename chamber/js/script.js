// Set the current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Toggle views
document.getElementById("gridViewBtn").addEventListener("click", function() {
    document.getElementById("templesContainer").style.display = "grid";
    document.getElementById("templesList").style.display = "none";
});

document.getElementById("listViewBtn").addEventListener("click", function() {
    document.getElementById("templesContainer").style.display = "none";
    document.getElementById("templesList").style.display = "block";
});
