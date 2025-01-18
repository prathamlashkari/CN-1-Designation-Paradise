const packages = [
    {
        name: "Beach Getaway",
        photo: "https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_640.jpg",
        description: "Enjoy a relaxing time at the sunny beaches of Bali. Inclusive of hotel stay and guided tours."
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

// Step 2: Write a function to display the packages
function displayPackages() {
    const container = document.getElementById('packages-container');
    packages.forEach(pkg => {
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

// Step 3: Call the function on page load
displayPackages();


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    var isValid = true; // Assume the form is valid at the start

    // Validate email
    var email = document.getElementById('email');
    if (!email.checkValidity()) {
        document.getElementById('emailFeedback').style.display = 'block';
        email.classList.add('is-invalid');
        isValid = false; // Update isValid based on the validation
    } else {
        document.getElementById('emailFeedback').style.display = 'none';
        email.classList.remove('is-invalid');
    }

    // Validate phone number
    var phone = document.getElementById('phone');
    if (!phone.value.match(/^\d{10}$/)) {
        document.getElementById('phoneFeedback').style.display = 'block';
        phone.classList.add('is-invalid');
        isValid = false; // Update isValid based on the validation
    } else {
        document.getElementById('phoneFeedback').style.display = 'none';
        phone.classList.remove('is-invalid');
    }

    // Validate age
    var birthdate = new Date(document.getElementById('birthday').value); // Ensure this ID matches your form's birthdate field
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();
    var m = today.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    if (age < 18) {
        document.getElementById('ageFeedback').style.display = 'block';
        document.getElementById('birthday').classList.add('is-invalid');
        isValid = false; // Update isValid based on the validation
    } else {
        document.getElementById('ageFeedback').style.display = 'none';
        document.getElementById('birthday').classList.remove('is-invalid');
    }

    if (isValid) {
        // Display the success message
        document.getElementById('formSuccess').style.display = 'block';
        // Optionally, hide the success message after a few seconds
        setTimeout(() => {
            document.getElementById('formSuccess').style.display = 'none';
        }, 5000);
    } else {
        // Ensure the success message is hidden if validation fails
        document.getElementById('formSuccess').style.display = 'none';
    }
    
});


// Define an array of country codes and names
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
    // Add more countries as needed
];

// Function to populate country codes dropdown
function populateCountryCodes() {
    const countryCodeSelect = document.getElementById('countryCode');
    countryCodes.forEach(country => {
        let option = new Option(country.name + ' (' + country.code + ')', country.code);
        countryCodeSelect.add(option);
    });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', populateCountryCodes);


// Function to programmatically click the 'next' button of the carousel every 3 seconds
function autoClickNextSlide() {
    setInterval(() => {
        // Find the 'next' button by its class name
        let nextButton = document.querySelector('.next-slide');
        if (nextButton) {
            // Programmatically click the 'next' button
            nextButton.click();
        }
    }, 3000); // Set interval to 3000 milliseconds (3 seconds)
}

// Call the function when the document is fully loaded
document.addEventListener('DOMContentLoaded', autoClickNextSlide);


document.getElementById('searchInput').addEventListener('input', function(event) {
    const inputValue = event.target.value.trim().toLowerCase();
    const container = document.getElementById('packages-container');
    
    // Clear previous content
    container.innerHTML = '';

    // Filter packages based on input value
    const filteredPackages = packages.filter(pkg =>
        pkg.name.toLowerCase().includes(inputValue)
    );

    // Display filtered packages
    filteredPackages.forEach(pkg => {
        const packageElement = document.createElement('div');
        packageElement.className = 'package';
        packageElement.innerHTML = `
            <div class="image-container">
                <img src="${pkg.photo}" alt="${pkg.name}">
            </div>
            <h3>${pkg.name}</h3>
            <p>${pkg.description}</p>
            <a href="#" class="book-now-btn">Book Now</a>
        `;
        container.appendChild(packageElement);
    });
});



function populateDestinationsDropdown() {
    const destinationsDropdown = document.getElementById('destinationsDropdown');
    const uniqueDestinations = []; // To keep track of destinations already added

    packages.forEach((package) => {
        if (!uniqueDestinations.includes(package.name)) {
            // Create a new dropdown item
            const dropdownItem = document.createElement('li');
            const dropdownLink = document.createElement('a');
            dropdownLink.className = 'dropdown-item';
            dropdownLink.href = '#'; // Set href to the destination link or keep '#' if not applicable
            dropdownLink.textContent = package.name;
            
            // Append the link to the list item, and the list item to the dropdown
            dropdownItem.appendChild(dropdownLink);
            destinationsDropdown.insertBefore(dropdownItem, destinationsDropdown.lastElementChild);
            uniqueDestinations.push(package.name); // Add the destination to the tracker
        }
    });
}

// Call the function to populate the dropdown when the page loads
document.addEventListener('DOMContentLoaded', populateDestinationsDropdown);



