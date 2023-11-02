// const route = require('express').Router();

// router.get("/users", (res, req) => {
//     res.json({
//         message: "Ini respon dari router",
//     });
// });

// module.exports = router;
const router = require("express").Router();
const { findAllBooks, detailBook, tambahBuku, hapusBuku, updateBuku } = require("../controllers/BookController");

// endpoint book
router.get("/books", findAllBooks);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/book", hapusBuku);
router.put("/book", updateBuku);


const { findAllUsers, detailUser, tambahUser, hapusUser, updateUser } = require("../controllers/UserController");

// endpoint user
router.get("/user", findAllUsers);
router.get("/user/:id", detailUser);
router.post("/user", tambahUser);
router.delete("/user", hapusUser);
router.put("/user", updateUser);

module.exports = router;
