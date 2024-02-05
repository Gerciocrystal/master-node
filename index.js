const express = require("express");
const Routes = require("./routes");
const app = express();
const PORT = 5000;
const connectDb = require("./db/db");
const morgan = require("morgan");
connectDb();
app.use(express.json());

app.use(morgan("dev"));
app.use("/api/v1", Routes);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
