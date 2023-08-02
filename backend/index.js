const express = require("express");
const cors = require("cors");

const entriesRouter = require("./routes/entries");
const skillsRouter = require("./routes/skills");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/entries", entriesRouter);
app.use("/api/skills", skillsRouter);

// ... Add more routes as needed

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
