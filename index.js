const express = require('express');
const db = require('./server/data/sqlite3');
const cors = require('cors');
const ProductRouter = require('./server/router/ProductRouter');
const UserRouter = require('./server/router/userRouter');
const OrderRouter = require('./server/router/OrderRouter');


// Connect to database SQLite
db.connect()

const app = express();

app.use(cors());

app.set('views', './server/view');
app.set('view engine', 'ejs');

// Public
app.use(express.static('./server/public'));

// Accept JSON through REST
app.use(express.json())

app.use('/api/user', UserRouter)
app.use('/api/product', ProductRouter)
app.use('/api/order', OrderRouter)

app.listen(3000);