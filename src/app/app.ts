import express = require('express');
import cors = require('cors');
import bodyParser = require('body-parser');
import { Dino } from 'dinoloop';
import { HomeController } from './controllers/home.controller';

const app = express();

/************ basic express-setup **************/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
/**********************************************/

// Dino requires express app instance
// and the base-uri on which dino app to be mounted
let dino = new Dino(app, '/api');

dino.useRouter(() => express.Router());
dino.registerController(HomeController);

dino.bind();
app.listen(8088, () => console.log('Server started on port 8088'));