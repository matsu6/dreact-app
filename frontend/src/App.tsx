import React, { useState } from "react"
import axios, { AxiosResponse } from "axios"
import { Todo } from "./Todo"
import { TodoType } from "./types/todo"
import { Text } from "./Text"
import { UserProfile } from "./UserProfile"

const user = {
  name: "John",
  hobbies: ["映画", "ゲーム"],
}

function App() {
  const [todos, setTodos] = useState([] as TodoType[])

  const onClickFetchData = async () => {
    try {
      const res: AxiosResponse<TodoType[]> = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      )
      setTodos(res.data)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className="App">
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>todo</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          userId={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
      <Text color="red" fontSize="18px" />
    </div>
  )
}

export default App
