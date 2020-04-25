# translate-app
This application is a interactive UI which translates English text to minion text using a translation API and also stores the recent searches in a MongoDb database. It also allows deletion of all the recent searches. 

The translation is done by an API call to "https://funtranslations.com/api/#minion". The number of public API calls to the API is limited to 60 API calls a day with a distribution of 5 calls an hour.

The backend uses CORS to invoke and fetch the translator API.
