const fishCollection = [
    {
        image: "BlueFish.jpeg",
        givenName: "Guppi Goldenberg",
        species: "Pleebon Flounder",
        size: 2,
        diet: "Turtle Turds",
        harvestLocation: "Over Yonder"
    },
    {
        image: "GreenFish.jpeg",
        givenName: "Sushi",
        species: "Male Beta",
        size: 3,
        diet: "Flies",
        harvestLocation: "Beaches of Walmart"
    },
    {
        image: "NemoFish.jpeg",
        givenName: "Nemo",
        species: "Clown Fish",
        size: 3,
        diet: "Kelp",
        harvestLocation: "42 Wallaby Way, Sydney"
    },
    {
        image: "NeonFish.jpeg",
        givenName: "James Pond",
        species: "Party Fish",
        size: 69,
        diet: "Peanut Butter",
        harvestLocation: "Down Under"
    },
    {
        image: "PinkFish.jpeg",
        givenName: "Ann Chovy",
        species: "Dancing Queen",
        size: 105,
        diet: "McChickens",
        harvestLocation: "Sandy Castles Resort"
    },
    {
        image: "SwayFish.jpeg",
        givenName: "Phish Styx",
        species: "Gillfunkle",
        size: 19,
        diet: "school fish",
        harvestLocation: "Navy Pier"
    },
    {
        image: "BetaFish.jpeg",
        givenName: "Beta Boy",
        species: "Male Beta",
        size: 22,
        diet: "Flakes from store clearance aisle",
        harvestLocation: "PetSmart"
    },
    {
        image: "JellyFish.jpeg",
        givenName: "Blob of Ouchie",
        species: "Jelly Fish",
        size: 90,
        diet: "pain & agony",
        harvestLocation: "Laguna Beach, CA"
    },
    {
        image: "OrangeFish.jpeg",
        givenName: "Orange Julius",
        species: "Overwight Goldfish",
        size: 112,
        diet: "literally anything",
        harvestLocation: "County Fair"
    }
];


export const useFish = () => {
    return fishCollection.slice()
}

//fish with a length divisable by an interval of 3
export const makeMostHolyFish = () => {
    //start with an empty array
    const mostHolyFishArray = [];

    // the % 3 means divide by 3 & "=== 0" means the remainder === zero
    // theFish is a taco variable 
    for(const theFish of fishCollection) {
        if(theFish.size % 3 === 0){
            mostHolyFishArray.push(theFish);
        }
    };

    //returns the array containing only fish with a length divisable by 3
    return mostHolyFishArray;
}

//fish with a length divisable by an interval of 5
export const makeSoldierFish = () => {

    const soldierArray = [];

    for(const fishObj of fishCollection) {

        if (fishObj.size % 5 === 0 && fishObj.size % 3 !== 0) {
            soldierArray.push(fishObj);
        }

    }
    return makeSoldierFish;
}

//add unworthy fish filter next 
