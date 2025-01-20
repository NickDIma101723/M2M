function toggleReadMore() {
  const dots = document.getElementById("dots");
  const moreContent = document.getElementById("more-content");
  const btnText = document.getElementById("read-more-btn");

  if (moreContent.style.display === "none" || moreContent.style.display === "") {
      moreContent.style.display = "inline";
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
  } else {
      moreContent.style.display = "none";
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
  }
}
