import express from 'express';
import router from './router';
import cors from 'cors';
import helmet from 'helmet';
import { handleSignUp } from './handlers/auth/handleSignUp';
import { handleSignIn } from './handlers/auth/handleSignIn';

const app = express();
const PORT = 3000;
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/audiophile', router);

app.post('/signup', handleSignUp);
app.post('/signin', handleSignIn);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3000`);
});
