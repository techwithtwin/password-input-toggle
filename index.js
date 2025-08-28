const checkbox = document.getElementById("checkbox");
const myInput = document.getElementById("myInput");

checkbox.addEventListener("change", (e) => {
  let checked = e.target.checked;
  if (checked) {
    myInput.setAttribute("type", "text");
  } else {
    myInput.setAttribute("type", "password");
  }
});
