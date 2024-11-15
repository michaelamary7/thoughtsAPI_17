import express from 'express';  
import db from './config/connection.js';
import routes from './routes/index.js';

const PORT = 3008;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
});
});
