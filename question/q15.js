db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        grade:{
            // $cond:[{},"",""]
            $cond:[{ $gte: ["$salary", 7000] }, "A", "B"]
        }
    }}
])

db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        salary:1,
        grade:{
            // $cond:{if:{},then:"",else:""}
            $cond:{if:{ $gte: ["$salary", 7000] }, then:"A", else:"B"}
        }
    }}
])

db.employees.aggregate([{
    $project:{
        _id:0,
        name:1,
        salary:1,
        grade:{
            // $switch:{branches:[{case:{},then:""},{case:{},then:""}],default:""}
            $switch:{
                branches:[
                    {case:{ $gte: ["$salary", 7000] }, then:"A"},
                    {case:{ $gte: ["$salary", 5000] }, then:"B"}
                ],
                default:"C"
            }
        }
    }
}])




db.orders.insertOne({
    empid:ObjectId('698177d344dfa155734a1328'),
    product:"laptop",
    quantity:2,
    price:80000
})

db.orders.insertOne({
    empid:ObjectId('698177d344dfa155734a1328'),
    product:"computer",
    quantity:3,
    price:90000
})

db.orders.insertOne({
    empid:ObjectId('698177fb44dfa155734a132a'),
    product:"computer",
    quantity:3,
    price:90000
})