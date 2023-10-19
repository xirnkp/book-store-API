const express = require('express')

    const app = express()
    const port = 9999

    app.get("/PesanMenu", (req, res) => {
        res.json({
            message: "jadi mau pesen apa",
        });
    });

    app.post("/PesanMenu", (req, res) => {
        res.json({
            message: "Mie Ayam atau Mie Baso",
        });
    });

    app.put("/PesanMenu", (req, res) => {
        res.json({
            message: "Mau yang Normal atau Jumbo",
        });
    });

    app.delete("/PesanMenu", (req, res) => {
        res.json({
            message: "Apakah jadi memesan ?",
        });
    });

    app.listen(port,() => console.log(`Server running on port ${port}`))
