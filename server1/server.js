import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import path from "path";

const app = express();
let port = 5050;

let listNamesFiles = [
  "background img comouter.jpg",
  "background img phone.jpg",
  "Black ball gif.gif",
  "booms.gif",
  "computer icon.png",
  "github_logo_icon_143772.png",
  "Gmail-logo.png",
  "likedin_logo.png",
  "my pectuer.JPG",
  "network.gif",
  "PDF_file_icon.svg.png",
  "snak.gif",
  "tic tac to.gif",
  "WhatsApp.svg.png",
];

app.use(express.static(path.join(__dirname, 'dist')));


app.get("/", (req, res) => {
  res.send("seccfoly");
});

app.get("/:imagName", (req, res) => {
  const nameFile = req.params.imagName;
  console.log(nameFile);
  if (listNamesFiles.includes(nameFile)) {
    res.sendFile(__dirname + "/media/" + nameFile);
  } else {
    res.send("is note image in this name");
  }
});

app.listen(port, () => {
  console.log("the server is runing in port " + port);
});
