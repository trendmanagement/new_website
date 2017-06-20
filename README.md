1. The files of the react app are in the ```client``` folder (https://github.com/trendmanagement/new_website/tree/node/client) 
2. To run the app execute command ```npm install```. This will install the packages required for the app to work 
3. Start the app with the ```npm start``` command

To update the client: 

1. Create a build of react app(on branch master) (see https://github.com/trendmanagement/new_website/blob/master/README.md)
2. Put the build files into the ```client``` folder (https://github.com/trendmanagement/new_website/tree/node/client) 

## Change Data base connection

You can change it in file 'utils/db_connection.js'

``` javascript
module.exports = {
        config: {
        connectionLimit : 1,
        queueLimit      : 100,
        aquireTimeout   : 5000,
        host            : 'host',
        port            : 0000, //port should be in numeric.
        user            : 'username',
        password        : 'password',
        database        : 'database name'

    }   
}
```

### Version used in development
* Node - v7.10.0
* NPM - v4.2.0
