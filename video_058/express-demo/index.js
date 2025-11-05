const helmet = require("helmet");
const express = require("express");
const app = express();
const courses = require("./routes/courses");
const home = require("./routes/home");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(helmet());
app.use("/api/courses", courses);
app.use("/", home);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}...`));
