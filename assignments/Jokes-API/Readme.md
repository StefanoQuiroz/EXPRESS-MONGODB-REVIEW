# Joke-APIs

1. Create a project folder called "Jokes".
2. inside "Jokes", create a modularized folder structure (server ==> drivers, paths, templates, configuration, server.js)
3. initialize a json package file using npm
4. install express and mangoose
5. create a mongoose.config.js file and configure its mongoose.connect function
6. create a file jokes.model.js, jokes.controller.js and jokes.routes.js in the corresponding folders
7. in the jokes.model file create and JokeSchema and export the mongoose.model ("joke", JokeSchema)
8. in the jokes.controller file import your model from the model file.
9. Export a function to get all jokes.
10. Export a function to get a joke.
11. Export a function to create a joke
12. Export a function to update a joke
13. Export a function to delete a joke
14. In your jokes.routes file: import * from your controller file and add a quick route for each route listed in the wired structure
15. In your server.js file: set up express, import your jokes routes and run your server
16. Use Postman to create new jokes and use the browser to view them.
17. Use Postman to perform POST DELETE and PUT operations and use the browser to get them.
