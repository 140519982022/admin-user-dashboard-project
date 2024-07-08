const express = require('express')
const server = express()

const databaseConnection = require('./config/database');
var cors = require('cors')
server.use(express.json());
server.use(cors());
server.use(express.urlencoded({ extended: true }));
require('./src/Routes/backend/categories.routes')(server);



// server.get('/',(request,response)=>{

//     var obj = [
//         {
//             'fname':'nikki',
//             'lname':'kose'
//         },
//         {
//             'fname':'nikki',
//             'lname':'kose'
//         },{
//             'fname':'nikki',
//             'lname':'kose'
//         }
//     ]

//     response.send("SERVER WORKING FINE!!!!");

// });

// server.get('*',(request,response)=>{

//     response.send("Page Not Found");

// });


// server.post('/add-category',(request,response)=>{

//     response.send("category added successfully!!!!");

// });


// server.get('/view-category',(request,response)=>{

//     var obj = [
//         {
//             'status':true,
//             'message':'category fetch successfully!!!!',
//             'data':''
//         }
//     ]

//     response.send(obj);

// });

// server.put('/update-category',(request,response)=>{

//     var obj = [
//         {
//             'status':true,
//             'message':'category update successfully!!!!',
//             'data':''
//         }
//     ]

//     response.send(obj);

// });

// server.delete('/delete-category',(request,response)=>{

//     var obj = [
//         {
//             'status':true,
//             'message':'category delete successfully!!!!',
//             'data':''
//         }
//     ]

//     response.send(obj);

// });

server.listen('4000');