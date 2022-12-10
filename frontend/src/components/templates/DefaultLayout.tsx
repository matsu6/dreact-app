import { FC, ReactNode } from "react"
import { Header } from "../atoms/layout/Header"
import { Footer } from "../atoms/layout/Footer"
type HeaderOnly = {
  children: ReactNode
}

export const DefaultLayout: FC<HeaderOnly> = (props) => {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
