const _ = require('lodash');

/**
 *
 * Takes in a user's request via the API and checks to see if the request 
 * is an empty (invalid) request or a valid request with data inside.
 * A boolean value is returned in either case.
 * 
 * @param {object} userRequestObject The users request object
 * @returns {boolean} true or false depending on whether or not the request object is empty.
 */

const isEmpty = (userRequestObject) => {
    
    let objectEntriesArray = Object.entries(userRequestObject);
    
    if(objectEntriesArray.length === 0){
        return true;
    }else{
        return false;
    } 
};


/**
 *
 * Takes in a user's request via the API and formats an array collection which
 * is suitable for a MongoDB search array using the AND operator.
 * 
 * @param {object} userRequestObject The users request object.
 * @returns {array} An array containing the search data for MongoDB.
 */

const createDbQuery = (userRequestObject) => {

    let objectEntriesMap = new Map(Object.entries(userRequestObject));

    let dbSearchArray = [];

    for([key, val] of objectEntriesMap){
        dbSearchArray.push({[key]:val});
    }

    return dbSearchArray;
};


/**
 *
 * Takes in a the database search results returned from MongoDB and formats
 * it into a list suitable to be sent back to the client.
 * 
 * @param {object} databaseSearchResults A MongoDB Formatted array result collection.
 * @returns {object} An array containing a formatted array collection of search results for the client.
 */


const formatSearchResponse = (databaseSearchResults) => {

    let formattedList = [];

    for(varietyResult of databaseSearchResults){
        let searchResult = _.pick(varietyResult, ['_id', 'name', 'bean_size', 'quality_potential', 'yield', 'disease_resistancy', 'producing_countries']);
        formattedList.unshift(searchResult);
    }
    
    return formattedList;
};


module.exports = {
    isEmpty,
    createDbQuery,
    formatSearchResponse
};