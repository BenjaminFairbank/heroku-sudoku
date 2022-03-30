# Heroku Sudoku

Sudoku is a single player game similar to a crossword puzzle.

If you are unfamiliar with sudoku, find out more here: https://en.wikipedia.org/wiki/Sudoku

Heroku Sudoku is deployed on the Heroku cloud application platform.

It can be visited at: https://herokusudoku.herokuapp.com

## WARNING!

Unfortunately, the API which generated fresh games sudoku games has been discontinued!  The only way to enjoy the application now is to visit the old saved games which are still very playable.  To play Heroku Sudoku simply go to herokusudoku.herokuapp.com/games/[ID], substituting [ID] with one of the follwing game ids: [68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155].  Sorry for the inconvenience!  Enjoy!


### Stack:

  - Ruby 2.6.5
  - Rails 5.2.4.4
  - React 16.8.0
  - PostgresSQL 12


### Setting up Local Development Environment

Complete the following steps to create an instance of Heroku Sudoku on your local machine.

Open your terminal and execute the following command to clone the GitHub respository.
Make sure you execute this command from the directory that you wish to keep this project.
If you do not have git configured on your machine you may refer to this guide: https://github.com/git-guides/install-git

  `$ git clone https://github.com/BenjaminFairbank/heroku-sudoku.git`

Once you have downloaded the repository to your local machine, navigate into the project directory.

  `$ cd heroku-sudoku`

Download required ruby gems by executing:

  `$ bundle install`

Download required yarn and node packages with:

  `$ yarn install`

Create the PostgresSQL database with the following commands:

  `$ rake db:create`

  `$ rake db:migrate`

The application is now ready to be run in a development environment on your local machine.
To do so, execute the following from the project's directory:

  `$ rails s`

Then, in a separate terminal, within the same directory execute:

  `$ yarn start`

The project will then be viewable by visiting 'localhost:3000' in your browser.

The test suite can be run by executing:

  `$ rspec`

Status:

[![Codeship Status for BenjaminFairbank/heroku-sudoku](https://app.codeship.com/projects/d97cbb50-ec07-0138-82eb-22560eb9152f/status?branch=master)](https://app.codeship.com/projects/413191)


### To Do

 - Update 'How to play' section
 - Front-end user features (sign-in/up etc.)
 - Save, reset, undo buttons
 - Timer
 - High Scores (times) for users
 - Media query/flexibility of board display size.
 - Expand dark mode functionality
...


### Notes on third-party API ( NO LONGER IN SERVICE :/ ) :

This project relies entirely on the The University of Texas at El Paso's Sudoku Web Service API to generate games.

The documentation can be viewed here: http://www.cs.utep.edu/cheon/ws/sudoku/

While the this API is free and does not require any key, IT IS NOT PERFECT and very, very rarely can supply bad game data, or fail to respond.

Having said that, I am eternally grateful to Professor Cheon of UTEP's CS department for this API service!


### Inspiration

This project was inspired by a few sudoku algorithm practice challenges completed at codewars.com

![CodeWars Badge](https://www.codewars.com/users/BenjaminFairbank/badges/large)


### Please enjoy this application! Any regards can be directed to benfairbank26@gmail.com
