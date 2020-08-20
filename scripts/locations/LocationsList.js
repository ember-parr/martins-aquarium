import { useLocations } from './LocationsDataProvider.js';
import { Locations } from './Locations.js';


// import { useLocations } from './Locations.js';
// import { Locations } from './LocationsDataProvider.js';

export const locationsList = (locationsList) => {

    const contentElement = document.querySelector(".places");
    const locations = useLocations()

    let locationsHTMLRepresentation = "";
    for (const location of locations) {
        locationsHTMLRepresentation += Locations(location);
    }

    contentElement.innerHTML += `
        ${locationsHTMLRepresentation}
    `

}