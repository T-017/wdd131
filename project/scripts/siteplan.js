document.getElementById("currentYear").innerHTML = document.currentYear = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;



// Request Form ------------------------------------------------------------------------------
const products = [
  {name: "Flux Capacitor"},
  {name: "Low Voltage Reactor"},
  {name: "Power Laces"},
  {name: "Time Circuits"},
  {name: "Warp Equalizer"}
];

function createFormName(formReview) {
  const selectProd = document.querySelector("#product")
  formReview.forEach(products => {
    let name = document.createElement("option");

    name.textContent = products.name;
    name.value = products.id

    selectProd.appendChild(name);
  });
}

createFormName(products);

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