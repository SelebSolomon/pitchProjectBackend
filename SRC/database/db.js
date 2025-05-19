const mongoose = require('mongoose')



const DB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`monngo db is connected to ${conn.connection}`)
    
    } catch (error) {
        console.log(error)
    }
}

module.exports = DB;
// mongoose.connect('mongodb://localhost:27017/MrCharlieVideo2').then(()=>{
//     console.log('connected to database')
// }).catch(err=>{
//     console.log()
// })