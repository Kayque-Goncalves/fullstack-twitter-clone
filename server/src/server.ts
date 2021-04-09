import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/user'
// import postRoutes from './routes/post'

const app = express()
const PORT = process.env.PROT || 5000
dotenv.config()

app.use(express.json({ limit: "30mb" }))
app.use(express.urlencoded({ limit: "30mb" }))
app.use(cors())

app.use('/user', userRoutes)
// app.get('/posts', postRoutes)

// app.get('/', (req, res) => {
//     res.send('Everything is working fine.')
// })

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${ PORT }`)))
    .catch((error) => console.log(error))

mongoose.set('useFindAndModify', false)
