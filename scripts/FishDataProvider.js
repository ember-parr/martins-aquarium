const fishCollection = [
    {
        givenName: "Guppi Goldenberg",
        species: "Pleebon Flounder",
        length: "2 inches",
        diet: "Turtle Turds",
        harvestLocation: "Over Yonder"
    },
    {
        givenName: "Sushi",
        species: "Male Beta",
        length: "2 inches",
        diet: "Flies",
        harvestLocation: "Beaches of Walmart"
    },
    {
        givenName: "Nemo",
        species: "Clown Fish",
        length: "3 inches minus one fin",
        diet: "Kelp",
        harvestLocation: "42 Wallaby Way, Sydney"
    },
    {
        givenName: "James Pond",
        species: "Party Fish",
        length: "69cm",
        diet: "Peanut Butter",
        harvestLocation: "Down Under"
    },
    {
        givenName: "Ann Chovy",
        species: "Dancing Queen",
        length: "9 feet",
        diet: "McChickens",
        harvestLocation: "Sandy Castles Resort"
    },
    {
        givenName: "Phish Styx",
        species: "Gillfunkle",
        length: "3 big toes",
        diet: "school fish",
        harvestLocation: "Navy Pier"
    },
    {
        givenName: "Phish Styx",
        species: "Gillfunkle",
        length: "3 big toes",
        diet: "school fish",
        harvestLocation: "Navy Pier"
    },
    {
        givenName: "Phish Styx",
        species: "Gillfunkle",
        length: "3 big toes",
        diet: "school fish",
        harvestLocation: "Navy Pier"
    },
    {
        givenName: "Phish Styx",
        species: "Gillfunkle",
        length: "3 big toes",
        diet: "school fish",
        harvestLocation: "Navy Pier"
    },
    {
        givenName: "Phish Styx",
        species: "Gillfunkle",
        length: "3 big toes",
        diet: "school fish",
        harvestLocation: "Navy Pier"
    }
];

// This is new code. Add this.
export const useFish = () => {
    return fishCollection.slice()
}