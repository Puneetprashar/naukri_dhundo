const mongoose = require('mongoose');

mongoose.connect('mongodb://21mc3012:<27Sep2003@>@cluster0.2dfaior.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));