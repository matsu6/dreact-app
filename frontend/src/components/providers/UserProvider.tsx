import { createContext, ReactNode, FC, useState } from "react"

type UserProviderProps = {
  children: ReactNode
}

type UserContext = {
  userInfo: { isAdmin: boolean | null }
  setUserInfo: React.Dispatch<React.SetStateAction<{ isAdmin: boolean }>>
}

export const UserContext = createContext({} as UserContext)

export const UserProvider: FC<UserProviderProps> = (props) => {
  const { children } = props
  const [userInfo, setUserInfo] = useState({ isAdmin: false })
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  )
}
