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
## Setting up email
You should do next step
1.  On your computer, open Gmail.
2.  In the top right, click Settings Settings.
3.  Click Settings.
4.  Click the Forwarding and POP/IMAP tab.
5.  In the "IMAP Access" section, select Enable IMAP.
6.  Click Save Changes.

https://support.google.com/mail/answer/7126229?hl=en

In file 'routes/index.js', change "setPassWord" to password from your Gmail account.

``` javascript
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // secure:true for port 465, secure:false for port 587
    auth: {
        user: 'tmqrexo@gmail.com',
        pass: 'setPassWord'
    }
});
```
### Version used in development
* Node - v7.10.0
* NPM - v4.2.0
