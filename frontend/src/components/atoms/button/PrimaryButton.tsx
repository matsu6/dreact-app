import { ReactNode, FC } from "react"
import styled from "styled-components"
import { BaseButton } from "./BaseButton"

type PrimaryButtonProps = {
  children: ReactNode
}

export const PrimaryButton: FC<PrimaryButtonProps> = (props) => {
  const { children } = props
  return <SButton>{children}</SButton>
}

const SButton = styled(BaseButton)`
  background-color: #40514e;
`
