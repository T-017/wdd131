document.getElementById("currentYear").innerHTML = document.currentYear = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  if (navLinks.classList.contains("open")) {
    menuButton.textContent = "☰";
  } else {
    menuButton.textContent = "✖";
  }
});

// Request Form ------------------------------------------------------------------------------
const services = [
  { name: "General Questions" },
  { name: "General Questions" }
];

function createFormName(formRequest) {
  const selectProd = document.querySelector("#request")
  formRequest.forEach(services => {
    let name = document.createElement("option");

    name.textContent = services.name;
    name.value = services.id

    selectProd.appendChild(name);
  });
}

createFormName(services);

const subsDisplay = document.querySelector(".submissions");

let numSubs = Number(window.localStorage.getItem(subsDisplay)) || 0;
numSubs++;
console.log(numSubs)

if (numSubs !== 0) {
  subsDisplay.textContent = numSubs;
} else {
  subsDisplay.textContent = `This was your first Review. Thank you for your feedback.`;
}

localStorage.setItem(subsDisplay, numSubs);