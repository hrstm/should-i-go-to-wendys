# ShouldIGoToWendys.help

[Visit Web App](https://hrstm.github.io/should-i-go-to-wendys/)

## About

Eating at a Wendy’s fast food restaurant can either be the best or worst choice of your entire life. But when you're hungry at 2AM and all respectable restaurants are closed, rash and detrimental decisions are prone to be made. What if there was a way for the universe to answer the question of whether or not you should eat at a Wendy's? Well now there is.

ShouldIGoToWendys.help is a web app created for the very purpose of solving this conundrum. Based off of the theory that [human consciousness is able to affect the outcome of random number generators](https://noosphere.princeton.edu/papers/pdf/GCP.Explore.pdf), this web app connects to the Quantum Random Number Generator at Australian National University’s campus and gathers an array of data which we convert into three sets of dice. Each die is then rolled to generate a fate score, which represents an affirmation or refutation for going to Wendy's. The three scores are then tallied to determine a final fate score for the user to eat at Wendy's.

During the time that the app is performing the dice rolls and final fate calculations, users are asked to close their eyes and envision eating at Wendy's to attempt affecting the outcome of the numbers generated.

## Code directory

ShouldIGoToWendys.help is a single-page application built using React with Material UI for styling.

Like other React apps, the main .js files for this project are found inside of the src directory. The static files are (suprise) found in the static directory inside of src, while the rest of the app is build upon the files inside of the components directory.

## Components directory

The main file in the components directory is Wendys.js. It directs nearly all the functionality of the app. The materialUI.js file is our Material UI styles sheet that we import into Wendys.js. The Wendys.css file if used for the About section intersection observer in Wendys.js.

Within the Wendys.js file there are four key functions allowing our app to work.

### getQRN():

This function mkes two axios calls to the QRNG API. The first call retrieves an array of six quantum randomly generated numbers which represent the dice sides. The second call retrieves a final number which acts as a weighted point for the dice to fall on. Whichever number from the dice sides array is closest to the weighted point number will be the fate score for that dice roll.

### diceRoll():

This function operates our dice roll using the data generated from the getQRN() function (array of six random numbers plus the weighted side number). This will return thee fate score number of the dice roll.

### primeCheck():

This function will check to see if the fate score that was generated in diceRoll is prime or not. If it is prime, the fate score will be considered a positive value, resulting in a cheeseburgeer icon being generated in the corresponding fate box. Else, it will be considered negative and be represented by a carrot.

Prime numbers are used as an evaluation for the fate scores based off of the [Ulam spiral](https://en.wikipedia.org/wiki/Ulam_spiral).

### executeQRNG():

This is the function that executes when a user starts the application.
It will run the sequence of getQRN(), diceRoll(), and primeCheck() three consecutive times in order to generate all of the individual fates. It then calculates what the final fate message will be based off of the tallied score by referencing the fateScoreDictionary object.
