import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string,
  loginOption: string;
  password: string,
  birth: string
}

const UserSchema: Schema = new Schema({
  name: {
    type: String, 
    require: true
  },
  loginOption: {
    type: String,
    require: true
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
