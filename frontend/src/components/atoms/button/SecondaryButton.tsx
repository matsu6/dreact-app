import { ReactNode, FC } from "react"
import styled from "styled-components"
import { BaseButton } from "./BaseButton"

type SecondaryButtonProps = {
  children: ReactNode
  onClick?: () => void
}

export const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
  const { children, onClick } = props
  return <SButton onClick={onClick}>{children}</SButton>
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`
