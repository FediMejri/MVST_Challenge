This project is a small Github app implemented with react, deployed on Heroku and provided with two Features:
      1- Search for users by their userName to get some informations about the user.
      2- Get repositories by user in a view containing a quick search container.
      
**Scenario** : You enter the app by running it locally or by visiting the website https://mvstchallenge.herokuapp.com/ .
           You get the first interface which is the search input and the card containing my github account informations.
           If you want to display the repositories view you click on the "n Repositories" in blue.
           If you want to search for an other user you type its username on the left searchbar and press "Enter" with keyboard or click on search.
           You get the user informations. If you want to see the repositories then click on the blue text again.
           You can search for repositories by their names with the right search bar.
           
**To run the project locally, you need to**
1. Install node.js and npm : sudo apt install nodejs npm 
2. Clone the project at your local machine using git or download it from github directly.
3. open terminal in the project directory.
4. run : npm install
5. run : npm start
6. If you want to run tests, use : npm test

**App website :** https://mvstchallenge.herokuapp.com/

**Improvements :** 
1. Add authentication feature to sign up and lign to the app.
2. Bind the 2 views to each other and make them work together without intervention of the click event.
3. Improve the User Interface and add informations to the web page.

**FeedBack**
This is a good exercice where I practiced some data interaction, templates rendering and state setting using react.js. 
The git versionning requirement has caused some problems to me, since they don't work with passwords anymore so if I want to push I have to generate a token and use it. This policy has changed since 13 august and I didn't know. This exercice has let me notice this change.

