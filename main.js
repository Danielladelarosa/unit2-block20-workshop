// freelancer forum
// define arrays with names and occupations and prices 
// DOM elements 'get element by id' 
// render to html page
// what do i need? 


// define arrays 
const names = ["Edward", "Jacob", "Bella", "Rosalie", "Bryan", "Jasper"];

const occupations = ["Vampire", "Teacher", "Chef", "Painter", "Historian"];

// array w freelancers with names, occupations, and starting prices
let freelancers = [
    { name: "Edward", occupation: "Vampire", startingPrice: 30 },
    { name: "Jacob", occupation: "Teacher", startingPrice: 50 }
];

// DOM elements
const freelancersContainer = document.getElementById("freelancers");


const averagePriceElement = document.getElementById("averagePrice");

// function to render the initial array of freelancers onto the page
function renderFreelancers() {
    freelancersContainer.innerHTML = ""; // Clear previous content
    freelancers.forEach(freelancer => {
        const div = document.createElement("div");
        div.innerHTML = `<p>Name: ${freelancer.name}, Occupation: ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}</p>`;
        freelancersContainer.appendChild(div);
    });
}

// function to calculate the average starting price of the freelancers array
function calculateAverageStartingPrice() {
    const totalStartingPrice = freelancers.reduce((acc, curr) => acc + curr.startingPrice, 0);
    const averageStartingPrice = totalStartingPrice / freelancers.length;
   
   
    return averageStartingPrice.toFixed(2); // Round to 2 decimal places
}

// Function to update the average starting price in the DOM
function updateAverageStartingPrice() {
    const averagePrice = calculateAverageStartingPrice();
    averagePriceElement.textContent = `$${averagePrice}`;
}

// Function to generate a new freelancer with random name, occupation, and starting price
function generateNewFreelancer() {
    const randomName = names
          [Math.floor(Math.random() * names.length)];


    const randomOccupation = occupations
          [Math.floor(Math.random() * occupations.length)];


    const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random price between 1 and 100

    
    const newFreelancer = { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
    freelancers.push(newFreelancer);
}

// Set interval to add a new freelancer and update every few seconds
setInterval(() => {
    generateNewFreelancer();
    renderFreelancers();
    updateAverageStartingPrice();
}, 3000); // Add a new freelancer every 3 seconds
