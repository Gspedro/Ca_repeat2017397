const mongoose = require ('mongoose');
const URI="mongodb+srv://dbUser:1234@cluster0.km3us.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async()=>{ 

await mongoose.connect(URI,{ useNewUrlParser: true });
console.log('db connected.');


}
module.exports =connectDB;
