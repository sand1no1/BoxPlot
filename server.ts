import express from 'express';
import statisticRoutes from './src/routes/statistic';

const app = express();
app.use(express.json());

app.use('/', statisticRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));