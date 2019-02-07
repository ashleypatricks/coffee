const coffeeDataFromJson = require('./coffea-arabica');
const { mongoose } = require('../db/mongoose_connection');
const { Coffee } = require('../models/coffee');

/**
 *
 * Takes in a reference to the coffea.arabica.json file which contains
 * the coffee varieties data, parses it and populates the MongoDB database
 * with it's values.
 * 
 * @param {object} coffeeCollection The reference to the coffea-arabica.json file.
 */

((coffeeCollection) => {
    
    let name = "";
    let bean_size = "";
    let quality_potential = "";
    let varietyYield = "";
    let disease_resistancy = [];
    let producing_countries = [];
    let counter = 0;

    for(coffeeVariety of coffeeCollection){

        name = coffeeVariety.name;
        bean_size = coffeeVariety.bean_size;
        quality_potential = coffeeVariety.quality_potential;
        varietyYield = coffeeVariety.yield;
        disease_resistancy = [... coffeeVariety.disease_resistancy];
        producing_countries = [... coffeeVariety.producing_countries];

        let variety = new Coffee({
            name,
            bean_size,
            quality_potential,
            yield: varietyYield,
            disease_resistancy,
            producing_countries
        });

        diseaseResistancyStore = [];
        producingCountriesStore = [];

        variety.save()
        .then((doc) => {
        console.log('Variety saved: ', doc);
         })
        .catch((error) => {
        console.log("Unable to save variety", error);
         });
    }
})(coffeeDataFromJson);