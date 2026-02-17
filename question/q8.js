db.employees.find({
    department:{$in:["HR","IT"]}
})
db.employees.find({
    department:{$nin:["HR","IT"]}
})

db.employees.updateOne({
    email:"gamil.com"},
    {$set: {department:"Admin"}
})


db.createCollection("students")
db.students.renameCollection("learners")
db.learners.drop()
// show collections