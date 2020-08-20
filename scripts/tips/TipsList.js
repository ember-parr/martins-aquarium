



import { useTips } from './TipsDataProvider.js';
import { Tips } from './Tips.js';

export const tipsList = (tipsList) => {


    const contentElement = document.querySelector(".fishTips");
    const tips = useTips()


    let tipsHTMLRepresentation = "";
    for (const tip of tips) {
        tipsHTMLRepresentation += Tips(tip);
    }

    contentElement.innerHTML += `
        
            ${tipsHTMLRepresentation}
        
    `
}