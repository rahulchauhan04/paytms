const express = require("express");
const cors = requrie("cors");

app.use(cors());
const app = express();
app.use(express.json());

const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);

app.listen(3000, () => {
     console.log("Server started at port 3000");
})


