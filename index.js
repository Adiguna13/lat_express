// const express = require(`express`);
// const app = express();

// // app.use((req, res) => {
// //   console.log(`we got request`);
// //   //   res.send(`<h1>Hello Express</h1>`);
// //   res.send({ message: "Hello Express" });
// // });

// app.get(`/`, (req, res) => {
//   res.send(`This is Homepage`);
// });

// // localhost:8080/cats - mengirim string
// app.get(`/cats`, (req, res) => {
//   res.send(`This is cats page`);
// });

// app.post(`/cats`, (req, res) => {
//   res.send(`This is cats page from post`);
// });

// app.get(`/about`, (req, res) => {
//   res.send(`This is About page`);
// });

// //domain.com/blog/dinamis-link-blog START
// app.get(`/blog/:judul`, (req, res) => {
//   const { judul } = req.params;
//   res.send(`This is postingan ${judul}`);
// });

// app.get(`/blog/:category/:judul/:author`, (req, res) => {
//   const { category, judul, author } = req.params;
//   res.send(
//     `This is postingan category ${category} | berjudul: ${judul} | author: ${author}`
//   );
// });
// //domain.com/blog/dinamis-link-blog END

// app.get(`/search`, (req, res) => {
//   // console.info(req.query);
//   const { q } = req.query;
//   if (!q) {
//     res.send(`<h1>no search</h1>`);
//   } else {
//     res.send(`<h1>Keyword = ${q}</h1>`);
//   }
// });

// /*Harus Paling Akhir - START*/
// app.get(`*`, (req, res) => {
//   res.send(`Not Found`);
// });
// /*Harus Paling Akhir - END*/

// app.listen(8080, () => {
//   console.log(`Server is running on http://localhost:8080`);
// });
