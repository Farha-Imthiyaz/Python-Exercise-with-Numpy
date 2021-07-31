var ObjectId = require('mongodb').ObjectID;
const mongo = require('mongodb');
const url = "mongodb://localhost:27017";

mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err, db) => {
    if(err) {
       console.log(err);
       process.exit(0);
    }
    var dbo = db.db('assignment');
    console.log('database connected!');
    var collection = dbo.collection('temperature');
    collection.findOne({_id: new ObjectId("5e1aef1149583b2cafb40036")}, (error, results) => {
        if (error) {
            return console.log('Unable to fetch')
       }
        console.table(results)
        db.close();
    })
})
