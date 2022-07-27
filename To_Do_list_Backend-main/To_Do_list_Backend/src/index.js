// // const express = require('express')

// // const app = express()
// // const port = process.env.PORT || 3000


// // app.listen(port, () => {
// //     console.log('Server is up on port ' + port)
// // })
// // const express = require('express')

// // const app = express()
// // const port = process.env.PORT || 3000
// // app.use(express.json())
// // app.post('/users', (req, res) => {
// //     console.log(req.body) 
// //     res.send('testing!')
// // })

// // app.listen(port, () => {
// //     console.log('Server is up on port ' + port)
// // })

// // Fourth
// // const express = require('express')
// // require('./db/mongoose')
// // const User = require('./models/users')

// // const app = express()
// // const port = process.env.PORT || 3000

// // app.use(express.json())

// // app.post('/users', (req, res) => {
// //     const user = new User(req.body)

// //     user.save().then(() => {
// //         res.send(user)
// //     }).catch((e) => {
// //         res.status(400).send(e)
// //     })
// // })

// // app.listen(port, () => {
// //     console.log('Server is up on port ' + port)
// // })
// //Fifth
// // const express = require('express')
// // require('./db/mongoose')
// // const User = require('./models/users')
// // const Task = require('./models/task')

// // const app = express()
// // const port = process.env.PORT || 3000

// // app.use(express.json())

// // app.post('/users', (req, res) => {
// //     const user = new User(req.body)

// //     user.save().then(() => {
// //         //res.send(user)
// //         res.status(201).send(user)
// //     }).catch((e) => {
// //         res.status(400).send(e)
// //     })
// // })

// // app.post('/tasks', (req, res) => {
// //     const task = new Task(req.body)

// //     task.save().then(() => {
// //        // res.send(task)
// //        res.status(201).send(task)

// //     }).catch((e) => {
// //         res.status(400).send(e)
// //     })
// // })
// // app.get('/users', (req, res) => {
// //     User.find({}).then((users) => {
// //         res.send(users)
// //     }).catch((e) => {
// //         res.status(500).send()
// //     })
// // })
// // app.get('/users/:id', (req, res) => {
// //     const _id = req.params.id

// //     User.findById(_id).then((user) => {
// //         if (!user) {
// //             return res.status(404).send()
// //         }

// //         res.send(user)
// //     }).catch((e) => {
// //         res.status(500).send()
// //     })
// // })
// // app.get('/tasks', (req, res) => {
// //     Task.find({}).then((tasks) => {
// //         res.send(tasks)
// //     }).catch((e) => {
// //         res.status(500).send()
// //     })
// // })

// // app.get('/tasks/:id', (req, res) => {
// //     const _id = req.params.id

// //     Task.findById(_id).then((task) => {
// //         if (!task) {
// //             return res.status(404).send()
// //         }

// //         res.send(task)
// //     }).catch((e) => {
// //         res.status(500).send()
// //     })
// // })

// // app.listen(port, () => {
// //     console.log('Server is up on port ' + port)
// // })
// //seventh
// const express = require('express')
// require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')

// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())

// // app.post('/users', (req, res) => {
// //     const user = new User(req.body)

// //     user.save().then(() => {
// //         //res.send(user)
// //         res.status(201).send(user)
// //     }).catch((e) => {
// //         res.status(400).send(e)
// //     })
// // })
// app.post('/users', async (req, res) => {
//     const user = new User(req.body)

//     try {
//         await user.save()
//         res.status(201).send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// app.post('/tasks', async (req, res) => {
//     const task = new Task(req.body)

//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })

// // app.get('/users', (req, res) => {
// //     User.find({}).then((users) => {
// //         res.send(users)
// //     }).catch((e) => {
// //         res.status(500).send()
// //     })
// // })
// app.get('/users', async (req, res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
// app.get('/users/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const user = await User.findById(_id)

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// // app.get('/users/:id', (req, res) => {
// //     const _id = req.params.id

// //     User.findById(_id).then((user) => {
// //         if (!user) {
// //             return res.status(404).send()
// //         }

// //         res.send(user)
// //     }).catch((e) => {
// //         res.status(500).send()
// //     })
// // })
// app.get('/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find({})
//         res.send(tasks)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// app.get('/tasks/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const task = await Task.findById(_id)

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
// app.patch('/users/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({
//             error: 'Invalid updates!'
//         })
//     }

//     try {
//         const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true,
//             error: "invalid ID"
//         })

//         if (!user) {
//             return res.status(404).send()
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })
// app.patch('/tasks/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({
//             error: 'Invalid updates!'
//         })
//     }

//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
//             new: true,
//             runValidators: true
//         })

//         if (!task) {
//             return res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })
// app.delete('/tasks/:id', async (req, res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)

//         if (!task) {
//             res.status(404).send()
//         }

//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
// app.delete('/users/:id', async (req, res) => {
//     try {
//         const user = await User.findByIdAndDelete(req.params.id)

//         if (!user) {
//             res.status(404).send(
//                 "deleted succesfully"
//             )
//         }

//         res.send(user)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })
// const express = require('express')
// require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

// const app = express()
// const port = process.env.PORT || 3000

// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// const router = new express.Router()
// router.get('/test', (req, res) => {
//     res.send('This is from my other router')
// })
//  app.use(router)

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })
// const express = require('express')
// require('./db/mongoose')
// const userRouter = require('./routers/user')
// const taskRouter = require('./routers/task')

// const app = express()
// const port = process.env.PORT || 3000
// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     next()
// })

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })
// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

// app.use(express.json())
// app.use(userRouter)
// app.use(taskRouter)

// app.listen(port, () => {
//     console.log('Server is up on port ' + port)
// })
// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     // here 8 is no of times hashing
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)
//     // hashing algorithms are one way only, you can’t reverse it
//     const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
//     console.log(isMatch)
// }

//myFunction()
//const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
//     // const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse')
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()
// const pets ={
//     names: "sharath, maddy"
//}
//console.log(pets)

//const Task = require('./models/task')

// const main = async () => {
//     const task = await Task.findById('60817513cd8fca140848127c')
//     console.log(task)
// }

// main()
// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//    //    const task = await Task.findById('60817513cd8fca140848127c')
//     // console.log(task)
//     // console.log(task.owner)
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)
// }

// main()

// const User = require('./models/user') //(NEW LINE ADDED)

// const main = async () => {
//     const user = await User.findById('607c4cc68c868404dcd5e82f') 
//     console.log(user.tasks) // WE WILL GET UNDEFINED RESULT IN TERMINAL.
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }

// main()
const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000 // 1 Mega bytes ( 1 million bytes)
    },
    // fileFilter(req, file, cb) {
    //     if (!file.originalname.endsWith('.pdf')) {
    //         return cb(new Error('Please upload a PDF'))
    //     }
    //     // callback function
    //     // cb(new Error('File must be PDF')
    //     // cb(undefined, false)

    //     cb(undefined, true)
    // },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a Word document'))
        }
    
        cb(undefined, true)
    }
})
// const upload = multer({
//     dest: 'avatars',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//             return cb(new Error('Please upload an image'))
//         }

//         cb(undefined, true)
//     }
// })




// end point to upload the images
// middleware multer, we are going to use single method
// it will search the file called upload , when new reuest comes in
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })
// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload', errorMiddleware, (req, res) => {
//     res.send()
// })

// app.post('/upload', errorMiddleware, (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send()
// })
// app.post('/upload', errorMiddleware, (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })
app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

