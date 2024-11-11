// Project Data: Images and descriptions
const projects = [
    {
        fullImage: 'alm.jpeg',
        description: ''
    },
    {
        fullImage: 'ck.jpeg',
        description: ''
    },
    {
        fullImage: 'ess.png',
        description: ''
    },
    // Add more projects here as needed
];

// Open modal and display selected project
function openModal(index) {
    const modal = document.getElementById('projectModal');
    const fullImage = document.getElementById('fullImage');
    const description = document.getElementById('modalDescription');

    // Set the image and description based on the project index
    fullImage.src = projects[index].fullImage;
    description.innerHTML = projects[index].description;

    // Show the modal
    modal.style.display = "block";
}

// Close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = "none";
}

// Toggle responsive menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".responsive-icon");
    menu.classList.toggle("open"); 
    icon.classList.toggle("open");
}

// Smooth Scrolling Function
document.querySelectorAll('nav a, .menu-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Smooth scroll to the target element
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Transition Effects
const sections = document.querySelectorAll('section');

const options = {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view'); // Add class to trigger transition
            observer.unobserve(entry.target); // Stop observing once it has been seen
        }
    });
}, options);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
