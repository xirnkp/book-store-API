const { Book } = require("../models");
const findAllBooks = async(req,res) => {
    const data = await Book.findAll();

    res.json({
        message: "Ini dari router",
        data: data,
    });
};

const detailBook = async (req, res) => {

    let id = parseInt(req.body.id);

        const data = await Book.findByPk(id);
    
        res.json({
            message: "Ini dari router",
            data: data,
        });
    };

const tambahBuku = async (req, res) => {
    try{
      const data = req.body;

      const result = await Book.create(data);

      res.json({
        result: result,
      }); 
   
    }catch (error) {
        res.json({
            message: "error :" + error,
        })
    }
};

const hapusBuku = async(req, res) => {
    try {
        const id = req.body.id;
        
        const result = await Book.destroy({
            where: {
                id: id,
            },
        });
          res.json({
            message: "Data berhasil dihapus",
          });
    }catch (error) {
        res.json({
            message: "error :" + error,
        });
    }  
};

const updateBuku = async(req, res) => {
    try {
        const id = req.body.id;
        
        const newData = req.body;

        const result = await Book.update(newData, {
            where: {
                id: id,
            },
        });
          res.json({
            message: "Data berhasil diupdate",
          });
    }catch (error) {
        res.json({
            message: "error :" + error,
        });
    }  
};

module.exports = { findAllBooks, detailBook, tambahBuku, hapusBuku, updateBuku };