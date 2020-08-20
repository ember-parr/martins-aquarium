/*
    *  FishList which renders individual fish objects as HTML
*/

import { useFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

export const fishList = (fishList) => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".fishList");
    const fishes = useFish()


    let fishHTMLRepresentaion = "";
    for (const fish of fishes) {
        fishHTMLRepresentaion += Fish(fish);
    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        
            ${fishHTMLRepresentaion}
        
    `
}