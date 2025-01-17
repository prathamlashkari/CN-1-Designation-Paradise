const packages = [
  {
      name: "Beach Getaway",
      photo: "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_640.jpg",
      description: "Enjoy the sunny beaches of Bali. Inclusive of hotel stay and guided tours."
  },
  {
      name: "Mountain Adventure",
      photo: "https://cdn.pixabay.com/photo/2016/11/14/03/26/cliff-1822484_640.jpg",
      description: "Explore the thrilling trails of the Himalayas. Package includes hiking, camping, and meals."
  },
  {
      name: "City Life Experience",
      photo: "https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_1280.jpg",
      description: "Discover the vibrant life of New York City. Comes with city tours and museum passes."
  },
  // Add more packages as needed
];

function displayPackages(filteredPackages) {
  const container = document.getElementById("packages-container");
  container.innerHTML = ''; // Clear previous content

  filteredPackages.forEach(pkg => {
      const packageElement = document.createElement('div');
      packageElement.className = 'package';
      packageElement.innerHTML = `
          <div class="image-container">
              <img src="${pkg.photo}" alt="${pkg.name}">
          </div>
          <h3 class="package-name">${pkg.name}</h3>
          <p class="package-description">${pkg.description}</p>
          <a href="#" class="book-now-btn">Book Now</a>
      `;
      container.appendChild(packageElement);
  });
}

function filterPackages() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredPackages = packages.filter(pkg => pkg.name.toLowerCase().includes(query));
  displayPackages(filteredPackages);
}

// Initial display of all packages
displayPackages(packages);

const countryCodes = [
  { code: "+1", name: "USA" },
  { code: "+1", name: "Canada" },
  { code: "+52", name: "Mexico" },
  { code: "+852", name: "Hong Kong" },
  { code: "+44", name: "UK" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Germany" },
  { code: "+66", name: "Thailand" },
  { code: "+84", name: "Vietnam" },
  { code: "+91", name: "India" },
  { code: "+27", name: "South Africa" },
  { code: "+61", name: "Australia" },
  { code: "+64", name: "New Zealand" },
  { code: "+971", name: "UAE" },
  { code: "+81", name: "Japan" },
  { code: "+82", name: "South Korea" },
  { code: "+39", name: "Italy" },
  { code: "+30", name: "Greece" },
  { code: "+90", name: "Turkey" },
  { code: "+55", name: "Brazil" },
  { code: "+54", name: "Argentina" },
  { code: "+56", name: "Chile" },
];

function populateCountryCodes() {
  const selectElement = document.getElementById('countryCode');
  countryCodes.forEach(country => {
      const option = document.createElement('option');
      option.value = country.code;
      option.textContent = `${country.name} (${country.code})`;
      selectElement.appendChild(option);
  });
}

// Initialize the page by populating country codes and package elements
populateCountryCodes();
