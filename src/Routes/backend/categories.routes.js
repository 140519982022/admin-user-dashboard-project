const express = require('express')
const categories = require('./../../Controllers/backend/categories.controller')

module.exports=app=>{
    var route=express.Router();

    route.get('/',(request,response)=>{
    
        response.send("server working fine!!!!!");
    
    });
    
    route.post('/add',categories.create);

    route.get('/view',categories.view);
    
    route.put('/update',categories.update);

    route.delete('/delete',categories.delete);

    route.get('*',(request,response)=>{
    
        response.send("Page Not Found");
    
    });

    app.use('/api/backend/categories',route);

}
