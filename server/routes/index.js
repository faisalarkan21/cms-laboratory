var Datastore = require('nedb'),
    db = new Datastore({
        filename: './database/database-cms',
        autoload: true
    });




// var people = [];

// var scott = {  
//     name: 'Scott Robinson',
//     age: 28,
//     twitter: '@ScottWRobinson'
// };

// var elon = {  
//     name: 'Elon Musk',
//     age: 44,
//     twitter: '@elonmusk'
// };

// var jack = {  
//     name: 'Jack Dorsey',
//     age: 39,
//     twitter: '@jack'
// };

// people.push(scott, elon, jack);




// 

// var people = [];

// var scott = {  
//     name: 'Scott Robinson',
//     age: 28,
//     twitter: '@ScottWRobinson'
// };

// var elon = {  
//     name: 'Elon Musk',
//     age: 44,
//     twitter: '@elonmusk'
// };

// var jack = {  
//     name: 'Jack Dorsey',
//     age: 39,
//     twitter: '@jack'
// };

// people.push(scott, elon, jack);







exports.pesan = function(req, res) {

    db.insert([{ nama: "Faisal" }, { nama: "orang" }], function(err, newDocs) {

        console.log(newDocs);
        res.send("Masuk");

    });

}


exports.login = function(req, res) {

    console.log("Masuk");

    console.log(req.body.IdAdmin);
    console.log(req.body.password);
    console.log(req.body.IsAdmin);

    db.find({ Admin: req.body.IdAdmin }, function(err, docs) {

        console.log(docs);

    });

}



// exports.simpan = function (req, res) {

//     var nama = req.body.nama;

//     db.insert({ nama: nama }, function (err, newDocs) {

//     console.log(newDocs);
//     res.json(newDocs);
// });


// }




exports.simpan = function(req, res) {

    var namaLab = req.body.NamaLab;
    var namaAdmin = req.body.NamaAdmin;
    var passwordAdmin = req.body.PasswordAdmin;
    console.log("Masuk Gan!");

    db.insert({ Lab: namaLab, Admin: namaAdmin, passwordAdmin: passwordAdmin }, function(err, newDocs) {

        console.log(newDocs);
        res.json(newDocs);
    });


}





exports.test = function(req, res) {

    var user_id = req.body.nama;

    res.send("nama lau : " + user_id);

};
