db.employees.find({
    name:"John Smith"

})

db.employees.find({
    name:{$regex:"John"}
})

db.employees.find({
    name:{$regex:"Smith"}
})

db.employees.find({
    name:{$regex:"john", $options:"i"}
})

db.employees.find({
    name:{$regex:"^John", $options:"i"}
})

db.employees.find({
    name:{$regex:"^J", $options:"i"}
})

db.employees.find({
    name:{$regex:"^M", $options:"i"}
})

db.employees.find({
    name:{$regex:"h$", $options:"i"}
})

