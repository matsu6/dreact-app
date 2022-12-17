import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./components/pages/Home"
import { Login } from "./components/pages/Login"
import { DefaultLayout } from "./components/templates/DefaultLayout"
import { UserManagement } from "./components/pages/UserManagement"
import { Setting } from "./components/pages/Setting"
import { NotFound } from "./components/pages/NotFound"
function App() {
  return (
    <DefaultLayout>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/user_management" element={<UserManagement />} />
          <Route path="/home/setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultLayout>
  )
}

export default App
