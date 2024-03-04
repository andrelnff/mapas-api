const express = require('express');
const dataRoutes = require('./src/routes/dataRoutes');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json());
app.use((req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.url}`);
    next();
});

app.use('/api', dataRoutes);

app.get('/status', (req, res) => {
    res.json({ status: 'Aplicação no Ar' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
