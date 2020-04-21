import { fifaData } from "./fifa.js";
console.log(fifaData);

// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const teamName = fifaData.filter((team) => {
  return team["Home Team Name"];
});
console.log(teamName);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  data.filter(function (item) {
    return item["Stage" === "Final"];
  });
}
console.log(getFinals(fifaData));
/* Task 3: Impliment a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(/* code here */) {
  /* code here */
}

getYears();

/* Task 5: Impliment a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(callback) {
  let winners = callback.map(function (final) {
    if (final["Home Team Goals"] > final["Away Team Goals"]) {
      return final["Home Team Name"];
    } else {
      return final["Away Team Name"];
    }
  });
}

getWinners(getFinals(fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getAllWinners(winners, years) {
  for (let i = 0; i < winners.length; i++) {
    console.log(`In ${years[i]}, ${winners[i]} won the world cup!`);
  }
}
getAllWinners(getFinals(fifaData), getYears(getFinals));

/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
  let teamMatches = data.map(function(match){
    if (match["Home Team Goals"] > match["Away Team Goals"]) {
        return match["Home Team Initial"];
      } else {
        return match["Away Team Initials"];
      }
      })
teamMatches.forEach(function(item) {
    if (item === teamInitials ) {
        count++;
    }
})
return `${teamInitials} has won ${count} games`;
}

getCountryWins(fifaData, );

/* Task 8: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
  /* code here */
}

getGoals();

/* Task 9: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
  /* code here */
}

badDefense();

/* Task 10: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals() {
  let homeTeamGoals = data.map(function(item) {
      return item["Home Team Goals"];
  })
  let AwayTeamGoals = data.map(function(item) {
  return item["Home Team Goals"];
}, 0)/ awayTeamGoals.length;
let avgHome = homeTeamGoals.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    let avgHome = homeTeamGoals.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
})
return  avgHome avgAway;}
getAverageGoals();

/// STRETCH 🥅 //

/* Use the space below to work on any stretch goals of your chosing as listed in the README file. */
