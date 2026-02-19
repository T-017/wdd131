// Travel Assistance -------------------------------------------------------------------------
const agencies = [
  {
    serviceName: "Japan Endless Discovery",
    serviceType: "Travel Agencies",
    purpose: "Discover the best travel agencies in Japan to make your trip unforgettable. Whether you're looking for a cultural experience, adventure, or relaxation, our curated list of travel agencies will help you find the perfect fit for your needs.",
    URL: "https://www.japan.travel/en/my/travel-trade/jp-travel-agencies-list/",
    imageUrl:
      "https://www.qatarairways.com/content/dam/images/mobile/campaign/gobal/destinations-promo/m-japan-tourism.jpg"
  },
  {
    serviceName: "Japan Experience",
    serviceType: "Transportation and Locations",
    purpose: "Providing comprehensive travel experiences and transportation options in Japan. Your trip is about the destinations, let us take care of the journey for you with our expert travel services and transportation solutions.",
    URL: "https://www.japan-experience.com/",
    imageUrl:
      "https://www.japan-experience.com/sites/default/files/styles/scale_500w/public/images/2023-07/je_map_article_en-01.png.webp?itok=1BaWLg-w"
  },
  {
    serviceName: "Travelodge",
    serviceType: "Hotels and Lodging",
    purpose: "Offering comfortable and affordable accommodations for travelers in Japan. Find what you want where you want it with Travelodge, your trusted partner for lodging in Japan.",
    URL: "https://travelodgehotels.asia/what-to-expect-from-japan-hotels-guide-first-time-travellers/",
    imageUrl:
      "https://travelodgehotels.asia/travelodge-honmachi-osaka/wp-content/uploads/sites/26/2025/09/TLHO-Overview-Facade2-1.webp"
  },
  {
    serviceName: "JR Language",
    serviceType: "Translation Services",
    purpose: "Providing professional translation services for travelers in Japan. Our expert translators will help you communicate effectively and navigate your way through Japan with ease.",
    URL: "https://jrlanguage.com/multilingual-translation/japanese-translation-services/",
    imageUrl:
      "https://jrlanguage.com/wp-content/uploads/2023/12/default-image-logo-jr-language-translations.png"
  }
];

createAgentCard(agencies);

function createAgentCard(filteredAgencies) {
  document.querySelector(".traveling-assist").innerHTML = "";
  filteredAgencies.forEach(agency => {
    let card = document.createElement("section");
    let name = document.createElement("h2");
    let service = document.createElement("p");
    let purpose = document.createElement("p");
    let img = document.createElement("img");
    let url = document.createElement("a");
    name.textContent = agency.serviceName;
    service.innerHTML = `<span class="label">Services:</span> ${agency.serviceType}`;
    purpose.innerHTML = `<span class="label">Purpose:</span> ${agency.purpose}`;
    url.setAttribute("href", agency.URL);
    url.textContent = "For More Information";
    img.setAttribute("src", agency.imageUrl);
    img.setAttribute("alt", `${agency.serviceName} Image`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(service);
    card.appendChild(purpose);
    card.appendChild(url);
    card.appendChild(img);

    document.querySelector(".traveling-assist").appendChild(card);
  });
}