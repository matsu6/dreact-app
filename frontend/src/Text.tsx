import { FC } from "react"
import { TextType } from "./types/text"

export const Text: FC<TextType> = (props) => {
  const { color, fontSize } = props
  return <p style={{ color, fontSize }}>テキストです</p>
}
