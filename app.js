const express = require("express");
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');

const debug = require('debug');
const cors = require('cors');
const csurf = require('csurf');

require('./models/User')
require('./models/Project')

const usersRouter = require('./routes/api/users'); // update the import file path
const csrfRouter = require('./routes/api/csrf');
const projectRouter = require('./routes/api/projects')

const app = express();

app.use(logger('dev')); // log request components (URL/method) to terminal
app.use(express.json()); // parse JSON request body
app.use(express.urlencoded({ extended: false })); // parse urlencoded request body
app.use(cookieParser()); // parse cookies as an object on req.cookies
// app.use(express.static(path.join(__dirname, 'public'))); // serve the static files in the public folder

require('./config/passport');
const passport = require('passport')
app.use(passport.initialize());
const { isProduction } = require('./config/keys');



// Security Middleware
if (!isProduction) {
  // enable CORS only in development because React will be on the React
  // development server (http://localhost:3000)
  // (In production, React files will be served statically on the Express server)
  app.use(cors());
}
// Attach Express routers
app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && "Lax",
      httpOnly: true
    }
  })
);
app.use('/api/users', usersRouter); // update the path
app.use('/api/csrf', csrfRouter);
app.use('/api/projects', projectRouter )


// Serve static React build files statically in production
if (isProduction) {
  console.log('production')
  const path = require('path');
  // Serve the frontend's index.html file at the root route
  app.get('/', (req, res) => {
    res.cookie('CSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, './frontend', 'build', 'index.html')
    );
  });

  // Serve the static assets in the frontend's build folder
  app.use(express.static(path.resolve("./frontend/build")));

  // Serve the frontend's index.html file at all other routes NOT starting with /api
  app.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('CSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, './frontend', 'build', 'index.html')
    );
  });
}
//

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});



const serverErrorLogger = debug('backend:error');
// Express custom error handler that will be called whenever a route handler or
// middleware throws an error or invokes the `next` function with a truthy value
app.use((err, req, res, next) => {
  serverErrorLogger(err);
  const statusCode = err.statusCode || 500
  res.status(statusCode);
  res.json({
    message: err.message,
    statusCode,
    errors: err.errors
  })
});

module.exports = app;
