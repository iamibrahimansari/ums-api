const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./src/routes/users');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());
app.use('/user', userRouter);

const dbConnection = async () =>{
    try{
        await mongoose.connect(
            `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@user-management-db.mtwlz3w.mongodb.net/user-management-db?retryWrites=true&w=majority`
        )
        console.log('Database Connected');
        await app.listen(PORT, () => console.log('Server is running on port ' + PORT));
    }catch(error){
        console.log(`DB Connection Error: ${error.message}`);
    }
}

dbConnection();