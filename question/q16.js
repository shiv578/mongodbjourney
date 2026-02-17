db.order.aggregate([
    {$project:{
        _id:0,
        product:1,
        quantity:1,
    }}
])

db.order.aggregate([
    {$lookup:{
        from:"employees",
        localField:"empid",
        foreignField:"_id",
        as:"users"
    }}
])


// connect employees(LEFT COLLECTION) with orders(RIGHT COLLECTION)
db.employees.aggregate([
    {$lookup:{
        from:"orders",
        localField:"_id",
        foreignField:"empid",
        as:"orders"
    }},
    {$unwind:"$orders"},
    {$project:{
        name:1,
        product:"$orders.product",
        quantity:"$orders.quantity",
        price:"$orders.price"
    }}
])


db.employees.aggregate([
    {$lookup:{
        from:"orders",
        let:{uid:"$_id"},
        pipeline:[
            {$match:{
                $expr:{$eq:["$empid","$$uid"]}
            },
        },
            {$project:{
            _id:0,
            // empid:0,
            product:1,
            quantity:1,
            price:1
            }
        },
        ],
        as:"orders"
        },
    },
    {$unwind:"$orders"},
    // {$project:{
    //     name:1,
    //     product:"$orders.product",
    //     quantity:"$orders.quantity",
    //     price:"$orders.price"
    // }}
])


// create another collection empdetails  store city and state and join all there employees 
// order and empdetails and print name order and city state

db.empdetails.insertMany([
  {
    empid: ObjectId("698177d344dfa155734a1328"),
    city: "Delhi",
    state: "Delhi"
  },
  {
    empid: ObjectId("698177fb44dfa155734a132a"),
    city: "Mumbai",
    state: "Maharashtra"
  }
])

db.employees.aggregate([
  // JOIN ORDERS
  {
    $lookup: {
      from: "orders",
      localField: "_id",
      foreignField: "empid",
      as: "orders"
    }
  },
  { $unwind: "$orders" },

  // JOIN EMPDETAILS
  {
    $lookup: {
      from: "empdetails",
      localField: "_id",
      foreignField: "empid",
      as: "details"
    }
  },
  { $unwind: "$details" },

  // FINAL OUTPUT SHAPE
  {
    $project: {
      _id: 0,
      name: "$name",
      product: "$orders.product",
      quantity: "$orders.quantity",
      city: "$details.city",
      state: "$details.state"
    }
  }
])
