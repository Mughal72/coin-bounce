const express = require("express");
const dbConnect = require("./database/index");
const { PORT } = require("./config/index");
const router = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// const corsOptions = {
//   credentials: true,
//   origin: ["http://localhost:3000"],
// };

const app = express();

app.use(cookieParser());

// app.use(cors(corsOptions));

app.use(
  cors({
    origin: "http://localhost:3000", // Allow only requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify the allowed HTTP methods
    credentials: true, // Allow cookies and authorization headers
    optionsSuccessStatus: 200, // Respond with a 200 status for preflight requests
  })
);


app.use(express.json({ limit: "50mb" }));

app.use(router);

dbConnect();

app.use("/storage", express.static("storage"));

app.use(errorHandler);

app.listen(PORT, console.log(`Backend is running on port: ${PORT}`));
