import Button from "@mui/material/Button"
import { ReactNode } from "react"

export const CommonButton = (props: { children: ReactNode }) => {
  const { children } = props
  return <Button variant="contained">{children}</Button>
}
