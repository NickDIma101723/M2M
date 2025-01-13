
const image = document.getElementById("clickImage");
const idBox = document.getElementById("box");


image.addEventListener("click", function() {

  if (idBox.style.display === "none" || idBox.style.display === "") {
    idBox.style.display = "block"; 
  } else {
    idBox.style.display = "none"; 
  }
});
