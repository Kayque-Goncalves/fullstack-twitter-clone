import { createContext, ReactNode, useContext, useState } from 'react'

interface SignFlowContextData {
  toggleModal: () => void
  changeStep: () => void
  isModalOpen: boolean
  signStep: number
}

interface SignFlowContextProviderProps {
  children: ReactNode
}

export const SignFlowContext = createContext({} as SignFlowContextData)

export function SignFlowContextProvider({ children }: SignFlowContextProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [signStep, setSignStep] = useState(1)

  function toggleModal () {
    !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false)
  }
  
  function changeStep () {
    if (signStep === 1) setSignStep(2)
    if (signStep === 2) setSignStep(1)
  }

  return (
    <SignFlowContext.Provider value={{
        toggleModal,
        isModalOpen,
        changeStep,
        signStep
      }}>

      { children }
    </SignFlowContext.Provider>
  )
}

export const useSignFlow = () => {
  return useContext(SignFlowContext)
} 
