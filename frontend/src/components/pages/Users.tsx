import styled from "styled-components"
import { SearchInput } from "../molecule/SearchInput"
import { HeaderOnly } from "../templates/HeaderOnly"
import { UserCard } from "../organisms/user/UserCard"

function* range(start: number, end: number) {
  for (let i = start; i < end; i++) {
    yield i
  }
}

const users = [...range(0, 10)].map((id) => {
  return {
    id,
    name: `ユーザー${id}`,
    image: "https://source.unsplash.com/random",
    email: "test@test.com",
    phone: "000-1111-2222",
    company: {
      name: "テスト株式会社",
    },
    website: "https://google.com",
  }
})

export const Users = () => {
  return (
    <HeaderOnly>
      <SContainer>
        <h2>ユーザー一覧</h2>
        <SearchInput />
        <SUserArea>
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </SUserArea>
      </SContainer>
    </HeaderOnly>
  )
}

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`
