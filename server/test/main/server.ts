import { MongoHelper } from '../external/repositories/mongodb/helpers/mongo-helper'
import dotenv from 'dotenv'
import app from './config/app'

dotenv.config()

MongoHelper.connect(process.env.CONNECTION_URL)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(process.env.PORT || 5000, () => { console.log(`Server running on port: ${ process.env.PORT }`) })
  })
  .catch((error: any) => console.log(error))

app.get('/', (request, resposne) => {
    resposne.send('Everything is working fine.')
})
