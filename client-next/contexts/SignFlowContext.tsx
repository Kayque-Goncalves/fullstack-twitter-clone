import { createContext, ReactNode, useContext, useState } from 'react'

import { createAccount } from '../pages/api/utils/singup/createAccount'
import { IUserData } from '../pages/api/utils/singup/IUserData'

interface SignFlowContextData {
  changeStep: () => void
  toggleModal: () => void
  setUserData: (userData: IUserData) => void
  handleSubmit: (e: any) => Promise<void>
  handleChange: (e: { target: { name:string, value: string } }) => void
  changeUserSignOption: () => void
  userData: IUserData
  signStep: number
  isModalOpen: boolean
  userSignOption: number
}

interface SignFlowContextProviderProps {
  children: ReactNode
} 

const initialState = { name: '', loginOption: '', birth: '', month: '', day: '', year: '', password: '', confirmPassword: '' }

export const SignFlowContext = createContext({} as SignFlowContextData)

export function SignFlowContextProvider({ children }: SignFlowContextProviderProps) {
  const [userSignOption, setUserSignOption] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [signStep, setSignStep] = useState(1)
  const [userData, setUserData] = useState(initialState)

  function toggleModal () {
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false)
  }
  
  function changeStep () {
    if (signStep === 1) setSignStep(2)
    if (signStep === 2) setSignStep(1)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // maybe a database responsability
    userData.birth = `${userData.month}, ${userData.day}, ${userData.year}`

    try{
      await createAccount(userData)

    } catch (err) {
      console.log(err)
    }
  }

  function handleChange (e: { target: { name:string, value: string } }) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  function changeUserSignOption () {
    if (userSignOption === 0) setUserSignOption(1)
    if (userSignOption === 1) setUserSignOption(0)
  }

  return (
    <SignFlowContext.Provider value={{
        changeStep,
        toggleModal,
        setUserData,
        handleSubmit,
        handleChange,
        changeUserSignOption,
        userData,
        signStep,
        isModalOpen,
        userSignOption
      }}>

      { children }
    </SignFlowContext.Provider>
  )
}

export const useSignFlow = () => {
  return useContext(SignFlowContext)
} 
