const jsonServer = require('json-server');

// Create a custom Express server
const ProductServer = jsonServer.create();

// Middleware
const middleware = jsonServer.defaults();

const router = jsonServer.router('db.json');

ProductServer.use(middleware);

// Use the JSON Server router to handle other requests
ProductServer.use(router);

const PORT = 5000 ||  process.env.PORT


ProductServer.listen(PORT, () => {
  console.log(`Server is running at port number ${PORT}`);
});
