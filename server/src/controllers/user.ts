import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/user'

const secret = 'test'

export const signin = async (req: any, res: any) => {
  const { email, password } = req.body
  try {
    const existingUser = await User.findOne({ email })
    if(!existingUser) return res.status(404).json({ message: "User don't exist." })

    const isPasswordCorrect = await bcrypt.compare(password, existingUser?.password)
    if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials." })

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, secret, { expiresIn: '2h' })
    res.status(200).json({ result: existingUser, token })

  } catch (error) {
    res.status(500).json({ message: "Something went wrong." })
  }
}

export const signup = async (req: any, res: any) => { 
  const { name, email, phone, password, confirmPassword, birth } = await req.body
  try {
    const existingUser = User.findOne({ email })
    if(!existingUser) return res.status(404).json({ message: "User don't exist." })
    if(password !== confirmPassword) return res.stauts(400).json({ message: "Password don't match" })

    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await User.create({ name, email, phone, password: hashedPassword, birth })
    const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: '2h' })

    res.status(200).json({ result, token })
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." })
  }
}
