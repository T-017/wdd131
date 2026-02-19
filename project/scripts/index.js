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
  { assist: "Accessibility Services" },
  { assist: "Budget Planning" },
  { assist: "City Selections" },
  { assist: "Cultural Etiquette" },
  { assist: "Emergency Services" },
  { assist: "Festival Schedule" },
  { assist: "Hotel Booking" },
  { assist: "Itinerary Planning" },
  { assist: "Transportation" },
  { assist: "Translation Services" },
  { assist: "Travel Agencies" },
  { assist: "Travel Insurance" },
  { assist: "General Questions" }
];

function createFormAssist(formRequest) {
  const selectProd = document.querySelector("#request")
  formRequest.forEach(services => {
    let assist = document.createElement("option");

    assist.textContent = services.assist;
    assist.value = services.id

    selectProd.appendChild(assist);
  });
}

createFormAssist(services);

const subsDisplay = document.querySelector(".submissions");

let numSubs = Number(window.localStorage.getItem(subsDisplay)) || 0;
numSubs++;
console.log(numSubs)

if (numSubs !== 0) {
  subsDisplay.textContent = numSubs;
} else {
  subsDisplay.textContent = `This was your first request. Thank you and we will get back to you soon.`;
}

localStorage.setItem(subsDisplay, numSubs);