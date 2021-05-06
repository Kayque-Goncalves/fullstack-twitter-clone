import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { router } from './routes'

import './database/connect'
const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.listen(process.env.PORT || 5000, () => console.log(`Server is running on port: ${ process.env.PORT || 5000 }` ))
