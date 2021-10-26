
const mongoose =require('mongoose')

const URI = process.env.DB_URI

const main = async () =>{
    await mongoose.connect(URI, () => console.log('Database conected'))
    
}
main().catch(err => console.log(err) )


