
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
    collection.find().toArray((err, results) => {
        if(err) {
            console.log(err);
            process.exit(0);
        }
        //console.log(results);
        console.table(results);
        db.close();
    });
});
