const mongoose = require("mongoose");
const {Schema} =  mongoose;

main()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
const 
userSchema = new Schema ({
    username:String,
    addresses:[
        {
            _id:false,
            loaction:String,
            city:String,
        },
    ]
});

const User = mongoose.model("User",userSchema);

// adding user data //
const addUsers = async()=>{
    let user1 = new User({
    username:"shweta",
    addresses:[
        {
        loaction:"2210 baker street",
        city:"london",
    },
],
});
user1.addresses.push({loaction:"b34 wallstreet", city:"london"});    // add more address to user1//
let res = await user1.save();
console.log(res);
};


addUsers();



