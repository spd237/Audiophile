import { Router } from 'express';
import { getHeadphones, getOneHeadphone } from './handlers/headphones';
import { getOneSpeaker, getSpeakers } from './handlers/speakers';
import { getEarphones, getOneEarphone } from './handlers/earphones';

const router = Router();

router.get('/', (req, res) => {
  res.send('Home');
});

//Headphone routes
router.get('/headphones', getHeadphones);
router.get('/headphones/:id', getOneHeadphone);
router.post('/headphones/:id', (req, res) => {
  res.send('added to card');
});

//Speaker routes
router.get('/speakers', getSpeakers);
router.get('/speakers/:id', getOneSpeaker);
router.post('/speakers/:id', (req, res) => {
  res.send('added to card');
});

//Earphone routes
router.get('/earphones', getEarphones);
router.get('/headphones/:id', getOneEarphone);
router.post('/earphones/:id', (req, res) => {
  res.send('added to card');
});

export default router;
