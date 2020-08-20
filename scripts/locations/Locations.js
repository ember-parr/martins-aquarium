export const Locations = (locationObj) => {
    return `
    <div class="location-card">
        <h3>Harvest Location:</h3> <h2>${locationObj.location}</h2>
        <ul>
            <li>Date Visited: ${locationObj.date}</li>
            <li>Fish Harvested: ${locationObj.fishHarvested}</li>
        </ul>
    </div>
    `
};


console.log("locations js file is showing");