const { Coffee } = require('../models/coffee');
const utilities = require('../util/utilityFunctions');
const _ = require('lodash');


/**
 *
 * Takes a user request for all coffee varieties, and returns
 * the result of the search to the user.
 * 
 * @param {object} req The request object
 * @param {object} res The response object
 * @returns {object} A coffee list within an object
 */

exports.getAllVarieties = (req, res) => {
    
    let coffeeList = [];

    Coffee.find()
    .then((varieties) => {
       
        let coffeeList = utilities.formatSearchResponse(varieties);
        res.send({Coffee_List: coffeeList});

    }).catch((error) => {
        res.status(500).send({message: "Server encountered an unknown error - please try again later."});
    });
};


/**
 *
 * Takes a user request for a filtered selection of coffee varieties, 
 * and returns the result of the search to the user.
 * 
 * @param {object} req The request object
 * @param {object} res The response object
 * @returns {object} A coffee list within an object
 */

exports.getFilteredVarieties = (req, res) => {

    let userRequestQuery = req.body

    if(utilities.isEmpty(userRequestQuery)){
        return res.status(400).send({message: "You can not make a POST request with an empty request body. Please try again."});
    }
    
    let dbQuery = utilities.createDbQuery(userRequestQuery);

    Coffee.find({
        $and: dbQuery
     })
     .then((varieties) => {
         
        let coffeeList = utilities.formatSearchResponse(varieties);
        res.send({Coffee_List: coffeeList});

     }).catch((error) => {
         res.status(500).send({message: "Server encountered an unknown error - please try again later."});
     });
};