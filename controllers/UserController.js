const { Book } = require("../models");
const findAllUsers = async(req,res) => {
    const data = await Book.findAll();

    res.json({
        message: "Ini dari router",
        data: data,
    });
};

const detailUser = async (req, res) => {

    let id = parseInt(req.body.id);

        const data = await Book.findByPk(id);
    
        res.json({
            message: "Ini dari router",
            data: data,
        });
    };

const tambahUser = async (req, res) => {
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

const hapusUser = async(req, res) => {
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

const updateUser = async(req, res) => {
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

module.exports = { findAllUsers, detailUser, tambahUser, hapusUser, updateUser };   