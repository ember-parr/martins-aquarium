const harvestLocations = [
    { 
        location: "Over Yonder",
        date: "December 3, 2014",
        fishHarvested: "Guppi Goldenberg"
    },
    { 
        location: "Beaches of Walmart",
        date: "February 18, 1992",
        fishHarvested: "Sushi"
    },
    { 
        location: "42 Wallaby Way, Sydney",
        date: "November 14, 1999",
        fishHarvested: "Nemo"
    },
    { 
        location: "Down Under",
        date: "September 8, 2004",
        fishHarvested: "James Pond"
    },
    { 
        location: "Sandy Castles Resort",
        date: "Martin Doesn't Remember",
        fishHarvested: "Ann Chovy"
    },
    { 
        location: "Navy Pier",
        date: "December 30, 1996",
        fishHarvested: "Phish Styx"
    },
    { 
        location: "PetSmart in Franklin, TN",
        date: "July 26, 2011",
        fishHarvested: "Beta Boy"
    },
    { 
        location: "Sydney, Australia",
        date: "December 3, 2014",
        fishHarvested: "Big Blue"
    },
    { 
        location: "Sydney, Australia",
        date: "December 3, 2014",
        fishHarvested: "Big Blue"
    },
    
]

export const useLocations = () => {
    return harvestLocations.slice()
}