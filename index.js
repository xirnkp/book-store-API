const express = require('express')

    const app = express()
    const port = 9999

    const data_users = [
        { id: 1, name: "Ilham Anugrah", alamat: "Sukabumi" },
        { id: 2, name: "Ghina Khairunnisa", alamat: "Bandung" },
        { id: 3, name: "Hana Syifa", alamat: "Jakarta" },
        { id: 4, name: "Daehan Ibrahim", alamat: "Bandung" },
    ];

    app.get("/users/:id", (req, res) => {
        // get data dari parameter
        let id = parseInt(req.params.id);

        // get data dari database
        let result;
        const user = data_users.find((user) => user.id === id);
        if (user) {
            result = {
            status: 200,
            data: user,
            };
        } else {
            res.status(404).json({ error: "User not found" });
        }
        res.json(result);
    });

    app.listen(port,() => console.log(`Server running on port ${port}`))
