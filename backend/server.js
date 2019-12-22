const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const Data = require("./data");
const logger = require("morgan");
const Api_port = 3002;
const app = express();
app.use(cors());
const corsOptions = {
  origin: true,
  credentials: true
};
app.options("*", cors(corsOptions));
const router = express.Router();
const dbRoute =
  "mongodb+srv://prianka01:FH3yRO55jzvvJzID@cluster0-tko4l.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(dbRoute, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "Mongodb connection error"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/getData", (request, response) => {
  Data.find((err, data) => {
    if (err) return response.json({ success: false, error: err });
    return response.json({ success: true, data: data });
  });
});

router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.message = message;
  data.id = id;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});
router.delete("/deleteData", (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});
// router.delete('/deleteData',(req,res)=>{
//   Data.deleteMany({});
// });

router.post("/translate", (req, res) => {
  const { text } = req.body;

  if (text) {
    return res.json({
      success: {
        total: 1
      },
      contents: {
        translation: "ferblatin",
        text: "Hello world",
        translated: "helio worldy"
      }
    });
  }
});

app.use("/api", router);
app.listen(Api_port, () => console.log(`LISTENING ON PORT ${Api_port}`));
