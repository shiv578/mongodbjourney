// pipeline to find the employee with email "
// A pipeline is a step-by-step data processing system.
// “The aggregation pipeline processes documents through multiple stages,
//  where each stage transforms the data and passes it to the next stage.”
// Data → Step 1 → Step 2 → Step 3 → Final Result
// db.collection.aggregate([
//   { Stage1 },-->>pull data from collection and pass to next stage
//   { Stage2 },-->display only required fields and pass to next stage
//   { Stage3 } -->
// ])

db.employees.aggregate(
    [
        {$match:{department:'HR'}} // Stage 1: Filter documents to include only those in the 'HR' department    ]

    ]
)
db.employees.aggregate(
    [
        {$project:{name:1}}
        // {$project:{_id:0,name:1}}

    ]
)

db.employees.aggregate(
    [
        {$project:{_id:0,department:0,salary:0 }}

    ]
)
// it will run
db.employees.find(
  {},{_id:1,department:0,salary:0 ,date:0,skills:0}
)

// not will run
db.employees.find(
  {},{_id:0,department:1,salary:0 ,date:0,skills:0}
)


db.employees.aggregate(
    [
        {$sort:{name:1}}
    ]
)

db.employees.aggregate(
    [
        {$limit:1}
    ]
)

db.employees.aggregate(
    [
        {$skip:1}
    ]
)

