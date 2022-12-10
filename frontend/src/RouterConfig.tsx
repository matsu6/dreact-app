import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import { Top } from "./components/pages/Top"
import { Users } from "./components/pages/Users"
import { NotFound } from "./components/NotFound"
export const RouterConfig: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="top" element={<Top />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
