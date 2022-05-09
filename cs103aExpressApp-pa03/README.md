# CS103a Express App Demo

This is a starter project which has a simple authentication module 
and provides access to a mongoose database in the cloud.

## Installation
Download the project from github and download nodejs and npm from https://nodejs.org
and cd into the folder

Install the packages with
``` bash
npm install
```
Start the project with
``` bash
node app.js
```
or install nodemon (the node monitoring app) with
``` bash
npm install -g nodemon
```
and start the project with
``` bash
nodemon
```

My App uses data from the new york stock exchange to allow the use to search by either the name of the company or the the Symbol abbrevation of the company. for example you can search the company 3M by tying in 3M to the Search companies by name or MMM into the search companies by symbol. It will then return a list of the companies with that name or symbol.

