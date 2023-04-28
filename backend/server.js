const express = require("express");// Only ImPort Express frameWork 
const cors = require("cors");
const app = express();//All the Classes of Express FrameWork in App now you can get any class with (.) bracket is use because its a class
const ApplicationConfig = require ('./Configration/LoadMyConfig-Env-file')
const ResponseOfMyDataBaseConnection = require("./Configration/DatabaseConfigration");
const PORT = process.env.PORT||5050;
//Block Dependencies


//Block Start Initialize the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());

app.use('/assets',express.static('Assets')); //Route in image path
//Block Start Initialize the app


//Start Block Setting th Headers for your Application
app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next(); //if nothing of the response sent back so next() means other route
});
//End Block Setting the Header for your Application


//Now calling (📱📱) My Routes
const ProductManagementRouter = require("./route/productmanagementroute");
const AdminmanagementRouter = require ('./route/AdminmanagementRoute');
const UsermanagementRouter = require ('./route/userMangementRoute')
const PaymentManagement = require('./route/PaymentManagementRoute');
/*******************************Using Routes*************/
app.use("/ProductManagement",ProductManagementRouter);
app.use('/AdminmanagementRouter',AdminmanagementRouter);
app.use('/UsermanagementRouter',UsermanagementRouter)
app.use('/PaymentManagement',PaymentManagement)
/*******************************Using Routes*************/

// Set after calling routes because its interpreter language......
//Start Block Checking Routes As express not found Url not Founded we need to do it explicitly 
app.use((req, res, next) => {
    const error = new Error('Url not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        }
    })
});
//End Block Checking Routes As express not found Url not Founded we need to do it explicitly 

app.listen(PORT,()=>{
    console.log(`Your Server has been launched (🚀🚀🚀🚀) ${PORT}`);
    
});
