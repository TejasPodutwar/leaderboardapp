const User = require("../model/user");

const create_user = (req,res) => {

    const newUser = new User(req.body);
    newUser.save()
    .then( (result) => {
        console.log("Data saved to the database successfully!!");
        res.redirect("/");
    })
    .catch( (err) => {
        console.log("Unable to addd user");
        console.log(err);
        alert("Invalid Data!!\nTry Again!!");
        res.redirect("/add_user");
    })
};

const find_user = (req,res) => {
    
    if(req.query.id){

        const id = req.query.id;
        User.findById(id)
        .then(result =>{
            if(!result)     res.send({message: "User not found!!"});
            else            res.send(result);
        })
        .catch( err =>{
            res.send({message: "Unable to find the user"});
        })
    }
    else{
        User.find().sort({score:-1})
        .then( result => {
            res.send(result);
        })
        .catch( err => {
            console.log("Error Occurred!!");
            console.log(err);
        })
    }

};

const update_user = (req,res) => {
    
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then( result => {
        if(!result){
            console.log("User not found");
            res.send("User not found");
        }
        else{
            console.log("User data updated!!");
            res.send(result);
        }
    })
}

const delete_user = (req,res) => {
    
    const id = req.params.id;
    User.findByIdAndDelete(id)
    .then( result => {
        
        if(!result){
            res.send("User not found!!");
        }
        else{
            res.send({'message': "User deleted!!"});
        }
    })
}

module.exports = {
    create_user,
    find_user,
    update_user,
    delete_user
}

