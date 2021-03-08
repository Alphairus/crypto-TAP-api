# Crypto-TAP

The API for the Crypto-TAP database! This API has models for `Users`and `Coins`
and connects the relationship between `Users` and `Coins`.

## Installation
1. [Download](https://github.com/Alphairus/crypto-TAP-api/archive/main.zip) this
zip file.
2. Move the .zip file to your `sei/projects/` directory and Unzip it (creating a
   folder) -- **NOTE:** if the folder was already unzipped, use the `mv` command
   line to move it to the `sei/projects/` directory.
3. Rename the directory from crypto-tap-api -> your-app-name.
4. Empty Readme.md and fill with your own content.
5. Move into the new project and `git init`.
6. Replace all instances of `'crypto-tap-api'` with your app name.
7. Install dependencies with `npm install`.
8. Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
9. Ensure the API is functioning properly by running `npm run server`.
10. Once everything is working, make an initial commit.
11. Follow the steps in [express-api-deployment-guide](https://git.generalassemb.ly/ga-wdi-boston/express-api-deployment-guide)

## Tasks
| Command | Effect |
|-----------------------|---------------------------------------------------|
| `npm run server`      | Starts a development server with `nodemon` that
                          automatically refreshes when you change something |
| `npm test`            | Runs automated tests.                             |
| `npm run debug-server`| Starts the server in debug mode                   |


### Relevant links

- [Deployed Client] (https://alphairus.github.io/crypto-TAP-client/#/)
- [Deployed API] (https://whispering-depths-77462.herokuapp.com/)
- [Client Repository] (https://github.com/Alphairus/crypto-TAP-client)

### List of Technologies Used
- HTML/CSS
- Bootstrap
- Javascript
- React
- React Router

### Routes

# Authentication
| Route | Method | Path |
| ----------- | ----------- | ----------- |
| Sign-up | POST | `/sign-up`
| Sign-In | POST  | `/sign-in`
| Change-Password |  PATCH | `/change-password`
| Sign-Out | DELETE | `/sign-out`

# Coin Routes
| Route | Method | Path |
| ----------- | ----------- | ----------- |
| Index | GET | `/coins`
| Show | GET  | `/coins/:id`
| Create |  POST | `/coins`
| Update | PATCH | `/coins/:id`
| Delete | DELETE | `/coins/:id`

### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change my password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to be able to create a coin list.
- As a signed in user, I would like to update my coin list.
- As a signed in user, I would like to delete my coin list.


### ERD

![ERD](https://lucid.app/publicSegments/view/b126cdc1-f990-4198-a950-29d3d3c871ec/image.jpeg)

### Planning
## Planning Story

I began with the user routes. Using a express-template made that part easy. Next came the model for coins. Even though this was my second full application using express,
I wanted to make sure I had full hands-on control with the front and back-end as the last project I worked in a team of four.   Curl-scripts were part of the testing process. Everything was smooth until index/show. That took me awhile to review/fix
as I was having trouble defining and calling it properly, as well as styling the
component to actually populate visually.

## Problem Solving Strategy

- I utilized previous lessons/notes from GA.
- I also utilized my cohort by asking them questions when I couldn't solve an issue.

### Unfinished

- Live coin tracker connecting to third party api (Potential connections: Coingecko, Coinbase, CoinStats)
- Web Scraper for real-time news feed related to cryptocurrency
