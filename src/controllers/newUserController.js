const { count } = require("console")
const newUserModel= require("../models/newUserModel")

const createNewUser= async function (req, res) {
    let data= req.body

    let savedData= await newUserModel.create(data)
    res.send({msg: savedData})
}


     
module.exports.createNewUser= createNewUser
