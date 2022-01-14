# PROJECT NAME

## Description

_Duration: 8 hours_

A shopping list that can add, track, "mark as bought" and can clear and delete items. uses SQL, server side code, and a full client ui generated with react.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [postico](https://eggerapps.at/postico/) or another postgresql client

## Installation

1. Create a database named `fs-react-shopping` 
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Enter the food, quantity and (optional) bundle type
2. Click Buy to mark the item as bought
3. Click Remove to remove the item from the list
4. Click the Reset button up top to reset all items to not bought yet
5. Click Clear to clear the list of all items


## Built With

Express
Node.js
React
PostgreSQL

## Contributors

[James Petran](https://github.com/jamespetran)
[Toivo Hannigan](https://github.com/THannigan046)
[Jacob Larson](https://github.com/j3nkii)
[Jeremy Cooper](https://github.com/jeremyacoop)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. 
