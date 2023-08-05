const mongoose = require('mongoose');
const  uri = "mongodb+srv://tomarahul:CFc4tnlTSXNTotKo@tomar.bxjvh9n.mongodb.net/Dictionary-App?retryWrites=true&w=majority"

mongoose.connect(uri).then(()=>{
    console.log("connection succesfull");
}).catch((error)=>{
    console.log("Connection Not successfull", error);
})