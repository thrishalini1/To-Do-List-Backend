// require('../src/db/mongoose')
// const Task = require('../src/models/task')

// Task.findByIdAndDelete('60462f5b5f4fd11d7c49b515').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })
require('../src/db/mongoose')
const Task = require('../src/models/task')

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60462e8b43fd0322149b5023').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
