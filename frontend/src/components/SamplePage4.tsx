import React from "react"
import {
  Outlet,
  NavLink,
  useNavigate,
  useParams,
  NavigateFunction,
} from "react-router-dom"

export const SamplePage4 = () => {
  const navigate: NavigateFunction = useNavigate()

  return (
    <>
      <h3>Sample Page 4</h3>
      <ul>
        <li>
          <NavLink to="child1">Show Child1</NavLink>
        </li>
        <li>
          <NavLink to="child2">Show Child2</NavLink>
        </li>
        <li>
          <NavLink to="123">Show Child3</NavLink>
        </li>
      </ul>
      <button onClick={() => navigate("")}>clear</button>
      <Outlet />
    </>
  )
}

export const SamplePage4Child1 = () => {
  return <h3>Sample Page 4 Child1</h3>
}
export const SamplePage4Child2 = () => {
  return <h3>Sample Page 4 Child2</h3>
}
export const SamplePage4Child3 = () => {
  type Param = {
    cildid?: string
  }

  const params: Param = useParams<Param>()
  return (
    <>
      <h3>Sample Page 4 Child3</h3>
      <p>{`cildid=${params?.cildid}`}</p>
    </>
  )
}
