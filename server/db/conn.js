const mongoose = require('mongoose')
const url = "mongodb+srv://gov:gov@cluster0.1sbl41m.mongodb.net/gov?retryWrites=true&w=majority";




mongoose.connect(url).then(() => {
    console.log("db connected");
}).catch((err) => {
    console.log(err);
})
