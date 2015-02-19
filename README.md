# Brunch-Workflow
Enhance your Front-end workflow thanks to brunch and fb-flo. 

## Features
* Update your javascript and CSS without refresh your page.
* The template is based on HTML5 boilerplate.
* Stylus and Jade are used as default preprocessor and template language (you can use whatever you want).
* fb-flo server allows you to update automatically your .HTML, .PHP page directly (you can easily configure it).
* jQuery, normalize and modernizr are provided. You can also install bower to manage all frameworks you need.

## How to use it
First of all, you need to install Nodejs, then launch those differents commands :
  * Install brunch globally : `npm install -g brunch`
  * Install packages `npm install` (check package.json file for more infos)
  * Install Chrome fb-flo extension
  * Launch your brunch server : `brunch watch --server`
  * Open a new CLI, open the 'tools' folder, and launch your fb-flo server : `node flo-server.js`
  * Go to `http://localhost:3333`, press F12 and check if the flo server works the in 'flo' tab.
  * Start to code edit your 'main.styl' and 'global.js' files in the app folder. You can create a .jade file in 'app/view/template'
  or edit the index.html sample directly from the 'public' folder.
  * Enjoy !
  
NB: This is a simple and ready to use configuration. You can improve and custom it as you want.
Don't hesitate to ckeck the [brunch](https://github.com/brunch/brunch/tree/stable/docs) documentation.

## Hints
For Windows users, install [Cmder](http://bliker.github.io/cmder/) for a better experience.
