import styled from "styled-components"
import { useContext } from "react"
import { UserContext } from "../providers/UserProvider"
import { DefaultLayout } from "../templates/DefaultLayout"
import { useNavigate } from "react-router-dom"
import { SecondaryButton } from "../atoms/button/SecondaryButton"

export const Top = () => {
  const navigate = useNavigate()
  const { setUserInfo } = useContext(UserContext)

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true })
    // navigate("/users", { state: { isAdmin: true } })
    navigate("/users")
  }

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false })
    // navigate("/users", { state: { isAdmin: false } })
    navigate("/users")
  }
  return (
    <DefaultLayout>
      <SContainer>
        <h2>Topページです</h2>
        <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
        <br />
        <br />
        <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      </SContainer>
    </DefaultLayout>
  )
}

const SContainer = styled.div`
  text-align: center;
`
