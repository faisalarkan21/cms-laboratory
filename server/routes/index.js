


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







exports.pesan = function (req, res) {

db.insert([{ nama: "Faisal" }, { nama: "orang" }], function (err, newDocs) {
    
    console.log(newDocs);
    res.send("Masuk");

});

}


exports.ambil = function (req, res) {

db.find({ nama: 'Faisal' }, function (err, docs) {
  

    res.send(docs);

});

}



// exports.simpan = function (req, res) {

//     var nama = req.body.nama;

//     db.insert({ nama: nama }, function (err, newDocs) {
    
//     console.log(newDocs);
//     res.json(newDocs);
// });


// }




exports.simpan = function (req, res) {

    var nama = req.body.nama;

    db.insert({ nama: nama }, function (err, newDocs) {
    
    console.log(newDocs);
    res.json(newDocs);
});


}





exports.test = function (req, res) {

		var user_id = req.body.nama;

   		res.send("nama lau : " + user_id);

};


