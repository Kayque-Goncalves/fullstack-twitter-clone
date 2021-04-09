import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import User from '../models/user'

const secret = 'test'

export const signin = async (req: any, res: any) => {
  const { loginOption, password } = req.body
  try {
    const existingUser = await User.findOne({ loginOption })
    if(!existingUser) return res.status(404).json({ message: "User don't exist." })

    const isPasswordCorrect = await bcrypt.compare(password, existingUser?.password)
    if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials." })

    const token = jwt.sign({ loginOption: existingUser.loginOption, id: existingUser._id }, secret, { expiresIn: '2h' })
    res.status(200).json({ result: existingUser, token })

  } catch (error) {
    res.status(500).json({ message: "Something went wrong." })
  }
}

export const signup = async (req: any, res: any) => { 
  const { name, loginOption, password, confirmPassword, month, day, year } = await req.body
  try {

    const existingUser = User.findOne({ loginOption })
    if(!existingUser) return res.status(404).json({ message: "User don't exist." })
    if(password !== confirmPassword) return res.stauts(400).json({ message: "Password don't match" })

    const hashedPassword = await bcrypt.hash(password, 12)
    const result = await User.create({ name, loginOption, password: hashedPassword, birth: `${month}, ${day}, ${year}` })
    const token = jwt.sign({ loginOption: result.loginOption, id: result._id }, secret, { expiresIn: '2h' })

    res.status(200).json({ result, token })
    
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." })
  }
}
