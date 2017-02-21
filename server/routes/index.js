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







exports.pesan = function (req, res) {

    db.findOne({
        _id: 'sLWMVcoGGCnoLtQ7'
    }, function (err, doc) {
        
        res.json(doc);

    });


}


exports.test = function (req, res) {

   		console.log("masuk");
     db.insert({name : req.body});

};




