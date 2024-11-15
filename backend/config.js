const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mdnurullahcse2021:CIQsV86iydk6TrnA@cluster0.ovr60.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})