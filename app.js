// Looking for mouseover event:
document.addEventListener("mouseover", (event) => {
  // Declaring balloons and popped. Add class if condition is met:
  const isBalloon = event.target.classList.contains("balloon");
  const isPopped = event.target.classList.contains("popped");
  if (isBalloon && !isPopped) {
    event.target.classList.add("popped");

    // Declaring new values by selecting previously defined ones.
    const popCount = document.querySelectorAll(".balloon.popped").length;
    const balloonCount = document.querySelectorAll(".balloon").length;
    //If balloons popped have equal value to amount of balloons then congrats message:
    if (popCount === balloonCount) {
      const balloons = document.querySelector(".balloons");
      balloons.innerHTML = "";
      const h1 = document.createElement("h1");
      h1.textContent = "YAY!";
      h1.classList.add("congratsMessage");
      balloons.appendChild(h1);
    }
  }
});
