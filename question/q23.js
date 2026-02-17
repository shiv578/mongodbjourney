// create folder mongo - replica
// create folder - usa ,uk,india
// inside mongo-replica folder

// not port will be there. ip addres of the server for original server creation 
// mongod -replSet rs1 --dbpath "D:\mongo-replica\usa" --port 27018
// mongod -replSet rs1 --dbpath "D:\mongo-replica\uk" --port 27019
// mongod -replSet rs1 --dbpath "D:\mongo-replica\india" --port 27020

// mongosh --port 27018
rs.initiate({
    _id:"rs1",
    members:[
        {_id:0,host:"localhost:27018"},
        {_id:1,host:"localhost:27019"},
        {_id:2,host:"localhost:27020"}
    ]
})

// rs.config()
// rs.status()


// new tab
// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"
//  --username Mrbean --password Kohjli1234@"
db.users.insertOne({
    name:"shubham",
    age:21
})
db.users.insertOne({
    name:"mrbean",
    age:22
})

// db.getMongo().setReadPref("secondary")



// use hdfcbank

db.customers.insertOne({_id:"c1",name:"shubham",balance:5000})
db.customers.insertOne({_id:"c2",name:"john",balance:7000})



// insert 100 users and age 
for(let i=1;i<=100;i++){
    db.users.insertOne({name:"user"+i,age:20+i})
}   

