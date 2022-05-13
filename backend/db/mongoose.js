const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongoose.set('useNewUrlParser' , true);
mongoose.connect('mongodb://localhost:27017/planingDb').then(() => {
    console.log("Connected");
}).catch((e) => {
    console.log("Not Connected");
    console.log(e);
});

//mongoose.set('useCreateIndex' , true);
//mongoose.set('useFindAndModify' , false);

module.exports = {
    mongoose
};

