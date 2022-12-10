import { FC, ReactNode } from "react"
import { Header } from "../atoms/layout/Header"
type HeaderOnly = {
  children: ReactNode
}

export const HeaderOnly: FC<HeaderOnly> = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
    </>
  )
}
