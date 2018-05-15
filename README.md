This app allows a user to trade USD for bitcoin, going off of its last price.  It grabs the last price from https://docs.bitfinex.com/v1/reference#rest-public-ticker but because it doesn't accept a CORS request, and this is just a frontend app, it makes the request through a public proxy.

Note that this app really only deals with happy pathing of user iteraction with some minimal error checking.  In order for it to go into production, further error handling will be required.

How to run tests:
1. If you haven't already, run npm install from the main directory of the app from terminal/console
2. From any directory, run npm test

How to run this app:

1. Go to terminal/console in the main directory of the app
2. run npm install
3. run npm start
4. head to http://localhost:3000/

