import { ReactNode, FC } from "react"
import styled from "styled-components"
import { BaseButton } from "./BaseButton"

type SecondaryButtonProps = {
  children: ReactNode
}

export const SecondaryButton: FC<SecondaryButtonProps> = (props) => {
  const { children } = props
  return <SButton>{children}</SButton>
}

const SButton = styled(BaseButton)`
  background-color: #11999e;
`
