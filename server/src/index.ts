import express from 'express';
import router from './router';
import cors from 'cors';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.use('/audiophile', router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});
