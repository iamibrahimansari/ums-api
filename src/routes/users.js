const express = require('express');
const router = express.Router();
const UserModel = require('../models/Users');

router.get('/users', async (req, res) =>{
    try{
        const response = await UserModel.find({});
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

router.post('/create', async (req, res) =>{
    try{
        const user = new UserModel(req.body);
        const response = await user.save();
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

router.put('/update', async (req, res) =>{
    try{
        const {_id, name, email, profession, gender} = {...req.body};
        const response = await UserModel.replaceOne({_id}, {name, email, profession, gender});
        res.json(response)
    }catch(error){
        console.error(error);
    }
})

router.delete('/delete/:id', async (req, res) =>{
    try{
        const response = await UserModel.deleteOne({_id: req.params.id});
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

router.get('/:id', async (req, res) =>{
    try{
        const response = await UserModel.findOne({_id: req.params.id});
        res.json(response);
    }catch(error){
        console.error(error);
    }
})

module.exports = router;