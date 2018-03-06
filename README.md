# Contact Manager

Ultimate Angular Course - Final Project

## Dependencies

Install Firebase CLI on the command-line with npm install -g firebase-tools

Install Gulp CLI on the command-line with npm install -g gulp

## Install and Run

npm install

npm start

## Tasks

- Running the local server

npm start

- Running the tests

npm test

- Deploying to Firebase

You'll need to ensure you're logged into Firebase first (if you are prompted, otherwise skip to next step):

firebase login

- To deploy:

npm run deploy

## Firebase rules

```
{
  "rules": {
    ".read": true,
    "contacts": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```
