
*Node.JS testing environment. Reworked from https://developer.okta.com/blog/2018/04/24/simple-node-authentication*

*Simple Node Authentication

The project will run on localhost:3000

Start command: 
*npm start app.js in the root folder (node/simple-node-authentication)

*NOTE: 
The *.env file needs to contain your specific environment details - HOST URL, API TOKEN(noted as REGISTRATION_TOKEN), CLIENT_ID and CLIENT_SECRET. APP_SECRET can remain the same. 

To generate new APP_SECRET run:
- npm install -g uuid-cli
- echo "APP_SECRET=`uuid`" >> .env