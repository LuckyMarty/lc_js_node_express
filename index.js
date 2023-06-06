const express = require('express');
const db = require('./server/data/sqlite3');
const productRouter = require('./server/router/ProductRouter');
const UserRouter = require('./server/router/userRouter');

// Connect to database SQLite
db.connect()

const app = express();

app.set('views', './server/view');
app.set('view engine', 'ejs');

// Public
app.use(express.static('./server/public'));

// Accept JSON through REST
app.use(express.json())

app.use('/api/user', UserRouter)
app.use('/api/product', productRouter)


// app.use('/', StoreControllerIndex);
// app.use('/mon-compte', CompteBancaireController);
app.listen(3000);