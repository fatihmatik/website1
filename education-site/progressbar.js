const progressBar = document.getElementById("progressBar");
const checkboxes = [];
const numCheckboxes = 4; // Number of boxes for the progessbar

for (let i = 1; i <= numCheckboxes; i++) {
  const checkbox = document.getElementById(`checkbox${i}`);
  checkboxes.push(checkbox);
}

function updateProgressBar() {
  const checkedCount = checkboxes.reduce(
    (acc, checkbox) => acc + (checkbox.checked ? 1 : 0),
    0
  );
  const progress = (checkedCount / checkboxes.length) * 100;
  progressBar.style.width = `${progress}%`;
}

updateProgressBar();

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", updateProgressBar);
});
