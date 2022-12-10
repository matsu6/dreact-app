import React from "react"
import { useSearchParams } from "react-router-dom"

export const SamplePage2 = () => {
  const [searchParams] = useSearchParams()

  const query1 = searchParams.get("query1")
  const query2 = searchParams.get("query2")
  console.log("query1", query1)
  console.log("query2", query2)

  return <div>SamplePage2</div>
}
