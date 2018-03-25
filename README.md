# Contact Manager

[AngularJs study project](https://contacts-manager-f33e8.firebaseapp.com)

## Dependencies

Install Firebase CLI on the command-line with `npm install -g firebase-tools`

Install Gulp CLI on the command-line with `npm install -g gulp`

`node v6.8.1`
`npm 9.10.8`
## Install and Run

npm install

npm start

## Tasks

**Running the local server**

> npm start

**Running the tests**

> npm test

**Deploying to Firebase**

_You'll need to ensure you're logged into Firebase first (if you are prompted, otherwise skip to next step):_

> firebase login

**To deploy:**

> npm run deploy

## Firebase rules

```json
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
