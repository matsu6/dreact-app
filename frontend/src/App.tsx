import React from "react"
import "./styles.css"
import { DefaultLayout } from "./components/templates/DefaultLayout"
import { CommonButton } from "./components/atoms/button/CommonButton"
function App() {
  return (
    <DefaultLayout>
      <h1>hello</h1>
      <CommonButton>muiボタン</CommonButton>
    </DefaultLayout>
  )
}

export default App
