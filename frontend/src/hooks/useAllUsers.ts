import { useState } from "react"
import { UserProfile } from "../types/userProfile"
import { User } from "../types/api/user"
import axios from "axios"

// 全ユーザーを一覧を取得するカスタムフック
export const useAllUsers = () => {
  const [userProfiles, setUserProfiles] = useState([] as Array<UserProfile>)
  const [error, setError] = useState(false)

  const getUsers = async () => {
    try {
      const res = await axios.get<Array<User>>(
        "https://jsonplaceholder.typicode.com/users"
      )
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`,
      }))
      setUserProfiles(data)
    } catch (e) {
      setError(true)
      console.log(e)
    } finally {
      setError(false)
    }
  }

  //オブジェクトか配列で他に返せる
  return { getUsers, userProfiles, error }
}
