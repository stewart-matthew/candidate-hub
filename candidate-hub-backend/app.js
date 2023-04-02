const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

// routes
const candidates = require('./routes/api/candidates');

const app = express();
app.use(bodyParser.json({limit: '16mb'}))

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/candidates', candidates);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));