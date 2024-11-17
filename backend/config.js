const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://mdnurullahcse2021:7Acx7l2iN2RSgwl8@naanmudhalavanproject.cg7oi.mongodb.net/?retryWrites=true&w=majority&appName=NaanMudhalavanProject")
.then(()=>{
   console.log("connected to mongodb")
})