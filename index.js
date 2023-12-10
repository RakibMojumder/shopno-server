require('dotenv').config();
const server = require('./src/server');
const port = process.env.PORT || 5000;


// DATABASE CONNECTION
require('./src/config/dbConnect');


server.listen(port, () => console.log(`server is running on port ${port}`));