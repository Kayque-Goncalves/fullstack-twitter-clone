import mongoose, { Schema, Document } from 'mongoose'


export interface IUser extends Document {
  name: string,
  email: string,
  phone: string,
  password: string,
  birth: string
}

const UserSchema: Schema = new Schema({
  name: {
    type: String, 
    require: true
  },
  email: {
    type: String,
    require: false
  },
  phone: {
    type: String,
    require: false
  },
  password: {
    type: String,
    require: true
  },
  birth: {
    type: String,
    require: true
  }
})

export default mongoose.model<IUser>("User", UserSchema)
