document.getElementById("toggle-skills")!.addEventListener("click", () => {
  const skillsSection = document.getElementById("skills");
  if (skillsSection!.style.display === "none") {
    skillsSection!.style.display = "block";
  } else {
    skillsSection!.style.display = "none";
  }
});
