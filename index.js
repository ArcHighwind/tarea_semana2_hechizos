import express from 'express';
import { spell } from './Routes/apiSpells.js'
const app = express();


app.use(express.json()); //para que pueda entender lso jsons

app.use('/api/spells', spell);

app.listen(3000, ()=>{

    console.log('welcome to port 3000 soldier');
});