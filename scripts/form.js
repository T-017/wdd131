document.getElementById("currentYear").innerHTML = document.currentYear = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

createFormName(products);

function createFormName(formReview) {
  document.querySelector(".prod-items").innerHTML = "";
  formReview.forEach(product => {
    let name = document.createElement("p");

    name.textContent = product.name;
    name.innerHTML = `<span class="option"</span> ${product.name}`;

    name.appendChild(name);

    document.querySelector(".prod-items").appendChild(name);
  });
}

// 1️⃣ Initialize display element variable
const subsDisplay = document.querySelector(".submissions");

// 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numSubs = Number(window.localStorage.getItem("numSubs-ls")) || 0;

// 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
if (numSubs !== 0) {
  subsDisplay.textContent = numSubss;
} else {
  subsDisplay.textContent = `Thank you for your Review`;
}

// 4️⃣ increment the number of visits by one.
numSubs++;

// 5️⃣ store the new visit total into localStorage, key=numVisits-ls
localStorage.setItem("numSubs-ls", numSubs);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.
