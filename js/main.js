/**
 * Array of success stories featuring women entrepreneurs
 * @type {Array<{
 *   name: string,
 *   business: string,
 *   story: string,
 *   image: string
 * }>}
 */
const successStories = [
    {
        name: "Sarah Johnson",
        business: "EcoFashion",
        story: "Started a sustainable fashion brand that now operates in 10 countries.",
        image: "images/story1.jpg"
    },
    {
        name: "Maria Rodriguez",
        business: "TechInnovate",
        story: "Built a tech startup from scratch, now valued at $10M.",
        image: "images/story2.jpg"
    },
    {
        name: "Linda Chen",
        business: "HealthyEats",
        story: "Transformed her family recipe into a nationwide health food chain.",
        image: "images/story3.jpg"
    }
];

/**
 * Populates the success stories section with story cards
 * Creates and appends story cards to the stories grid
 * displaying entrepreneur profiles with their images and stories
 */
function populateSuccessStories() {
    const storiesGrid = document.querySelector('.stories-grid');
    successStories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <img src="${story.image}" alt="${story.name}'s story">
            <h3>${story.name}</h3>
            <h4>${story.business}</h4>
            <p>${story.story}</p>
        `;
        storiesGrid.appendChild(storyCard);
    });
}

// Contact Form Handler
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
window.addEventListener('load', () => {
    populateSuccessStories();
});