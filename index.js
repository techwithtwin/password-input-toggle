const myInput = document.getElementById("myInput");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  let currentType = myInput.type;

  if (currentType === "password") {
    icon.src = "/imgs/eye.svg";
    myInput.setAttribute("type", "text");
  } else {
    icon.src = "/imgs/eyeoff.svg";
    myInput.setAttribute("type", "password");
  }
});
