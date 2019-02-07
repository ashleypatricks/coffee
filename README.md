# Arabica Coffee Varieties of the World API ☕️

This app is an API which can be used to discover interesting facts about coffee varieties for coffee lovers!

## Instructions

This app runs off of a MongoDB Database. Whether you have Mongo running locally or in production - you may want to fill up the database with some coffee varieties in order ensure that the API routes are able to fetch some data.

This app also assumes that you have a running MongoDB server either on your local machine or in a production environment.

There is a .json file called:

>> coffea-arabica.json

You can find it in the directory

>> util

Please run the following command to update the running MongoDB database with the relevant data contained in the .json file.

>> npm run populate

After all 16 varieties have been saved, you can go ahead and run:

>> npm run start

in order to start the server.

The server will defalt to port 3004 unless one has been provided via production. The MongoDB URL will also default to localhost if one has not been provided via a production environment.

## Making API Requests

There are two requests:

1) /coffee/searchAll (GET)

This will return an object called Coffee_List which contains all of the coffee varieties in the API collection.

2) /coffee/filtered (POST)

This will return an object called Coffee_List which contains all of the returned coffee varieties which match your search.

Specifying a search request is easy. Just post a JSON object in the body of your query including any values / characteristics of coffee varieties that you would like to see. 

Here is an example:

{
	"producing_countries":"Costa Rica",
	"yield":"GOOD"
}

This query will return a list of all coffee varieties which have a producing country of Costa Rica, and a GOOD yield.

Please see below for an advanced version of making requests for nested items.


## Characteristics

Please make a GET request on /coffee/searchAll to see the values available, or take a look at the coffea-arabica.json file. For further information.

One last thing!

In order to make a search on a nested item, such as with disease resistancy:

"disease_resistancy": [
      {
        "leaf_rust": "TOLERANT"
      },
      {
        "coffee_berry_disease": "RESISTANT"
      },
      {
        "nematodes": "SUSCEPTIBLE"
      }
    ]

Your POST request should look like this:

{
	"producing_countries":"Costa Rica",
	"yield":"GOOD",
    "disease_resistancy.leaf_rust":"TOLERANT"
}

Therefore, using the (.) dot operator to access a nested property of a key.

## Testing

In order to run tests - please run the command:

>> npm run test

## Documentation

All documentation for methods and functions can be found in:

>> docs

Thanks!