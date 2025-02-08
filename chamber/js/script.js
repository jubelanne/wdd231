document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  
  // Get the last visit date from localStorage
  let lastVisit = localStorage.getItem("lastVisit");
  let message = "";

  if (!lastVisit) {
      // First time visitor
      message = "Welcome! Let us know if you have any questions.";
  } else {
      // Calculate time difference in days
      const lastVisitDate = new Date(lastVisit);
      const currentDate = new Date();
      const timeDifference = currentDate - lastVisitDate;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      if (daysDifference < 1) {
          message = "Back so soon! Awesome!";
      } else if (daysDifference === 1) {
          message = `You last visited 1 day ago.`;
      } else {
          message = `You last visited ${daysDifference} days ago.`;
      }
  }

  // Display the message in the sidebar
  sidebar.textContent = message;

  // Store the current date as the last visit
  localStorage.setItem("lastVisit", new Date().toISOString());
});
