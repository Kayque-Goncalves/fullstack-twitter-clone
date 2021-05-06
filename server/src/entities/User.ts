import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  _id: string

  @Column()
  name: string

  @Column()
  loginOption: string

  @Column()
  password: string

  @Column()
  birth: string

  constructor () {
    if (!this._id) this._id = uuid()
  }
}

export { User }
