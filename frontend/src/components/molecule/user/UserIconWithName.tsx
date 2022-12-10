import { FC } from "react"
import styled from "styled-components"
type UserIconWithName = {
  name: string
  image: string
}

export const UserIconWithName: FC<UserIconWithName> = (props) => {
  const { name, image } = props
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  )
}

const SContainer = styled.div`
  text-align: center;
`

const SImg = styled.img`
  border-radius: 50%;
`

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`
