// tslint:disable-next-line: no-require-imports no-var-requires
require('source-map-support').install();
import express = require('express');
import bodyParser = require('body-parser');
import { Dino } from 'dinoloop';
import { HomeController } from './controllers/home.controller';

const app = express();
const port = process.env.PORT || 8088;

/************ basic express-setup **************/
app.use(bodyParser.json());

// Dino requires express app instance
// and the base-uri on which dino app to be mounted
const dino = new Dino(app, '/api');

dino.useRouter(() => express.Router());
dino.registerController(HomeController);
dino.bind();

app.listen(port, () => console.log(`Server started on port ${port}`));