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
  { assist: "General Questions"}
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

// Travel Assistance -------------------------------------------------------------------------
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  }
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
  document.querySelector(".image-section").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");
    let url = document.createElement("a");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");
    url.setAttribute("href", temple.URL);
    url.textContent = "More Information";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);
    card.appendChild(url);

    document.querySelector(".image-section").appendChild(card);
  });
}