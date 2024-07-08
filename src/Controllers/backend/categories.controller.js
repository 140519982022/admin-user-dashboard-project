const mongodb = require('mongodb')
const dbConnection = require('../../../config/database');



exports.create = async(request,response)=>{
    const db = await dbConnection();
    
    const categories = db.collection('course_categories');
    // console.log(request.body)
    
    var result = await categories.insertOne(request.body);
    
    var data = {
        'status':true,
        'message':'course added successfully!!!!',
        'data': result
    }
    
    response.send(data);

}



exports.view = async(request,response) =>{

    const db = await dbConnection();

    const categories = db.collection('course_categories');

    // to fetch all recorders from this collection
    // const result = await categories.find().toArray();

    // find those record whos course_category have hmm value
    // const result = await categories.find({course_name:'PHP', price:'60000'}).toArray();

    // get all perticular columns record 
    // const result = await categories.find({},{projection:{course_name:1, price:true}}).toArray();

    // fetch only single record in assending order
    // const result = await categories.findOne();

    // get single record by using id
    const result = await categories.findOne(
        {
            _id: new mongodb.ObjectId(request.query.id)
        }
    );

    var obj = [
        {
            'status':true,
            'message':'category fetch successfully!!!!',
            'data':result
        }
    ]

    response.send(obj);
}

exports.update= async(request,response)=>{

    const db = await dbConnection();

    const categories = db.collection('course_categories');

    // update single record by using id
    // const result = await categories.updateOne(
    //     {
    //         _id: new mongodb.ObjectId(request.body.id)
    //     },
    //     { $set:{
    //         course_name:request.body.name,
    //         price:request.body.price
    //     }

    //     }
    // );

    // update multiple record at a time
    const result = await categories.updateMany(
        {
            course_name:request.body.old_name
        },
        { $set:{
            course_name:request.body.new_name,
            price:request.body.new_price
        }

        }
    );


    var obj = [
        {
            'status':true,
            'message':'course update successfully!!!!',
            'data':result
        }
    ]

    response.send(obj);
}

exports.delete = async(request,response)=>{

    console.log(request.query.id);
    const db = await dbConnection();

    const categories = db.collection('course_categories');

    // delete single record by using id
    const result = await categories.deleteOne(
        {
            // _id: new mongodb.ObjectId(request.params.id) //params not suporting
            _id: new mongodb.ObjectId(request.query.id)

        }
    );

    var obj = [
        {
            'status':true,
            'message':'course deleted successfully!!!!',
            'data':result
        }
    ]

    response.send(obj);
}
