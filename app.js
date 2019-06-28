const app = require('express')();
const router = require('./routes/router');

app.get('/timestamp-microservice/api/timestamp/:date_string', router.timestamp);
app.get('/timestamp-microservice/api/timestamp/', router.timestamp);
app.get('*', router.handle404);

console.log(`Listening on port ${ 3000 || process.env.PORT }`);
app.listen(3000 || process.env.PORT);