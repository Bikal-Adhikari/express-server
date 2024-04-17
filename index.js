import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Bikal</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +61123456789</p>");
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.log(`Server running on port at http://localhost:${PORT}.`);
});
