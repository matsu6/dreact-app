import React from "react"
import "./styles.css"
import { PrimaryButton } from "./components/atoms/button/PrimaryButton"
import { SecondaryButton } from "./components/atoms/button/SecondaryButton"
import { SearchInput } from "./components/molecule/SearchInput"
import { UserCard } from "./components/organisms/user/UserCard"
import { DefaultLayout } from "./components/templates/DefaultLayout"

const user = {
  name: "John",
  image: "https://source.unsplash.com/random",
  email: "test@test.com",
  phone: "000-1111-2222",
  company: {
    name: "テスト株式会社",
  },
  website: "https://google.com",
}

function App() {
  return (
    <DefaultLayout>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </DefaultLayout>
  )
}

export default App
