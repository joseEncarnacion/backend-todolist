const app = require('./app');
require('dotenv').config();

// database
require('./database')

// Port configuration
const main = async () =>{
    console.log('helo')
    await app.listen(app.set('port'));
    console.log('server on port' , app.set('port'))
}

main().catch(err => console.log(err)) 