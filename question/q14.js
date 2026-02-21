    db.employees.find(
    {},
    {name:1,dept:"$department"} //rename department to dept
)

db.users.insertOne(
    {
        name:"Yash",
        age:24,
        address:{addr1:"123 Main St", city:"New York", state:"OH",zip:"10001"},
    }
)
db.users.insertMany(
    [
        {name:"Alice", age:30, address:{addr1:"456 Oak St", city:"Los Angeles", state:"CA",zip:"90001"}},
        {name:"Bob", age:28, address:{addr1:"789 Pine St", city:"Chicago", state:"IL",zip:"60007"}},
        {name:"Charlie", age:35, address:{addr1:"321 Maple St", city:"Houston", state:"TX",zip:"77001"}}
    ]
)
db.users.find({},
    {
        name:1,
        "$address.city":1,
    }
)
db.users.find({},
    {
        name:1,
        city:"$address.city",
    }
)
db.users.find({},
    {
        name:1,
        city:"$address.city",
        state:"$address.state"
    }
)
db.users.updateMany(
    {},
    {$push:{skills:["java","python"]}}
)
db.users.updateMany(
    {},
    {$set:{skills:["java","python"]}}
)

db.users.updateOne(
    {name:"Yash"},
    {$addToSet:{skills:[".net"]}}
)

db.users.updateOne(
    {name:"Yash"},
    {$addToSet:{skills:{$each:["c++","react"]}}}
)

db.users.aggregate(
    [
        {$project:{
            _id:0,
            name:1,
            skills:1
        }},
        {$unwind:"$skills"}
    ]
)
