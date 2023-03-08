const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json()); 


app.get('/', (req, res) => {
    res.json({
        message: 'Server started'
    })
})

const PORT = process.env.PORT || 8000; 

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);

    mongoose.connect(
        'mongodb://localhost:27017/onlinejudge', 
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        }
    )
        .then(() => console.log('MongoDB Connected'))
        .catch(err => console.log(err));  
});



