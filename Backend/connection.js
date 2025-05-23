const mongoose=require('mongoose')
const url="mongodb://localhost:27017/nageshProject"
mongoose.connect(url);
console.log("db Connected");
