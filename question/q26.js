// user management
// use admin
db.createUser({
    user:"admin",
    pwd:"admin",
    roles:[{role:"root",db:"admin"}]
})

// mongosh --username user1 -authenticationDatabase mystudent
// ask password:- user1
// go in mydatabase then run
db.createUser({
    user:"user1",
    pwd:"user1",
    roles:[{role:"read",db:"mystudent"}]
})

// mongosh --username user2 -authenticationDatabase mystudent
// ask password:- user2
db.createUser({
    user:"user2",
    pwd:"user2",
    roles:[{role:"read",db:"mystudent"}]
})


// step1:- mongosh --username admin -authenticationDatabase admin
// step2:- use database which you want to acces (use mystudent)
// step3:- create users
db.createUser({
    user:"user2",
    pwd:"user2",
    roles:[{role:"read",db:"mystudent"}]
})
// step4:- exit
// step5:- mongosh --username user1 -authenticationDatabase mystudent
// step6:- use database
// step7:- run

db.getUsers()
db.dropUser("user2")

// connection  string........................
    // if we use compass
    // mongodb://user1:password@localhost:27017/?authSource=mystudent

    // for admin
    // mongodb://admin:password@localhost:27017/?authSource=admin

    10.10.10.10 - mongodb
    10.12.100.1 - node js app
    mongosh "mongodb://10.10.10.10:27017"
    mongosh "mongodb://user1:user1@10.10.10.10:27017/?authSource=mystudent"
    mongosh "mongodb://admin:admin@10.10.10.10:27017/"

