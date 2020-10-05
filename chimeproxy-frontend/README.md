## Setup Instructions
In this section, you will learn how to setup a simple web app written in the [React framework](https://reactjs.org/) in your local environment. Once you set up this app locally, you will be able to set up a proxy calling session.

* Create environment variables in your frontend configuration by running the following commands
```
cd ../chimeproxy-frontend && touch .env
```
* You should now have an `*.env` file in your chimeproxy-frontend folder. Now, you can use any code editor of your choice to enter the API Gateway URL you copied from backend section in the `*.env` file. Note: Refer the `env_sample` file for format.
```
REACT_APP_API_URL=<YOUR API GW URL> (eg. https://hn4cq*****.execute-api.us-east-1.amazonaws.com/dev/)
```
* Once the configuration for your frontend is entered, you can run the following commands in the chimeproxy-frontend folder to set up your frontend server locally.
```
npm install
yarn start
```
* Open your browser and navigate to [http://localhost:3000](http://localhost:3000/) to start testing
![Chime Proxy Demo Homepage](homepage.png "Chime Proxy Demo Homepage")

* Click on **Set Up Proxy Phone Session** to set up a proxy phone session between the 2 phone numbers you provided in the backend section.
![Chime Proxy Demo Results](results.png "Chime Proxy Demo Homepage")
