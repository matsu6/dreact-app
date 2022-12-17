import React, { Suspense } from "react"
import { UserCard } from "./components/UserCard"
import { Loading } from "./components/Loading"
import { useAllUsers } from "./hooks/useAllUsers"
function App() {
  const { getUsers, userProfiles, error } = useAllUsers()
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <button onClick={getUsers}>データ取得</button>
        <br />
        {error ? (
          <p style={{ color: "red" }}>データの取得に失敗しました。</p>
        ) : (
          userProfiles.map((user, index) => (
            <UserCard key={index} user={user} />
          ))
        )}
      </Suspense>
    </div>
  )
}

export default App
