import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/bikal", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/bikal", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/bikal", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Bikal</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +61123456789</p>");
// });

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running on port at http://localhost:${PORT}.`);
});
