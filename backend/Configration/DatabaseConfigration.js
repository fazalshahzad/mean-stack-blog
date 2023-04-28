const Package = require("../package.json");
const mongoose= require("mongoose");

mongoose.set('strictQuery', false);

mongoose.connect(`${process.env.MONGO_URI}`,{useNewUrlParser:true,useUnifiedTopology:true},(error,connection)=>{  
    if(!error){
        console.log(`\nMongoDb connected SucessFully at MongoAtlas WithDatabBase\n`);
        console.log(`\nYour ap has following Dependencies\n`);
        for(let dependencies in Package.dependencies){      //loop in object keys so use for in loop
            console.log(dependencies);
        }
    }
    else {
        console.log(`Error:Not Connected to the MongoDb` + error)
    }
})
