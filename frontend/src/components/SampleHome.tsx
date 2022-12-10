import React from "react"
import { Link, createSearchParams, useNavigate } from "react-router-dom"

export const SampleHome = () => {
  const navigate = useNavigate()
  const params = createSearchParams({
    query1: "value3",
    query2: "value4",
  }).toString()

  return (
    <div>
      <h1>SampleHome</h1>
      <nav>
        <ul>
          <li>
            <Link to="page1">Sample Page1</Link>
          </li>
          <li>
            <Link to="page2">Sample Page2</Link>
          </li>
          <li>
            <Link to="page2?query1=value1&query2=value2">
              Sample Page2 With Query1
            </Link>
          </li>
          <li>
            <Link to={`page2?${params}`}>Sample Page2 WithQuery2</Link>
          </li>
          <li>
            <Link to={`page3?${params}`}>Sample Page3</Link>
          </li>
          <li>
            <Link to={`page4`}>Sample Page4</Link>
          </li>
        </ul>
        <button onClick={() => navigate("page1")}>Sample Page1</button>
      </nav>
    </div>
  )
}
