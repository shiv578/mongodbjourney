db.employees.find({location:1})

db.employees.updateOne({email:"mike@gmail.com"},
{$push:{location:"AZ"}}
)

db.employees.updateOne({email:"mike@gmail.com"},
{$pull:{location:"1"}}
)


// create a new field skill and add python as array

db.employees.updateOne(
    {},
    {$push:{skills:"python"}}
)

db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$push:{skills:".Net"}}
)

// pop only remove first or last element from array
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pop:{skills:1}}
)
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pop:{skills:-1}}
)

// remove 2nd index skill from cathy
db.employees.updateOne(
  { email: "cathy@gmail.com" },
  {
    $unset: { "skills.2": null },
    $pull: { skills: null }
  }
)

// it will add only if skill is not present
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$addToSet:{skills:"java"}}
)

// it will remove last matching element from array
db.employees.updateOne(
    {email:"cathy@gmail.com"},
    {$pull:{skills:"java"}}
)

