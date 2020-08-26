/*
    *  FishList which renders individual fish objects as HTML
*/

import { useFish, makeMostHolyFish, makeSoldierFish, makePeasantFish } from './FishDataProvider.js';
import { Fish } from './Fish.js';

export const fishList = () => {
    const holyFish = makeMostHolyFish();
    fishyOnDom(holyFish);

    const soldierFish = makeSoldierFish();
    fishyOnDom(soldierFish);

    const peasantFish = makePeasantFish();
    fishyOnDom(peasantFish);
}




export const fishyOnDom = (pickAFish) => {

    const contentElement = document.querySelector(".fishList");
    let fishHTMLRepresentaion = "";
    for (const singleFishy of pickAFish) {
        fishHTMLRepresentaion += Fish(singleFishy);
    }

    contentElement.innerHTML += `${fishHTMLRepresentaion}`
}