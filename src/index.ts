import express, { Request, Response } from 'express';
import { router } from './routes/loginRoutes';
import bodyparser from 'body-parser';

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
// app.use(express.urlencoded());
app.use(router);

app.listen(3000, () => {
	console.log('Listening on port 3000');
});
