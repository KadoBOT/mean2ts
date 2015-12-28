import * as express from "express";
import * as path from "path";
import * as bodyParser  from "body-parser";

const port: number = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/../public")));
app.use("/node_modules", express.static(path.join(__dirname + "/../node_modules")));

app.listen(port, () => {
    console.log("Server listening on http://localhost:" + port);
});

