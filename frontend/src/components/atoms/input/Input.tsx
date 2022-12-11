import { FC } from "react"
import styled from "styled-components"

type InputProps = {
  placeholder?: string
}

export const Input: FC<InputProps> = (props) => {
  const { placeholder = "" } = props
  return <SInput placeholder={placeholder} />
}

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 9999px;
  outline: none;
`