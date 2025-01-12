// Get the image and the ID display box
const image = document.getElementById("clickImage");
const idBox = document.getElementById("box");

// Add an event listener for the image click
image.addEventListener("click", function() {
  // Toggle the display of the ID box
  if (idBox.style.display === "none" || idBox.style.display === "") {
    idBox.style.display = "block"; // Show the ID box
  } else {
    idBox.style.display = "none"; // Hide the ID box
  }
});
