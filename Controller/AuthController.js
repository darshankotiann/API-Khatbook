const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

let posts = [{
    email: "mrudulkolambe02@gmail.com",
    title: "Title"
},{
    email: "yash@gmail.com",
    title: "Some title"
}];

const login = (req, res) => {
    try {
        if(req.body.mobileNo){
            const token = jwt.sign({email}, `${process.env.ACCESS_TOKEN_SECRET}`
            ,{ expiresIn: "50s" }
            )
            res.send(token)
        }
    } catch (error) {
        res.send(error.message);
    }
};

const fetchPosts = (req, res) => {
    let userPosts = mongoose.filter((data) => {
        return data.email === req.user.email
    })
    res.send(userPosts)
};

const handleToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const data = jwt.verify(token, `${process.env.ACCESS_TOKEN_SECRET}`)
        if(data){
            req["user"] = data
            console.log(req.user);
            next()
        }
    } catch (error) {
        res.send(error.message)
    }
};

module.exports = { fetchPosts, login, handleToken };