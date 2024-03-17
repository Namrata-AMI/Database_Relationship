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
};


const orderSchema = new Schema ({
    item:String,
    price:Number,
});

const customerSchema = new Schema({
    name:String,
    order:[{
        type:Schema.Types.ObjectId,
        ref:"order",
    }]
})

const order = mongoose.model("Order",orderSchema);
const customer = mongoose.model("Customer",customerSchema);

///////////add new customer fnx//////////
/*const addCustomer = async()=>{
    let cust2 = new customer({
        name:"swati",
    });

    let order1 = await order.findOne({item:"samosa"});

    cust2.order.push(order1);

    let res = await cust2.save();
    console.log(res);
}

addCustomer();*/


const findCustomer = async()=>{
    let res = await customer.find({}).populate("order");
    console.log(res);

}

findCustomer();















