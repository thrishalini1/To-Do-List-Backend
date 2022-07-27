const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const ObjectID = mongodb.ObjectID

const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())
console.log(id)
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString().length)


// MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     const db = client.db(databaseName)

//     // console.log('connected correctly!')



// // //     db.collection('users').insertOne({
// // //         name: 'mohit',
// // //         age: 19
// // //     }, (error, result) => {
// // //         if (error) {
// // //             return console.log('Unable to insert user!')
// // //         }
// // //         console.log(result.ops)
// // //     })
// // // })
// // db.collection('users').insertMany( [
// //     {
// //         name: 'Ajai',
// //         age: 20
// //     }, {
// //         name: 'Mohit',
// //         age: 18
// //     }
// // ], (error, result) => {
// //     if (error) {
// //         return console.log('Unable to insert documents!')
// //     }
// //     console.log(result.ops)
// // })
// db.collection('tasks').insertMany( [
//     {
//         description: 'Collect the Money from Mylapore',
//         completed: true
//     }, {
//         description: 'Install react native',
//         completed: false
//     }, {
//         description: 'Sell the scooty',
//         completed: false
//     }
// ], (error, result) => {
//     if (error) {
//         return console.log('Unable to insert tasks!')
//     }
//     console.log(result.ops)
// })

// db.collection('users').insertOne({
//    _id: id,
//     name: 'Thrisha',
//     age: 17
// }, (error, result) => {
//     if (error) {
//         return console.log('Unable to insert user!')
//     }
//     console.log(result.ops)
// })
// MongoClient.connect(connectionURL, { useNewUrlParser: true}, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     // console.log('connected correctly!')

//     const db = client.db(databaseName)

//     // db.collection('users').find({ age: 52 }).toArray (error, user) => {
//     //     if (error) {
//     //         return console.log('Unable to fetch')
//     //     }
//     //     console.log(user)
//     // })
//     db.collection('users').find({ age: 52}).toArray((error, user) => {
//         console.log(user)
//     })

//     // db.collection('users').find({ age: 52}).count((error, count) => {
//     //     console.log(count)
//     // })

//     // db.collection('tasks').findOne({_id: new ObjectID("6033570ef2649a04ce03b440")}, (error, task) => {
//     //     console.log(task)
//     // })

//     // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
//     //     console.log(tasks)
//     // })

// db.collection('users').find({ age: 52}).toArray((error, user) => {
//         console.log(user)
//     })

//     db.collection('users').find({ age: 52}).count((error, count) => {
//         console.log(count)
//     })

//     db.collection('tasks').findOne({_id: new ObjectID("6037bb8453a54d11b8768d5e")}, (error, task) => {
//         console.log(task)
//     })

//     db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
//         console.log(tasks)
//     })
//     MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//         if (error) {
//             return console.log('Unable to connect to database!')
//         }
    
//         const db = client.db(databaseName)
//     db.collection('users').deleteMany({
//             age: 19
//         }).then((result) => {
//             console.log(result)
//         }).catch((error) => {
//             console.log(error)
//         })
    
//         db.collection('tasks').deleteOne({
//             description: "Clean the office"
//         }).then((result) => {
//             console.log(result)
//         }).catch((error) => {
//             console.log(error)
//         })
//     })
    
// })
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

//     // const updatePromise = db.collection('users').updateOne({
//     //     _id: new ObjectID("60335304f115ae0499cf2157")
//     // }, {
//     //     $set: {
//     //         name: "Babu"
//     //     }
//     // })
//     // updatePromise.then((result) => {
//     //     console.log(result)
//     // }).catch((error) => {
//     //     console.log(error)
//     // })

    
    // db.collection('users').updateOne({
    //     _id: new ObjectID("6033c829dc022555783c6e01")
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    db.collection('tasks').updateMany({
        completed: false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    })
 })
