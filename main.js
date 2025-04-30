// DOM Elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const preloader = document.getElementById('preloader');
const backToTopButton = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const inventoryContainer = document.querySelector('.inventory-container');
const loadMoreButton = document.querySelector('.load-more');
const inventoryFilters = document.querySelectorAll('.inventory-filter');

// Mobile Menu Toggle
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
    }, 1000);
});

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
        backToTopButton.classList.remove('opacity-0', 'invisible');
    } else {
        backToTopButton.classList.remove('visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Inventory Data
const inventoryData = [
    {
        id: 1,
        name: "2023 Rolls-Royce Phantom",
        price: "$455,000",
        category: "luxury",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        specs: {
            acceleration: "5.1s",
            mpg: "14",
            rating: "5.0"
        }
    },
    {
        id: 2,
        name: "2023 Ferrari 812 Superfast",
        price: "$335,000",
        category: "supercars",
        image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        specs: {
            acceleration: "2.9s",
            mpg: "15",
            rating: "4.9"
        }
    },
    {
        id: 3,
        name: "2023 Range Rover Autobiography",
        price: "$158,000",
        category: "suv",
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        specs: {
            acceleration: "5.8s",
            mpg: "22",
            rating: "4.8"
        }
    },
    {
        id: 4,
        name: "1967 Ford Mustang Fastback",
        price: "$125,000",
        category: "classic",
        image: "https://images.unsplash.com/photo-1549317661-bd32d8c6e1b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        specs: {
            acceleration: "6.5s",
            mpg: "12",
            rating: "5.0"
        }
    },
    {
        id: 5,
        name: "2023 Mercedes-Benz S-Class",
        price: "$114,000",
        category: "luxury",
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        specs: {
            acceleration: "4.5s",
            mpg: "24",
            rating: "4.7"
        }
    },
    {
        id: 6,
        name: "2023 McLaren 720S",
        price: "$305,000",
        category: "supercars",
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        specs: {
            acceleration: "2.7s",
            mpg: "16",
            rating: "4.9"
        }
    },
    {
        id: 7,
        name: "2023 Bentley Bentayga",
        price: "$190,000",
        category: "suv",
        image: "https://images.unsplash.com/photo-1628527305156-5a043dbd0a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        specs: {
            acceleration: "3.9s",
            mpg: "18",
            rating: "4.8"
        }
    },
    {
        id: 8,
        name: "1970 Chevrolet Camaro Z28",
        price: "$95,000",
        category: "classic",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        specs: {
            acceleration: "6.2s",
            mpg: "13",
            rating: "4.9"
        }
    }
];

// Display Inventory
function displayInventory(category = 'all') {
    inventoryContainer.innerHTML = '';
    
    const filteredData = category === 'all' 
        ? inventoryData 
        : inventoryData.filter(car => car.category === category);
    
    filteredData.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = 'overflow-hidden transition duration-500 transform bg-white shadow-md rounded-xl hover:scale-105 hover:shadow-xl';
        carElement.innerHTML = `
            <div class="relative h-48 overflow-hidden">
                <img src="${car.image}" alt="${car.name}" class="w-full h-full object-cover transition duration-700 hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-xl font-bold text-white">${car.name}</h3>
                    <p class="text-yellow-400">${car.price}</p>
                </div>
            </div>
            <div class="p-4">
                <div class="flex justify-between items-center mb-3">
                    <div>
                        <span class="text-gray-600"><i class="fas fa-tachometer-alt mr-2"></i>${car.specs.acceleration}</span>
                        <span class="text-gray-600 ml-4"><i class="fas fa-gas-pump mr-2"></i>${car.specs.mpg}mpg</span>
                    </div>
                    <span class="text-yellow-400"><i class="fas fa-star mr-1"></i>${car.specs.rating}</span>
                </div>
                <button class="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-lg font-medium transition view-details" data-id="${car.id}">View Details</button>
            </div>
        `;
        inventoryContainer.appendChild(carElement);
    });
}

// Initialize with all inventory
displayInventory();

// Filter Inventory
inventoryFilters.forEach(filter => {
    filter.addEventListener('click', () => {
        // Remove active class from all filters
        inventoryFilters.forEach(f => f.classList.remove('bg-yellow-500', 'text-black'));
        inventoryFilters.forEach(f => f.classList.add('bg-gray-200', 'text-gray-700'));
        
        // Add active class to clicked filter
        filter.classList.remove('bg-gray-200', 'text-gray-700');
        filter.classList.add('bg-yellow-500', 'text-black');
        
        // Get category from button text
        const category = filter.textContent.toLowerCase();
        displayInventory(category === 'all' ? 'all' : category);
    });
});

// Load More Button
loadMoreButton.addEventListener('click', () => {
    // In a real app, this would fetch more data from an API
    alert('Loading more vehicles...');
});

// View Details Button
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-details')) {
        const carId = e.target.getAttribute('data-id');
        const car = inventoryData.find(c => c.id == carId);
        alert(`Details for ${car.name}\nPrice: ${car.price}\n0-60: ${car.specs.acceleration}\nMPG: ${car.specs.mpg}\nRating: ${car.specs.rating}/5.0`);
    }
});