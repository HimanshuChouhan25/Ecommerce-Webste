const { json } = require('body-parser');
const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
require('dotenv').config()


const createUser = async (req, res, next) => {
    console.log(req.body);
    let varified = false; let id; let role = "user";

    console.log(req.body)
    const { name, surname, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400).json({ message: "bad Request" })
    }
    const userInfoOld = { ...req.body, varified }
    let safePassword;
    await bcrypt.hash(password, 10).then(hashedPassword => {
        safePassword = hashedPassword
        // Store the hashedPassword in your database
    })
    const userInfo = { ...req.body, varified, password: safePassword, role }
    try {
        const collection = userModel.collection;
        const result = await collection.insertOne(userInfo);
        res.status(200).json({ message: "data inserted successfully", data: result })
        console.log(result);
    } catch (E) { res.status(500).json({ message: E }) }

}

const login = async (req, res, next) => {
    console.log(req.body);
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({ message: "bad Request" })
    }
    try {
        const user = await userModel.find({ email: email })
        // console.log(user);
        if (user.length != 0) {
            const isMatch = await bcrypt.compare(password, user[0].password)

            // Check if password is correct or not And The Response According to that

            if (isMatch) {
                console.log(user[0].role);

                const token = jwt.sign({ userID: user[0]._id, role: user[0].role }, process.env.API_KEY)
                console.log(token);
                res.status(200).json({ msg: "Login Succeed", data: { token: token } })
            }
            else
                res.status(400).json({ msg: "Invalid Email Or Password" })
        } else
            res.status(400).json({ msg: "Invalid Email Or Password" });
    } catch (e) { res.status(500).json({ msg: "internal server Issue" }) }



}

const showAll = async (req, res, next) => {
    try {
        const result = await userModel.find();
        if (result) {
            res.status(200).json({ data: result })
            console.log(result);
        }
    } catch (e) {
        res.status(401).json({ msg: "Some thing went wrong" })
    }


}

module.exports = { createUser, login, showAll }
