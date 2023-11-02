const express = require('express');
// const { Client } = require("pg");
const app = express();
const port = 9999;
app.use(express.json());

const route = require("./routes/index");
app.use(route);

app.listen(port,() => console.log(`Server running on port ${port}`));;
// const client = new Client({
//   user: "postgres",
//   host: "localhost",
//   database: "book_store_api",
//   password: "root",
//   port: 5432,
// });

// client
//   .connect()
//   .then(() => {
//     console.log("Terhubung ke database PostgreSQL");
//   })
//   .catch((error) => {
//     console.error("Gagal terhubung ke postgreSQL");
//   });

// app.get('/users',(req, res) => {
//     client
//   .connect()
//   .then(() => {
//     console.log("Terhubung ke database PostgreSQL");
//   })
//   .catch((error) => {
//     console.error("Gagal terhubung ke postgreSQL");
//   });

//   let data;
//   client.query("SELECT id, nama, alamat FROM public.users;", (req, result) => {
//   res.json(result.rows);
//   });
// });
      
// app.get('/users/:id', async (req, res) => {

// });

// app.post('/users', async (req, res) => {
//   let data = req.body;

//   const query = "INSERT INTO public.users(id, nama, alamat)VALUES ($1, $2, $3);";

//   client.query(query,[data.user_id,data.nama,data.alamat], (err, result) =>{
//     if(err){console.error("Error executing INSERT query:", err);
//     return res.status(500).json({ error: "Terjadi kesalahan " + err});
//     }else{
//       res.json({
//         message: "Data berhasil di tambahkan",
//       })
//     }
//   });
// });