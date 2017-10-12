# react-redux-router-demo

This Repo developed to show case Rect project structures and explain React Concepts, Redux and Routers.

## Installation and Running the App

Install the dependencies and run the app.

```bash
npm install
npm start
```


## Project structure
I divided this project in different folders like Core, Store and Component etc.

## Concepts Used/explained.
#### `React`

Everything is Component.

#### `Redux`
Component will just dispatch action and action will use Reducers to updates store values.
Component will subscribe the Store values.

#### `React Router` 
   Router will load Components based your url.

   Routers will Guard Home page and other pages. If user not logged in Router will redirect to back to Login Page.
   If user entered some random Component url it will load 404 Component.

#### `Backend` 
   Currently Backend Code not added in this project so this project will use MOCK data and Localstorage to store information.

   After Registration User information will be stored in Localstorage and will be validated using Login Page.

   If Login operation successful Router will render Home page. 

#### `JWT`  
  Tokens based Authentication.

#### `Bootstrap`  
  Used for style purpose 

#### `Localstorage`  
 Used to Store the Data.


