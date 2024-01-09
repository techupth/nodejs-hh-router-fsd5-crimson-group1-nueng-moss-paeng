import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./data/apps/assignments.js";
import accountRouter from "./data/apps/accounts.js";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(assignmentRouter);
app.use(accountRouter);

app.get("/", (req, res) => {
  return res.send("Hello Teacher!!");
});

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
