db.createCollection("vendors",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name","age"],    
            properties:{
                name:{bsonType:"string"},
                age:{bsonType:"int",minimum:18}
            }
        }
    }
})

db.vendors.drop()

db.vendors.insertOne({
    name:"john",
    age:21
})

db.vendors.insertOne({
    age:21
})

db.vendors.insertOne({
    name:65789,
    age:"gdgbg"
})


