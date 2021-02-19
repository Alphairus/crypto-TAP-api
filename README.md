# crypto-TAP

The API for the Crypto-TAP database! This API has models for `Users`and `Coins`
and connects the relationship between `Users` and `Coins`.

### Relevant links

- [Deployed Client]
- [Deployed API]
- [Client Repository]

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
| Sign-up | POST | /sign-up
| Sign-In | POST  | /sign-in
| Change-Password |  PATCH | /change-password
| Sign-Out | DELETE | /sign-out

# Coin Routes
| Route | Method | Path |
| ----------- | ----------- | ----------- |
| Index | GET | /coins
| Show | GET  | /coins/:id
| Create |  POST | /coins
| Update | PATCH | /coins/:id
| Delete | DELETE | /coins/:id

### User Stories

- As an unregistered user, I would like to sign up with email and password.
- As a registered user, I would like to sign in with email and password.
- As a signed in user, I would like to change my password.
- As a signed in user, I would like to sign out.
- As a signed in user, I would like to be able to create a coin list.
- As a signed in user, I would like to update my coin list.
- As a signed in user, I would like to delete my coin list.


### ERD

![ERD]

### Planning

2/17

### Unfinished
