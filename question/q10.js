db.employees.find(
    {email:"brian@gmail.com"}
).explain("executionStats")


// createIndex(...)->Create a search helper for faster finding
// { email: 1 }-> Make an index on the email field
// 1 = Ascending order (A → Z)
// (-1 would mean Descending Z → A)
db.employees.createIndex({email:1})
db.employees.getIndexes()
db.employees.dropIndex({email:1})
db.employees.dropIndex("email_1")



db.employees.find({},{_id:0,name:1}).sort({name:1})
db.employees.find({},{_id:0,name:1}).sort({name:-1})

db.employees.insertMany([
  { name: "Amit", email: "amit@gmail.com" },
  { name: "Riya", email: "riya@gmail.com" },
  { name: "Karan", email: "karan@gmail.com" },
  { name: "Neha", email: "neha@gmail.com" }
])


// it will short correctly even if there is uppercase or lowercase letters
db.employees
  .find({}, { _id: 0, name: 1 })
  .collation({ locale: "en", strength: 2 })
  .sort({ name: 1 })