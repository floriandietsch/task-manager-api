const { MongoClient, ObjectID } = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error){
        return console.log("Unable to connect to database!")
    }

    const db = client.db(databaseName)

    // db.collection("tasks").deleteOne({
    //     description: "Sleep"
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("users").deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("users").updateOne({
    //     _id: new ObjectID("5f183a77a16bb05510696970")
    // }, {
    //     $set: {
    //        name: "Mike" 
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("tasks").updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed:true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection("users").findOne({ name: "Jen" }, (error, user) => {
    //     if (error){
    //         return console.log("Unable to fetch")
    //     }

    //     console.log(user)
    // })

    // db.collection("users").find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection("users").find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection("tasks").insertMany([
    //     {
    //        description: "Go shopping",
    //        completed: false 
    //     }, {
    //         description: "Cook",
    //         completed: true
    //     }, {
    //         description: "Sleep",
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log("Unable to insert documents!")
    //     }

    //     console.log(result.ops)
    // })

})
