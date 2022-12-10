import React, { useState, useCallback } from "react"
import ChildArea from "./ChildArea"

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const onClickOpen = () => setIsOpen(!isOpen)

  const onClickUp = () => setCount(count + 1)
  const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value)

  const onClickClose = useCallback(() => setIsOpen(false), [setIsOpen])
  return (
    <div className="App">
      <input onChange={onChangeText} value={text} />
      <br />
      <br />
      <button onClick={onClickUp}>表示</button>
      <button onClick={onClickOpen}>切り替え</button>
      <ChildArea isOpen={isOpen} onClickClose={onClickClose} />
    </div>
  )
}

export default App
