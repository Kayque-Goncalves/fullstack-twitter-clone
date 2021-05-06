import { createConnection } from 'typeorm'

createConnection()
  .then(() => console.log('Sucessfuly connect with database'))
