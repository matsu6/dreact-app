import { ReactNode } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

export const DefaultLayout = (props: { children: ReactNode }) => {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  })
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
