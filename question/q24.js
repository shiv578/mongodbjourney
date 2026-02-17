// login into replica set
// created hdfcbank 
// inserted shubham and john in customers collection
const session = db.getMongo().startSession()
const customersCollection = session.getDatabase("hdfcbank").customers
session.startTransaction()
customersCollection.updateOne({_id:"c1"},{$inc:{balance:-1000}})
customersCollection.updateOne({_id:"c2"},{$inc:{balance:1000}})
session.commitTransaction()
// i want to cancel the transaction so i will use abortTransaction not commitTransaction
session.abortTransaction()
session.endSession()





// display courses and modules collection
db.courses.aggregate([{
    $lookup: {
      from: "modules",
      localField: "_id",
      foreignField: "courseId",
      as: "modules"
    }
  },
  {
    $project: {
      name: 1,
      modules: 1
    }
  }
])


db.courses.aggregate([{
    
    $lookup:{
        from:"modules",
        let:{courseId:"$_id"},
        pipeline:[
            {$match:{$expr:{$eq:["$courseId","$$courseId"]}}},

        {$lookup:{
            from:"lessons",
            let:{moduleId:"$_id"},
            pipeline:[
                {$match:{$expr:{$eq:["$moduleId","$$moduleId"]}}}
            ],

            as:"lessons"
        }},
        ],
        as:"modules"
    }
}])

