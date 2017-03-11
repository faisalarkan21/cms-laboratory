var Datastore = require('nedb'),
    db = new Datastore({filename: './database/database-cms', autoload: true});

// var people = []; var scott = {     name: 'Scott Robinson',     age: 28,
// twitter: '@ScottWRobinson' }; var elon = {     name: 'Elon Musk',     age:
// 44,     twitter: '@elonmusk' }; var jack = {     name: 'Jack Dorsey', age:
// 39,     twitter: '@jack' }; people.push(scott, elon, jack);

//

// var people = []; var scott = {     name: 'Scott Robinson',     age: 28,
// twitter: '@ScottWRobinson' }; var elon = {     name: 'Elon Musk',     age:
// 44,     twitter: '@elonmusk' }; var jack = {     name: 'Jack Dorsey', age:
// 39,     twitter: '@jack' }; people.push(scott, elon, jack);

exports.pesan = function (req, res) {

    db
        .insert([
            {
                nama: "Faisal"
            }, {
                nama: "orang"
            }
        ], function (err, newDocs) {

            console.log(newDocs);
            res.send("Masuk");

        });

}

exports.login = function (req, res) {

    console.log("Masuk");

    var idAdmin = req.body.IdAdmin;
    var password = req.body.password;
    var IsAdmin = req.body.IsAdmin;

    console.log(idAdmin);
    console.log(password);
    console.log(IsAdmin);

    db.find({
        Admin: req.body.IdAdmin
    }, function (err, docs) {

        if (err) {
            console.log(err);
        }

        console.log(docs);

        if ((idAdmin === "") && (password === "")) {

            console.log("Kaga ada!");

            var respons = {
                Id: "Tolong Masukan Id..",
                password: "Tolong Masukan Password..",
                SnackPesan: "Tolong isi form login dengan benar :)"
            }

            res.json(respons);

        } else if (docs.length < 1) {

            console.log("Kaga ada!");

            var respons = {
                Id: "Username anda tidak ditemukan..",
                password: "Password anda Salah..",
                SnackPesan: "Username anda tidak ditemukan :)"
            }

            res.json(respons);

        } else if ((idAdmin === docs[0].Admin) && (password === docs[0].passwordAdmin) && (IsAdmin === true)) {

            if (docs[0].statusAdmin === false) {

                console.log("Tolong login sebagai pengajar :)");
                var respons = {
                    SnackPesan: "Tolong login sebagai pengajar " + idAdmin + " :)"
                }

                res.json(respons);

            } else if (docs[0].statusAdmin === true) {

                const varToken = {
                    token: Math
                        .random()
                        .toString(36)
                        .substring(7)

                }

                console.log("anda masuk sebagai admin :)");
                var respons = {
                    SnackPesan: "Anda masuk sebagai admin " + idAdmin + " :)",
                    Admin: docs[0].statusAdmin,
                    Token:varToken.token
                }

                res.json(respons);
            }

        } else if ((idAdmin === docs[0].Admin) && (password === docs[0].passwordAdmin) && (IsAdmin === false)) {

            if (docs[0].statusAdmin === true) {

                console.log("Tolong Masuk Sebagai Admin !");

                var respons = {
                    SnackPesan: "Tolong Masuk Sebagai Admin  " + idAdmin + " :)"
                }

                res.json(respons);

            } else if (docs[0].statusAdmin === false) {

                //token

                console.log("Anda Masuk sebagai Pengajar !");

                var respons = {
                    SnackPesan: "Anda Masuk sebagai Pengajar " + idAdmin + " :)",
                    Admin: docs[0].statusAdmin
                }

                res.json(respons);

            }

        } else {

            var respons = {
                password: "Password anda salah ..",
                SnackPesan: "Tolong Periksa kembali passwordnya :)"
            }

            res.json(respons);

        }

    });

}

// exports.simpan = function (req, res) {     var nama = req.body.nama;
// db.insert({ nama: nama }, function (err, newDocs) {     console.log(newDocs);
//     res.json(newDocs); }); }

exports.simpan = function (req, res) {

    var namaLab = req.body.NamaLab;
    var namaAdmin = req.body.NamaAdmin;
    var passwordAdmin = req.body.PasswordAdmin;
    var status = false;
    console.log("Masuk Gan!");

    db.insert({
        Lab: namaLab,
        Admin: namaAdmin,
        passwordAdmin: passwordAdmin,
        statusAdmin: status
    }, function (err, newDocs) {

        console.log(newDocs);
        res.json(newDocs);
    });

}

exports.test = function (req, res) {

    const testing = {

        nama: "faisal arkan",
        job: "System Enginer"

    }

    res.json(testing);

};
