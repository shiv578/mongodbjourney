// 1.configSrvrs
// 2.routers
// 3.clients



// create folder dbshards
// create folder conf ,confr, s1, s1r, s2, s2r inside dbshards folder

// mongod --configsvr --replSet cf --dbpath "D:\dbshards\cf" --port 27018
// mongod --configsvr --replSet cf --dbpath "D:\dbshards\cfr" --port 27019

// mongosh --port 27018
rs.initiate({
    _id:"cf",
    members:[
        {_id:0,host:"localhost:27018"},
        {_id:1,host:"localhost:27019"}
    ]
})
// rs.config()
// rs.status()


// mongod --shardsvr --replSet s1 --dbpath "D:\dbshards\s1" --port 27020
// mongod --shardsvr --replSet s1 --dbpath "D:\dbshards\s1r" --port 27021
// mongosh --port 27020
rs.initiate({
    _id:"s1",
    members:[
        {_id:0,host:"localhost:27020"},
        {_id:1,host:"localhost:27021"}
    ]
})
// rs.config()
// rs.status()



// mongod --shardsvr --replSet s2 --dbpath "D:\dbshards\s2" --port 27022
// mongod --shardsvr --replSet s2 --dbpath "D:\dbshards\s2r" --port 27023
// mongosh --port 27022
rs.initiate({
    _id:"s2",
    members:[
        {_id:0,host:"localhost:27022"},
        {_id:1,host:"localhost:27023"}
    ]
})
// rs.config()
// rs.status()



// new tab
// mongos --configdb cf/localhost:27018,localhost:27019 --port 27050
// new tab
// mongosh --port 27050
sh.addShard("s1/localhost:27020,localhost:27021")
sh.addShard("s2/localhost:27022,localhost:27023")

sh.status()
// use icici
sh.enableSharding("icici")
sh.shardCollection("icici.customers",{_id:1})
sh.getShardedDataDistribution()
db.customers.find() //empty


// use config
db.settings.updateOne(
    {_id:"chunksize"},
    {$set:{value:1}},
    {upsert:true}
)

db.customers.insertOne({
    _id:1,
    name:"shubham",
    balance:5000
})

for(let i=2;i<=50000;i++){
    db.customers.insertOne({
        _id:i,
        name:"customer"+i,
    })
}
for(let i=2;i<=100000;i++){
    db.customers.insertOne({
        _id:i,
        name:"customer"+i,
    })
}

// use config
db.setting


// note-these 6 folder represent server 
// location in 6 different location or countries
