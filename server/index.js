import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import path from 'path';
import webpack from 'webpack';
import winston from 'winston';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackConfigProd from '../webpack.config.prod';
import routes from './routes';
import './config/database';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

if (process.env.NODE_ENV !== 'production') {
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(webpackMiddleware(webpack(webpackConfigProd)));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../client/public/')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, () => {
  winston.info(`Connected on port: ${port}`);
});
export default app;

