const axios = require("axios");

exports.homeRoute = (req,res)=>{

    axios.get(`http://localhost:5005/api/users`)
    .then( result => {
        const sorted_data = result.data;
        res.render("index", {users: sorted_data}); 
    })
    .catch( err =>{
        res.send(err);
    })
}

exports.addUserRoute = (req,res) => {
    res.render("add_user");
};

exports.updateUserRoute = (req,res) => {
    console.log(req.query.id);
    axios.get(`http://localhost:5005/api/users`, {params: {id: req.query.id}})
    .then( result => {
        res.render("update_user", {user : result.data});
    })
    .catch( err => {
        console.log(err);
    })
};