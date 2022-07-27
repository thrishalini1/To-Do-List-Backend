// require('../src/db/mongoose')
// const User = require('../src/models/users')

// User.findByIdAndUpdate('6046306a91d4d1106c099823', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

require('../src/db/mongoose')
const User = require('../src/models/users')

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60462f5b5f4fd11d7c49b514', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
