# RESTful-API and Twitter Web Service Assignment

This project is used to implement RESTful APIs to interact with data within a json file

## Running and starting it 
1. Clone or download the project files.
2. Navigate the project directory
3. Run 'npm i' to install modules and necessary dependencies
4. Run 'npm start' to get the server running.
5. Open a web brower and type "http://127.0.0.1:3000/" or "http://localhost:3000/" to access the front end

### Get All Tweets
- The method used in the Thunder Client is GET, with the request being http://127.0.0.1:3000/tweets
-Obtains all the tweets available in the tweet data set

### Get All Users
- The method used in the Thunder Client is GET, with the request being http://127.0.0.1:3000/users
-Obtains all the users available in the tweet data set

### Get All External Links
- The method used in the Thunder Client is GET, with the request being http://127.0.0.1:3000/external_links
-Obtains all the external links available in the tweet data set

### Get Tweet Details
- The method used in the Thunder Client is GET, with the request being http://127.0.0.1:3000/tweets/{id}, ex.http://127.0.0.1:3000/tweets/311975360667459600
-Obtains all details about a particular tweet available in the tweet data set

### Get User Details
- The method used in the Thunder Client is GET, with the request being http://127.0.0.1:3000/users/{screen_name}, ex.http://127.0.0.1:3000/users/MarkUry
-Obtains all details about a particular user available in the tweet data set

### Testing
Can test using enpoint tools like Thunder Client, but make sure server is running before use

## Author

Trevor Dang