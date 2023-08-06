const server = require('./index');
const port = process.env.PORT || 5000;


// DATABASE CONNECTION
require('./config/dbConnect');


server.listen(port, () => console.log(`server is running on port ${port}`));