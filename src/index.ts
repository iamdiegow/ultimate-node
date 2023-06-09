import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (_req, res) => {
	res.json({
		hello: 'world',
	});
});

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, '0.0.0.0', () => {
	console.log(`Server listening at ${PORT}`);
});
