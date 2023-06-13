const path = require(`path`);
const express = require(`express`);
const { render } = require("ejs");
const app = express();

const tagsData = require(`./data.json`);

app.set(`view engine`, `ejs`);
// /c/xampp/htdocs/first_express/express_page/views
app.set(`views`, path.join(__dirname, `/views`));
// app.use(express.static(`public`));
app.use(express.static(path.join(__dirname, `/public`)));

app.get(`/`, (req, res) => {
  res.render(`home`);
});

app.get(`/random`, (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render(`random`, { random: num });
});

app.get(`/t/:tag`, (req, res) => {
  // console.log(tagsData);
  const { tag } = req.params;
  const data = tagsData[tag];
  if (data) {
    res.render(`tag`, { data });
  } else {
    res.render(`notFound`, { tag });
  }
});

app.get(`/cats`, (req, res) => {
  const cats = [`jack`, `back`, `kek`, `john`, `jake`, `blacky`];
  res.render(`cats`, { cats });
});

app.listen(8080, () => {
  console.info(`listening on host http://localhost:8080`);
});
