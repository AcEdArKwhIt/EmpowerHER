/**
 * Global map instance used throughout the application
 * @type {L.Map}
 */
let map;

/**
 * Sample data for entrepreneurship events and hubs
 * Each location object contains:
 * @typedef {Object} Location
 * @property {string} name - Name of the event or hub
 * @property {number[]} location - [latitude, longitude] coordinates
 * @property {'event'|'hub'} type - Type of location
 * @property {string} [date] - Optional date for events
 * @property {string} description - Brief description of the location
 */
const locations = [
    {
        name: "Women Entrepreneurs Summit",
        location: [40.7128, -74.0060],
        type: "event",
        date: "2024-06-15",
        description: "Annual summit connecting women entrepreneurs"
    },
    {
        name: "Tech Startup Hub",
        location: [51.5074, -0.1278],
        type: "hub",
        description: "Co-working space and innovation center"
    },
    {
        name: "Asia Women's Network",
        location: [1.3521, 103.8198],
        type: "hub",
        description: "Networking hub for women in business"
    }
];

/**
 * Initialize map functionality when the DOM content is fully loaded
 * Sets up the map and adds location markers
 */
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    addMapMarkers();
});

/**
 * Initializes the Leaflet map with default settings
 * Centers the map view globally and sets up the base tile layer
 */
function initMap() {
    // Initialize Leaflet map centered on world view
    map = L.map('map-container').setView([20, 0], 2);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
}

/**
 * Adds markers to the map for all locations in the locations array
 * Creates interactive popups for each marker with location details
 */
function addMapMarkers() {
    locations.forEach(location => {
        const marker = L.marker(location.location).addTo(map);
        
        // Create popup content
        let popupContent = `
            <strong>${location.name}</strong><br>
            ${location.description}<br>
        `;
        
        if (location.date) {
            popupContent += `Date: ${location.date}`;
        }
        
        marker.bindPopup(popupContent);
    });
}

// Add event listener for map clicks to allow user interaction
map.on('click', function(e) {
    console.log("Clicked coordinates:", e.latlng);
});