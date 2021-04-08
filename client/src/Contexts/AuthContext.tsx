import React, { ReactNode, useState } from 'react'
import SignupModal from '../components/SignupModal'

interface AuthContextData {
  openModal: () => void
  closeModal: () => void
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = React.createContext({} as AuthContextData)

export function AuthProvider ({ children }: AuthProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function openModal () {
    setIsModalOpen(true)
  }

  function closeModal () {
    setIsModalOpen(false)
  }

  return (
    <AuthContext.Provider
      value={{
        openModal,
        closeModal
      }}
    >
      {children}

      { isModalOpen && <SignupModal /> }
    </AuthContext.Provider>
  )
}
