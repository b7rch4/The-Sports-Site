# The Sports Site

## Introduction
___
```
This React app gives the user access to a wide range of information relating to a variety of sports.

The user can view latest standings from the Top 5 European Football Leagues, and see fixtures and match results for teams.

Latest news headlines can also be seen for Football in general and for specific teams.

The user can also view latest standings from the Formula 1 Drivers and Constructors Championships, along with information about all of the drivers.
```

## Setup
___
Before using the app two API keys are required. You can sign up using the following links:

Football Data API: https://www.football-data.org/client/register

News API: https://newsapi.org/register

These API keys should then be stored in a .env file under the names REACT_APP_FOOTBALL_KEY and REACT_APP_NEWS_KEY respectively.

To install and run the project, use the following commands in the terminal:
```
git clone git@github.com:b7rch4/Sports-Site.git

npm install

npm start

npx json-server --watch data/db.json --port 8000
```

## Coming Up
___
Here is a list of things I am planning to add to the app in the near future:

- Coverage of more sports, such as NFL, Cricket, NHL and Rugby.
- The ability to view highlights for recently played football matches.
- Further data for individual matches, such as goalscorers.
- Full results of all Formula 1 Grands Prix during the current season.

## Other Thoughts
___
Code is a bit messy right now - big refactoring job upcoming!