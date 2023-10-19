const express = require('express')

    const app = express()
    const port = 9999

    app.get('/PesanMenu',(req,res) =>{
        res.send("Mau Pesan Apa ?")
    })

    app.post('/PesanMenu',(req,res) =>{
        res.send("Mie Ayam")
    })

    app.put('/',(req,res) =>{
        res.send("Normal atau Jumbo")
    })

    app.delete('/',(req,res) =>{
        res.send("Apa kah pesanan nya sudah selesai atau belum ?")
    })

    app.listen(port,() => console.log(`Server running on port ${port}`))
