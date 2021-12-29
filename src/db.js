const mongoose = require('mongoose')


const dbConnect = () => {
  const db = process.env.DB

  mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, res) => {
    if (!err) {
      console.log("*** CONECCTION CORRECT ***");
    } else {
      console.log("*** CONECCTION ERROR ***");
    }
  })

}

module.exports = { dbConnect }